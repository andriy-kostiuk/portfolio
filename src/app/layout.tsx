import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'modern-normalize';

import '@/styles/globals.scss';

import styles from './layout.module.scss';

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
      <body className={`${geistSans.variable} theme-light`}>{children}</body>
    </html>
  );
}
