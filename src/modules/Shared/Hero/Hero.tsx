import React, { FC } from 'react';
import styles from './Hero.module.scss';
import classNames from 'classnames';
import { SharedSvg } from '@/modules/Shared/SharedSvg';
import Image from 'next/image';
import Link from 'next/link';
import { MainNavigation } from '@/constants';
import { useTranslations } from 'next-intl';

interface Props {
  link?: boolean;
}

export const Hero: FC<Props> = ({ link = true }) => {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <div className={classNames(styles.hero__container)}>
        <div className={classNames(styles.hero__content)}>
          <h1 className={styles.hero__title}>
            {t.rich('title', {
              span: (chunks) => <span>{chunks}</span>,
            })}
          </h1>

          <p className={styles.hero__subtitle}>{t('text')}</p>

          {link && (
            <Link
              href={MainNavigation.CONTACT.path}
              className={styles.hero__action}
            >
              {t('btn')}
              <span className={styles.hero__icon}>
                <SharedSvg type='arrow' />
              </span>
            </Link>
          )}
        </div>
        <div className={styles.hero__photo}>
          <Image
            src={'/img/hero.png'}
            width={325}
            height={460}
            alt='Andrii Kostiuk'
            priority
          />
        </div>
      </div>
    </section>
  );
};
