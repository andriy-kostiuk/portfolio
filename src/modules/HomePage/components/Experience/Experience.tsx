import classNames from 'classnames';
import React from 'react';
import styles from './Experience.module.scss';
import { IExperience } from '@/types';
import { ExperienceCard } from '../ExperienceCard';
import { MainNavigation } from '@/constants';
import { useT } from '@/hooks';

export const Experience = () => {
  const t = useT('homePage.experience');

  const list = t.raw<IExperience[]>('list');

  return (
    <section
      className={styles.exp}
      id={MainNavigation.EXPERIENCE.path.slice(2)}
    >
      <div className='container'>
        <h2 className={classNames(styles.exp__title, 'title')}>{t('title')}</h2>
        <p className={classNames(styles.exp__subtitle, 'subtitle')}>
          {t('subtitle')}
        </p>

        <ul className={styles.exp__list}>
          {list.map((exp) => (
            <ExperienceCard exp={exp} key={exp.company} />
          ))}
        </ul>
      </div>
    </section>
  );
};
