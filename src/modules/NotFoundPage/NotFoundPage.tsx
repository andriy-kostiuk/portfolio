import React from 'react';

import styles from './NotFoundPage.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <Image
        className={styles.notFound__img}
        src={'/img/404.webp'}
        alt='404'
        width={1000}
        height={550}
      />
      <h1 className={styles.notFound__title}>404 Error</h1>
      <p className={styles.notFound__subtitle}>Page not found</p>
      <Link className={styles.notFound__link} href={'/'}>
        Back to Home
      </Link>
    </div>
  );
};
