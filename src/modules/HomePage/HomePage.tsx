import React from 'react';
import styles from './HomePage.module.scss';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Experience } from './components/Experience';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <Services />
      <Education />
      <Experience />
    </div>
  );
};
