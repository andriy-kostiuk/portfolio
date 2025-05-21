import React, { FC } from 'react';

import styles from './Approach.module.scss';

interface Props {
  title: string;
  text: string;
}

export const Approach: FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.approach}>
      <h2 className={styles.approach__title}>{title}</h2>
      <p className={styles.approach__text}>{text}</p>
    </div>
  );
};
