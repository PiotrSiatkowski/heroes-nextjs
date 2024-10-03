import { ReactNode } from 'react';

import { Footer } from '../footer';

interface LayoutPropsInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
