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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={styles.page}>
      <body
        className={`${geistSans.variable} ${styles.page__body} theme-light`}
      >
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
