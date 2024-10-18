import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

import { ImageFieldsFragment } from '@src/lib/__generated/sdk';
import { useEffect, useState } from 'react';

interface ImageProps extends Omit<ImageFieldsFragment, '__typename'> {
  nextImageProps?: Omit<NextImageProps, 'src' | 'alt'>;
}

export const CtfImage = ({ url, width, height, title, nextImageProps }: ImageProps) => {
  const [heroHasLoaded, setHeroHasLoaded] = useState(false);

  useEffect(() => {
    setHeroHasLoaded(false);
  }, [url]);

  if (!url) {
    return null;
  }

  const blurURL = new URL(url);
  blurURL.searchParams.set('w', '10');

  return (
    <div className="bg-black">
      <div
        className={`transition-opacity duration-500 ${heroHasLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <NextImage
          onLoadingComplete={() => setHeroHasLoaded(true)}
          src={url}
          width={width ?? undefined}
          height={height ?? undefined}
          alt={title || ''}
          sizes="(max-width: 1200px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL={blurURL.toString()}
          {...nextImageProps}
          className={twMerge(nextImageProps?.className, 'transition-all')}
        />
      </div>
    </div>
  );
};
