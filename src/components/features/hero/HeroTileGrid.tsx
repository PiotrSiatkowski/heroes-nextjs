import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { HeroTile } from '@src/components/features/hero/HeroTile';
import { PageHeroFieldsFragment } from '@src/lib/__generated/sdk';

interface Props extends HTMLProps<HTMLDivElement> {
  heroes?: Array<PageHeroFieldsFragment | null>;
  current?: string | null;
}

export const HeroTileGrid = ({ heroes, current, className, ...props }: Props) => {
  return heroes && heroes.length > 0 ? (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-x-2 gap-y-2 xs:grid-cols-2 lg:grid-cols-3 lg:gap-x-3 lg:gap-y-3',
        className,
      )}
      {...props}
    >
      {heroes.map((hero, index) => {
        return hero ? <HeroTile key={index} hero={hero} current={current} /> : null;
      })}
    </div>
  ) : null;
};
