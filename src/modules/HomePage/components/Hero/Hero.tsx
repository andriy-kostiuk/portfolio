import React from 'react';
import styles from './Hero.module.scss';
import classNames from 'classnames';
import { SharedSvg } from '@/modules/SharedSvg';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={classNames(styles.hero__container, 'container')}>
        <div className={classNames(styles.hero__content)}>
          <h2 className={styles.hero__title}>
            I design products that delight and inspire people.
          </h2>

          <p className={styles.hero__subtitle}>
            A Product Designer and Visual Developer in SF. I specialize in UI/UX
            Design, Responsive Web Design, and Visual Development.
          </p>

          <button className={styles.hero__action}>
            Let’s Talk
            <span className={styles.hero__icon}>
              <SharedSvg type='arrow' />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
