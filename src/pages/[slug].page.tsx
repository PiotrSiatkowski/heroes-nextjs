import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { HeroView, HeroTileGrid } from 'src/components/features/hero';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { PageHeroFieldsFragment, PageHeroOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const hero = useContentfulLiveUpdates(props.hero);
  const heroes = useContentfulLiveUpdates(props.heroes);

  if (!hero || !heroes) {
    return;
  }

  return (
    <>
      <div className="fixed top-0 -z-10 h-full w-full bg-[url('https://cdn.wallpapersafari.com/37/55/i53keV.png')] bg-contain bg-center" />
      <div className="fixed top-0 -z-10 h-full w-full bg-black opacity-60" />
      {hero.seoFields && <SeoFields {...hero.seoFields} />}
      <Container className="py-4 lg:py-8">
        <HeroView hero={hero} />
      </Container>

      <div className="bg-cover">
        <Container className="py-4 md:mb-10 lg:mb-16 lg:py-8">
          <h2 className="mb-4 md:mb-6">{t('landingPage.latestArticles')}</h2>
          <HeroTileGrid className="md:grid-cols-3 lg:grid-cols-5" heroes={heroes} />
        </Container>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  hero: ({ __typename?: 'PageHero' } & PageHeroFieldsFragment) | null | undefined;
  heroes: Array<({ __typename?: 'PageHero' } & PageHeroFieldsFragment) | null> | undefined;
}> = async ({ params = {}, locale, draftMode: preview }) => {
  try {
    if (!params?.slug || !locale) {
      return {
        notFound: true,
        revalidate: revalidateDuration,
      };
    }

    const gqlClient = preview ? previewClient : client;

    const [heroData, heroesData] = await Promise.all([
      gqlClient.pageHero({
        locale,
        preview,
        slug: params.slug.toString(),
      }),
      gqlClient.pageHeroCollection({
        limit: 100,
        locale,
        order: PageHeroOrder.PublishedDateDesc,
        preview,
        where: {
          slug_not: params.slug.toString(),
        },
      }),
    ]);

    const hero = heroData.pageHeroCollection?.items[0];
    const heroes = heroesData.pageHeroCollection?.items;

    if (!heroesData) {
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
        hero,
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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const dataPerLocale = locales
    ? await Promise.all(locales.map(locale => client.pageHeroCollection({ locale, limit: 100 })))
    : [];

  const paths = dataPerLocale
    .flatMap((data, index) =>
      data.pageHeroCollection?.items.map(blogPost =>
        blogPost?.slug
          ? {
              params: {
                slug: blogPost.slug,
              },
              locale: locales?.[index],
            }
          : undefined,
      ),
    )
    .filter(Boolean);

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Page;
