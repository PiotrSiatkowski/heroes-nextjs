import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t-color mt-10 border-t-4 border-[#2c2e2e] bg-gradient-to-b from-black/80 to-black/60">
      <Container className="py-4 lg:py-8">
        <h2 className="h4 mb-4">{t('footer.aboutUs')}</h2>
        <div className="max-w-3xl text-justify">{t('footer.description')}</div>
        <div className="mt-8">
          {t('footer.powerBy')}{' '}
          <Link
            href="mailto:mymail@here"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-500"
          >
            mymail@here
          </Link>
        </div>
      </Container>
    </footer>
  );
};
