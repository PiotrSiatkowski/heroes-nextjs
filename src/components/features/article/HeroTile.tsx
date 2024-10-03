import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';
import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { CtfImage } from '@src/components/features/contentful';
import { PageHeroFieldsFragment } from '@src/lib/__generated/sdk';

interface Props extends HTMLProps<HTMLDivElement> {
  hero: PageHeroFieldsFragment;
}

export const HeroTile = ({ hero, className }: Props) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: hero.sys.id });

  return (
    <Link className="flex flex-col" href={`/${hero.slug}`}>
      <div
        className={twMerge(
          'flex flex-1 flex-col overflow-hidden border-4 border-[#2c2e2e] shadow-lg transition-transform hover:z-50 hover:scale-125',
          className,
        )}
      >
        {hero.featuredImage && (
          <div {...inspectorProps({ fieldId: 'featuredImage' })}>
            <CtfImage
              nextImageProps={{ className: 'object-cover aspect-[16/10] w-full' }}
              {...hero.featuredImage}
            />
          </div>
        )}
      </div>
    </Link>
  );
};
