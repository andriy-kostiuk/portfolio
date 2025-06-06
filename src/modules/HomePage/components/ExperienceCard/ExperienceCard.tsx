import React, { FC } from 'react';
import styles from './ExperienceCard.module.scss';
import { IExperience } from '@/types';
import { SharedSvg } from '@/modules/Shared/SharedSvg';

interface Props {
  exp: IExperience;
}

export const ExperienceCard: FC<Props> = ({ exp }) => {
  const { company, duration, position, list, icon } = exp;

  return (
    <li className={styles.card}>
      <div className={styles.card__left}>
        <div className={styles.card__wrapper}>
          <div className={styles.card__status}>
            <div className={styles.card__icon}>{<SharedSvg type={icon} />}</div>

            <p className={styles.card__company}>{company}</p>
          </div>
        </div>

        <h3 className={styles.card__position}>{position}</h3>

        <p className={styles.card__duration}>{duration}</p>
      </div>

      <div className={styles.card__right}>
        <ul className={styles.card__responsibilities}>
          {list.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};
