import React from 'react';
import classNames from 'classnames';
import { IEducation } from '@/types';
import { EducationCard } from '../EducationCard';
import { MainNavigation } from '@/constants';
import { useT } from '@/hooks';

import styles from './Education.module.scss';

interface EducationItem {
  title: string;
  values: IEducation[];
}

export const Education = () => {
  const t = useT('homePage.education');

  const educationList = t.raw<EducationItem[]>('list');

  return (
    <section
      className={styles.education}
      id={MainNavigation.EDUCATION.path.slice(2)}
    >
      <div className='container'>
        <h2 className={classNames(styles.education__title, 'title')}>
          {t('title')}
        </h2>
        <p className={classNames(styles.education__subtitle, 'subtitle')}>
          {t('subtitle')}
        </p>

        <ul className={styles.education__groups}>
          {educationList.map(({ title, values }) => {
            return (
              <li key={title}>
                <h3 className={styles.education__groupTitle}>{title}</h3>
                <ul className={styles.education__list}>
                  {values.map((item) => (
                    <EducationCard key={item.title} item={item} />
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
