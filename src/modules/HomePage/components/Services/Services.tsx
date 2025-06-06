import React from 'react';
import styles from './Services.module.scss';
import classNames from 'classnames';
import { MainNavigation } from '@/constants';
import { useT } from '@/hooks';
import { Service } from '@/types';
import { SharedSvg } from '@/modules/Shared/SharedSvg';

export const Services = () => {
  const t = useT('homePage.services');

  const services = t.raw<Service[]>('list');

  return (
    <section
      className={styles.services}
      id={MainNavigation.SERVICES.path.slice(2)}
    >
      <div className='container'>
        <h2 className={classNames(styles.services__title, 'title')}>
          {t('title')}
        </h2>
        <p className={classNames(styles.services__subtitle, 'subtitle')}>
          {t('subtitle')}
        </p>

        <ul className={styles.services__list}>
          {services.map(({ title, icon, list }) => {
            return (
              <li key={title} className={styles.services__card}>
                <div className={styles.services__cardIcon}>
                  <SharedSvg type={icon} />
                </div>

                <h3 className={styles.services__cardTitle}> {title} </h3>

                <ul className={styles.services__cardList}>
                  {list.map((item) => (
                    <li className={styles.services__cardItem} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
