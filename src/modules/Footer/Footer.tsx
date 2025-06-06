import { useT } from '@/hooks';

import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useT('footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>{t('text')}</div>
    </footer>
  );
};
