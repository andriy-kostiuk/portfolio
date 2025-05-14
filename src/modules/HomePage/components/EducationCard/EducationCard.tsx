import React, { FC } from 'react';
import styles from './EducationCard.module.scss';
import { IEducation } from '@/types';

interface Props {
  item: IEducation;
}

export const EducationCard: FC<Props> = ({ item }) => {
  const { title, status, date, result, desc } = item;

  return (
    <li className={styles.card}>
      <div className={styles.card__left}>
        <h3 className={styles.card__title}>{title}</h3>
        <div className={styles.card__wrapper}>
          <p className={styles.card__status}>{status}</p>
          <p className={styles.card__date}>{date}</p>
        </div>
      </div>

      <div className={styles.card__right}>
        <p className={styles.card__result}>{result}</p>
        <p className={styles.card__desc}>{desc}</p>
      </div>
    </li>
  );
};
