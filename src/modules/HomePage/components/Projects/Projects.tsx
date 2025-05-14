import classNames from 'classnames';
import React from 'react';
import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.exp}>
      <div className='container'>
        <h2 className={classNames(styles.exp__title, 'title')}>Experience</h2>
        <p className={classNames(styles.exp__subtitle, 'subtitle')}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
    </section>
  );
};
