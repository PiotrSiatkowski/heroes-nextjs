import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { HeroTile } from '@src/components/features/article/HeroTile';
import { PageHeroFieldsFragment } from '@src/lib/__generated/sdk';

interface Props extends HTMLProps<HTMLDivElement> {
  heroes?: Array<PageHeroFieldsFragment | null>;
}

export const HeroTileGrid = ({ heroes, className, ...props }: Props) => {
  return heroes && heroes.length > 0 ? (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-y-2 gap-x-2 md:grid-cols-3 lg:gap-x-3 lg:gap-y-3',
        className,
      )}
      {...props}
    >
      {heroes.map((hero, index) => {
        return hero ? <HeroTile key={index} hero={hero} /> : null;
      })}
    </div>
  ) : null;
};
