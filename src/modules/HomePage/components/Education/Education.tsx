import React from 'react';
import styles from './Education.module.scss';
import classNames from 'classnames';
import { IEducation } from '@/types';
import { EducationCard } from '../EducationCard';
import { MainNavigation } from '@/constants';
import { useTranslations } from 'next-intl';

interface Group {
  title: string;
  values: IEducation[];
}

export const Education = () => {
  const t = useTranslations('homePage.education');

  const educationGroups = t.raw('groups') as Group[];

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

        {educationGroups.map(({ title, values }) => {
          return (
            <React.Fragment key={title}>
              <h3 className={styles.education__groupTitle}>{title}</h3>
              <ul className={styles.education__list}>
                {values.map((item) => (
                  <EducationCard key={item.title} item={item} />
                ))}
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
