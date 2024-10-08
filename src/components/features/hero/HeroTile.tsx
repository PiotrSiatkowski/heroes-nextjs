import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';
import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import localFont from 'next/font/local';

import { CtfImage } from '@src/components/features/contentful';
import { PageHeroFieldsFragment } from '@src/lib/__generated/sdk';

const myFont = localFont({ src: '../../../../public/fonts/Wagnesday.ttf' });

interface Props extends HTMLProps<HTMLDivElement> {
  hero: PageHeroFieldsFragment;
}

export const HeroTile = ({ hero, className }: Props) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: hero.sys.id });

  return (
    <Link className="flex flex-col" href={`/${hero.slug}`}>
      <div
        className={twMerge(
          'group flex flex-1 flex-col overflow-hidden border-4 border-[#2c2e2e] shadow-lg transition-transform will-change-transform hover:z-50 hover:scale-105 lg:hover:scale-125',
          className,
        )}
      >
        {hero.featuredImage && (
          <div {...inspectorProps({ fieldId: 'featuredImage' })}>
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span
              style={{ textShadow: '4px 4px black' }}
              className={`${myFont.className} absolute bottom-[0px] left-[10px] text-4xl font-bold leading-10 tracking-widest text-amber-300 opacity-0 mix-blend-luminosity transition-opacity duration-300 group-hover:opacity-100`}
            >
              {hero.name}
            </span>
            <CtfImage
              nextImageProps={{ className: 'object-cover aspect-[16/10] w-full object-top' }}
              {...hero.featuredImage}
            />
          </div>
        )}
      </div>
    </Link>
  );
};
