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
import { SharedSvg } from '@/modules/Shared/SharedSvg';
import { ProjectsSlide } from '../ProjectsSlide';
import { ProjectPreview } from '@/types';

const projects: ProjectPreview[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    preview: '/img/projects/portfolio-preview.webp',
    demo: '/',
    gitHub: 'https://github.com/andriy-kostiuk/portfolio',
    desc: 'Personal portfolio website built with Next.js App Router, featuring a fully responsive design, animated UI, and modular architecture using TypeScript and SCSS modules.',
  },
  {
    id: 'the-met',
    title: 'Timeless MET',
    preview: '/img/projects/the-met-preview.webp',
    demo: 'https://andriy-kostiuk.github.io/timeless_met',
    gitHub: 'https://github.com/andriy-kostiuk/timeless_met',
    desc: 'Responsive and modern landing page for the MET Museum, built with HTML5 and SCSS. Clean, semantic structure and fully adaptive layout.',
  },
  {
    id: 'power-tiles',
    title: 'PowerTiles',
    preview: '/img/projects/powertiles-preview.webp',
    demo: 'https://andriy-kostiuk.github.io/power-tiles',
    gitHub: 'https://github.com/andriy-kostiuk/power-tiles',
    desc: '2048-style puzzle game developed with JavaScript, HTML and SCSS. Implements game logic, keyboard controls and smooth tile animations.',
  },
  {
    id: 'task-flow',
    title: 'TaskFlow',
    preview: '/img/projects/taskflow-preview.webp',
    demo: 'https://andriy-kostiuk.github.io/task-flow',
    gitHub: 'https://github.com/andriy-kostiuk/task-flow',
    desc: 'ToDo application built with React and TypeScript. Uses Redux Toolkit for state management and provides filtering, editing and task grouping.',
  },
  {
    id: 'tech-shop',
    title: 'TechShop',
    preview: '/img/projects/techshop-preview.webp',
    demo: 'https://andriy-kostiuk.github.io/tech-shop',
    gitHub: 'https://github.com/andriy-kostiuk/tech-shop',
    desc: 'E-commerce app built with React, TypeScript, Redux Toolkit and localStorage. Includes product catalog, cart, favorites and responsive design.',
  },
  {
    id: 'hello-weather',
    title: 'HelloWeather',
    preview: '/img/projects/helloweather-preview.webp',
    demo: 'https://hello-weather-a-kostiuk.vercel.app/',
    gitHub: 'https://github.com/andriy-kostiuk/hello-weather',
    desc: 'It is a sleek weather application built with React that provides real-time weather information and forecasts using the OpenWeather API. The application offers location-based weather data with an intuitive interface that adapts to different devices and weather conditions.',
  },
  {
    id: 'book-finder',
    title: 'BookFinder',
    preview: '/img/projects/bookfinder-preview.webp',
    demo: 'https://book-finder-lime.vercel.app/',
    gitHub: 'https://github.com/andriy-kostiuk/book-finder',
    desc: 'It is a Next.js application that enables users to search and explore books through the Google Books API. The project features a responsive design with detailed book information display, showcasing advanced frontend development skills and efficient API integration.',
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
          {projects.map((project) => {
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
