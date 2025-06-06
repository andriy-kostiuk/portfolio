import React, { FC } from 'react';

import styles from './Technologies.module.scss';
import classNames from 'classnames';
import { useT } from '@/hooks';

interface Props {
  technologies: string[];
  className?: string;
}

export const Technologies: FC<Props> = ({ technologies, className = '' }) => {
  const t = useT('projectPage');

  return (
    <div className={classNames(styles.features, className)}>
      <h2 className={styles.features__title}>{t('technologies')}</h2>
      <ul className={styles.features__list}>
        {technologies.map((feature) => (
          <li key={feature} className={styles.features__item}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
