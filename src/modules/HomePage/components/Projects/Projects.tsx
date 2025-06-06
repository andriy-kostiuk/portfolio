import classNames from 'classnames';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import { MainNavigation } from '@/constants';
import { SharedSvg } from '@/modules/Shared/SharedSvg';
import { ProjectsSlide } from '../ProjectsSlide';
import { Project, ProjectPreview } from '@/types';
import { useT } from '@/hooks';

import styles from './Projects.module.scss';

export const Projects = () => {
  const t = useT('homePage.projects');

  const projects = useT('').raw<Project[]>('projects');

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

  return (
    <section
      className={styles.projects}
      id={MainNavigation.PROJECTS.path.slice(2)}
    >
      <div className='container'>
        <h2 className={classNames(styles.projects__title, 'title')}>
          {t('title')}
        </h2>
        <p className={classNames(styles.projects__subtitle, 'subtitle')}>
          {t('subtitle')}
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
          {projectsPreview.map((project) => (
            <SwiperSlide key={project.id} className={styles.projects__slide}>
              <ProjectsSlide {...project} />
            </SwiperSlide>
          ))}

          <button
            className={classNames(
              styles.projects__swiperPrev,
              'projects__swiper-prev'
            )}
            aria-label='Previous slide'
            role='button'
          >
            <SharedSvg type='arrow-fill' />
          </button>

          <button
            className={classNames(
              styles.projects__swiperNext,
              'projects__swiper-next'
            )}
            aria-label='Next slide'
            role='button'
          >
            <SharedSvg type='arrow-fill' />
          </button>
        </Swiper>
      </div>
    </section>
  );
};
