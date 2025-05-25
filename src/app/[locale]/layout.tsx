import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalLayout } from '@/modules/GlobalLayout';
import { cookies } from 'next/headers';
import { Theme } from '@/types';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import styles from './layout.module.scss';

import 'modern-normalize';

import '@/styles/globals.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const geistSans = Inter({
  variable: '--font-main',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Andrii Kostiuk',
  description: 'Andrii Kostiuk portfolio',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: '/site.webmanifest',
  other: {
    'apple-mobile-web-app-title': 'Portfolio | Andrii Kostiuk',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'uk' }];
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const cookieStore = cookies();
  const theme = (await cookieStore).get('theme')?.value as Theme | undefined;
  const serverTheme = theme === Theme.DARK ? Theme.DARK : Theme.LIGHT;

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={styles.page}>
      <body
        className={`${geistSans.variable} ${styles.page__body} ${serverTheme}`}
      >
        <NextIntlClientProvider>
          <GlobalLayout theme={serverTheme}>{children}</GlobalLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
