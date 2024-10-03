import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { twMerge } from 'tailwind-merge';

import { CtfImage } from '@src/components/features/contentful';
import { PageHeroFieldsFragment } from '@src/lib/__generated/sdk';

interface Props {
  hero: PageHeroFieldsFragment;
  isFeatured?: boolean;
  isReversedLayout?: boolean;
}
export const HeroView = ({ hero, isFeatured, isReversedLayout = false }: Props) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: hero.sys.id });

  return (
    <div
      className={twMerge(
        `flex flex-col overflow-hidden border-4 border-[#2c2e2e] shadow-lg`,
        isReversedLayout ? 'lg:flex-row-reverse' : 'lg:flex-row',
      )}
    >
      <div className="flex-1 basis-1/2" {...inspectorProps({ fieldId: 'featuredImage' })}>
        {hero.featuredImage && (
          <CtfImage
            nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
            {...hero.featuredImage}
          />
        )}
      </div>

      <div className="relative flex flex-1 basis-1/2 flex-col justify-center bg-black py-2 px-2 lg:px-4 lg:py-4"></div>
    </div>
  );
};
