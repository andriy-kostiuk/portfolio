import React, { FC } from 'react';
import styles from './ExperienceCard.module.scss';
import { IExperience } from '@/types';

interface Props {
  exp: IExperience;
}

export const ExperienceCard: FC<Props> = ({ exp }) => {
  const { company, duration, position, list, icon } = exp;

  return (
    <li className={styles.card}>
      <div className={styles.card__left}>
        <p className={styles.card__duration}>{duration}</p>

        <div className={styles.card__wrapper}>
          <div className={styles.card__status}>
            <div className={styles.card__icon}>{icon}</div>

            <p className={styles.card__company}>{company}</p>
          </div>
          <h3 className={styles.card__position}>{position}</h3>
        </div>
      </div>

      <ul className={styles.card__responsibilities}>
        {list.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </li>
  );
};
