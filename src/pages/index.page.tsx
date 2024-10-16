import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { HeroView, HeroTileGrid } from 'src/components/features/hero';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import {
  PageHeroFieldsFragment,
  PageHeroOrder,
  PageLandingFieldsFragment,
} from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const page = useContentfulLiveUpdates(props.page);
  const heroes = useContentfulLiveUpdates(props.heroes);

  if (!page?.featuredHero || !heroes) {
    return;
  }

  return (
    <>
      <div className="fixed top-0 -z-10 h-full w-full bg-[url('https://cdn.wallpapersafari.com/37/55/i53keV.png')] bg-contain bg-center" />
      <div className="fixed top-0 -z-10 h-full w-full bg-black opacity-60" />
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <Container className="flex w-full flex-row justify-center py-4 lg:py-8">
        <HeroView hero={page.featuredHero} />
      </Container>

      <div className="bg-cover py-4 lg:py-8">
        <Container className="my-8 md:mb-10 lg:mb-16">
          <h2 className="mb-4 md:mb-6">{t('landingPage.latestArticles')}</h2>
          <HeroTileGrid className="md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" heroes={heroes} />
        </Container>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  page: ({ __typename?: 'PageLanding' | undefined } & PageLandingFieldsFragment) | null | undefined;
  heroes: Array<({ __typename?: 'PageHero' } & PageHeroFieldsFragment) | null> | undefined;
}> = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const heroesData = await gqlClient.pageHeroCollection({
      locale,
      order: PageHeroOrder.PublishedDateDesc,
      where: {
        slug_not: page?.featuredHero?.slug,
      },
      preview,
    });
    const heroes = heroesData.pageHeroCollection?.items;

    if (!page) {
      return {
        revalidate: revalidateDuration,
        notFound: true,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        ...(await getServerSideTranslations(locale)),
        page,
        heroes,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default Page;
