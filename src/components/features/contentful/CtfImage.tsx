import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { ImageFieldsFragment } from '@src/lib/__generated/sdk';

interface ImageProps extends Omit<ImageFieldsFragment, '__typename'> {
  nextImageProps?: Omit<NextImageProps, 'src' | 'alt'>;
  opacityMax?: string;
}

export const CtfImage = ({
  opacityMax = 'opacity-100',
  url,
  width,
  height,
  title,
  nextImageProps,
}: ImageProps) => {
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
        className={twMerge(
          nextImageProps?.className,
          'transition-all',
          heroHasLoaded ? opacityMax : 'opacity-0',
        )}
      />
    </div>
  );
};
