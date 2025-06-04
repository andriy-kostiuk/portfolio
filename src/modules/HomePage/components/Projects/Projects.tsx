'use client';

import classNames from 'classnames';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import { MainNavigation } from '@/constants';

import styles from './Projects.module.scss';
import { SharedSvg } from '@/modules/Shared/SharedSvg';
import { ProjectsSlide } from '../ProjectsSlide';
import { projects } from '@/data/projects';
import { ProjectPreview } from '@/types';

const projectsPreview: ProjectPreview[] = projects.map(
  ({ id, title, descShort, images, demo, gitHub }) => ({
    id,
    title,
    desc: descShort,
    preview: images[0],
    demo,
    gitHub,
  })
);

export const Projects = () => {
  return (
    <section
      className={styles.projects}
      id={MainNavigation.PROJECTS.path.slice(2)}
    >
      <div className='container'>
        <h2 className={classNames(styles.projects__title, 'title')}>
          Projects
        </h2>
        <p className={classNames(styles.projects__subtitle, 'subtitle')}>
          A selection of projects I’ve built using modern technologies like
          React, TypeScript, Node.js, WebSockets, and PostgreSQL. Each one
          reflects my focus on clean code, functionality, and responsive design.
        </p>

        <Swiper
          grabCursor={true}
          pagination={{ clickable: true }}
          effect={'creative'}
          navigation={{
            nextEl: '.projects__swiper-next',
            prevEl: '.projects__swiper-prev',
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-125%', 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: true,
              translate: ['125%', 0, -800],
              rotate: [0, 0, 90],
            },
          }}
          modules={[EffectCreative, Pagination, Navigation]}
          className={styles.projects__swiper}
        >
          {projectsPreview.map((project) => {
            return (
              <SwiperSlide key={project.id} className={styles.projects__slide}>
                <ProjectsSlide {...project} />
              </SwiperSlide>
            );
          })}

          <button
            className={classNames(
              styles.projects__swiperPrev,
              'projects__swiper-prev'
            )}
            aria-label='Previous slide'
          >
            <SharedSvg type='arrow-fill' />
          </button>

          <button
            className={classNames(
              styles.projects__swiperNext,
              'projects__swiper-next'
            )}
            aria-label='Next slide'
          >
            <SharedSvg type='arrow-fill' />
          </button>
        </Swiper>
      </div>
    </section>
  );
};
