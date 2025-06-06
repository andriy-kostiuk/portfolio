'use client';

import React, { FC } from 'react';
import styles from './ProjectPage.module.scss';
import { Gallery } from './components/Gallery';
import { Project } from '@/types';
import { Approach } from './components/Approach';
import { Features } from './components/Features';
import { Technologies } from './components/Technologies';
import { useT } from '@/hooks';

interface Props {
  project: Project;
}

export const ProjectPage: FC<Props> = ({ project }) => {
  const {
    title,
    subtitle,
    demo,
    gitHub,
    desc,
    features,
    images,
    technologies,
    goal,
    solution,
  } = project;

  const t = useT('projectPage');

  return (
    <section className={styles.project}>
      <Gallery images={images} className={styles.project__gallery} />

      <h1 className={styles.project__title}>{title}</h1>
      <h2 className={styles.project__subtitle}>{subtitle}</h2>

      <ul className={styles.project__actions}>
        <li>
          <a
            href={demo}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.project__link}
          >
            {t('demo')}
          </a>
        </li>
        <li>
          <a
            href={gitHub}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.project__link}
          >
            GitHub
          </a>
        </li>
      </ul>

      <div className={styles.project__desc}>
        {desc.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.project__approach}>
        <Approach title={t('goal')} text={goal} />
        <Approach title={t('solution')} text={solution} />
      </div>

      <Features features={features} className={styles.project__features} />

      <Technologies technologies={technologies} />
    </section>
  );
};
