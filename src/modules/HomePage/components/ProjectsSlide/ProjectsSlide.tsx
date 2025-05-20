import Image from 'next/image';
import React, { FC } from 'react';
import styles from './ProjectsSlide.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import { ProjectPreview } from '@/types';

type Props = ProjectPreview;

export const ProjectsSlide: FC<Props> = ({
  title,
  preview,
  demo,
  gitHub,
  desc,
  id,
}) => {
  return (
    <div className={styles.slide}>
      <Image
        src={preview}
        width={1900}
        height={700}
        alt={title}
        className={styles.slide__preview}
      />

      <div className={styles.slide__content}>
        <div className={styles.slide__actions}>
          <Link
            href={`/projects/${id}`}
            className={classNames(styles.slide__title, styles.slide__link)}
          >
            {title}
          </Link>

          <div className={styles.slide__extLinks}>
            <a className={styles.slide__link} href={demo} target='_blank'>
              Demo
            </a>
            <a className={styles.slide__link} href={gitHub} target='_blank'>
              GitHub
            </a>
          </div>
        </div>

        <p className={styles.slide__desc}>{desc}</p>
      </div>
    </div>
  );
};
