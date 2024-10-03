import { HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

export const HeroLabel = ({ children, className, ...props }: Props) => {
  return (
    <span
      className={twMerge(
        'bg-purple200 text-purple600 rounded px-2 py-1 text-2xs font-semibold uppercase leading-none tracking-widest',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
