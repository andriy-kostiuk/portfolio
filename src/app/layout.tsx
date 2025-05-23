import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'modern-normalize';

import '@/styles/globals.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import styles from './layout.module.scss';
import { GlobalLayout } from '@/modules/GlobalLayout';
import { cookies } from 'next/headers';
import { Theme } from '@/types';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = (await cookieStore).get('theme')?.value as Theme | undefined;
  const serverTheme = theme === Theme.DARK ? Theme.DARK : Theme.LIGHT;

  return (
    <html lang='en' className={styles.page}>
      <body
        className={`${geistSans.variable} ${styles.page__body} ${serverTheme}`}
      >
        <GlobalLayout theme={serverTheme}>{children}</GlobalLayout>
      </body>
    </html>
  );
}
