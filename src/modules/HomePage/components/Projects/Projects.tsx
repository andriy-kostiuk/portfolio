'use client';

import classNames from 'classnames';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import { MainNAvigation } from '@/constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Projects.module.scss';
import Image from 'next/image';

const projects = [
  {
    title: 'Timeless MET',
    preview: '/img/projects/the-met-preview.png',
    id: '1',
  },
  {
    title: 'First',
    preview: '/img/projects/the-met-preview.png',

    id: '2',
  },
  {
    title: 'First',
    preview: '/img/projects/the-met-preview.png',

    id: '3',
  },
  {
    title: 'First',
    preview: '/img/projects/the-met-preview.png',

    id: '4',
  },
  {
    title: 'First',
    preview: '/img/projects/the-met-preview.png',

    id: '5',
  },
];

export const Projects = () => {
  return (
    <section
      className={styles.projects}
      id={MainNAvigation.PROJECTS.path.slice(2)}
    >
      <div className='container'>
        <h2 className={classNames(styles.projects__title, 'title')}>
          Prrojects
        </h2>
        <p className={classNames(styles.projects__subtitle, 'subtitle')}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>

        <Swiper
          grabCursor={true}
          pagination={{ clickable: true }}
          effect={'creative'}
          navigation={true}
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
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.id} className={styles.projects__slide}>
                <Image
                  src={project.preview}
                  width={300}
                  height={300}
                  alt={project.title}
                  className={styles.projects__slidePreview}
                />

                <div className={styles.projects__slideOverlay}></div>

                <div className={styles.projects__slideContent}>
                  <p className={styles.projects__slideTitle}>{project.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
