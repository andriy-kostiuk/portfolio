import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        © 2025 Andrii Kostiuk. All Rights Reserved.
      </div>
    </footer>
  );
};
