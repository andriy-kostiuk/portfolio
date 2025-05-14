import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'modern-normalize';

import '@/styles/globals.scss';

import styles from './layout.module.scss';
import { Header } from '@/modules/Header/Header';
import { Footer } from '@/modules/Footer/Footer';
import { InfoSidebar } from '@/modules/InfoSidebar';
import { Menu } from '@/modules/Menu';

const geistSans = Inter({
  variable: '--font-main',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Andrii Kostiuk',
  description: 'portfolio',
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
        <div className={styles.page__layout}>
          <InfoSidebar />
          <div className={styles.page__content}>
            <Header />
            {children}
            <Footer />
          </div>
          <Menu />
        </div>
      </body>
    </html>
  );
}
