import React, { FC } from 'react';

import styles from './Features.module.scss';
import classNames from 'classnames';

interface Props {
  features: string[];
  className?: string;
}

export const Features: FC<Props> = ({ features, className = '' }) => {
  return (
    <div className={classNames(styles.features, className)}>
      <h2 className={styles.features__title}>Key Features</h2>
      <ul className={styles.features__list}>
        {features.map((feature) => (
          <li key={feature} className={styles.features__item}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
