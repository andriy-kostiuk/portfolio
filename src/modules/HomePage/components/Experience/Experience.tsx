import classNames from 'classnames';
import React from 'react';
import styles from './Experience.module.scss';
import { IExperience } from '@/types';
import { ExperienceCard } from '../ExperienceCard';
import { MainNavigation } from '@/constants';

const experience: IExperience[] = [
  {
    company: 'Pixoram',
    position: 'Frontend developer',
    duration: 'March 2025 – May 2025',
    technologies: [
      'JavaScript',
      'React',
      'Typescript',
      'HTML',
      'CSS',
      'SCSS',
      'BEM',
      'Redux Toolkit',
      'GIT',
      'WP',
    ],
    icon: (
      <svg
        version='1.0'
        xmlns='http://www.w3.org/2000/svg'
        width='202.000000pt'
        height='202.000000pt'
        viewBox='0 0 202.000000 202.000000'
        preserveAspectRatio='xMidYMid meet'
      >
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
          transform='translate(0.000000,202.000000) scale(0.100000,-0.100000)'
          fill='#000000'
          stroke='none'
        >
          <path
            d='M10 1010 l0 -1000 1000 0 1000 0 0 1000 0 1000 -1000 0 -1000 0 0
-1000z m1234 587 c189 -87 289 -326 231 -552 -57 -222 -214 -340 -418 -313
-72 10 -110 29 -167 84 l-45 43 3 -234 3 -235 -161 0 -160 0 0 610 0 610 141
0 141 0 -4 -55 c-3 -59 2 -67 25 -34 24 34 97 82 146 96 72 20 197 11 265 -20z'
          />
          <path
            d='M985 1364 c-6 -1 -22 -5 -37 -8 -15 -4 -43 -20 -63 -37 l-35 -31 0
-93 0 -92 40 -46 c45 -51 94 -72 146 -62 138 25 179 262 59 341 -25 16 -90 33
-110 28z'
          />
        </g>
      </svg>
    ),
    list: [
      'WPDeveloped over 40 modern landing pages and promo websites using React andTypeScript, ensuring optimal loading speed across various devices.',
      'Actively collaborated with developers and designers, promptly processing feedback andimplementing improvements, which accelerated the development of new features by 30%.',
      'Implemented performance optimization on more than 20 pages, reducing loading time by40%. This improvement increased the Google PageSpeed Insights score from 70 to 95,decreasing the bounce rate by 20%.',
      'Ensured proper display of pages on mobile devices, tablets, and desktops, which improvedconversion by 10%.',
    ],
  },
  {
    company: 'Freelance',
    position: 'FullStack Developer',
    duration: 'Feb 2024 – Feb 2025',
    technologies: [
      'JavaScript',
      'React',
      'Typescript',
      'HTML',
      'CSS',
      'SCSS',
      'BEM',
      'Redux Toolkit',
      'GIT',
      'Node.js',
      'Express',
      'PostgreSQL',
    ],
    icon: (
      <svg
        id='Layer_1'
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
      >
        <path d='m243.368 344.677-11.442 47.053c-2.366-1.381-4.947-2.48-7.719-3.222-.001 0-.003 0-.004 0l-15.344-4.112v-52.881c0-4.418-3.581-7.999-7.999-7.999s-7.999 3.581-7.999 7.999v59.018c0 3.701 2.517 6.807 5.931 7.719l-.002.007 21.274 5.702s.003 0 .004.001c4.079 1.093 7.337 3.728 9.329 7.108.063.113.122.229.19.339 1.89 3.397 2.525 7.498 1.442 11.541-2.211 8.237-10.718 13.141-18.96 10.934l-26.53-7.115c-14.145-3.775-23.649-16.169-23.649-30.84v-62.391c0-25.917 22.97-47.003 51.203-47.003h85.815c28.233 0 51.203 21.086 51.203 47.003v5.031h-30.971v-7.054c0-4.418-3.581-7.999-7.999-7.999s-7.999 3.581-7.999 7.999v7.054h-52c-3.69 0-6.901 2.524-7.773 6.109zm12.647-313.651-243.015 177.388 15.461 21.173 222.838-162.653c2.81-2.051 6.623-2.051 9.433 0l222.808 162.652 15.46-21.173zm-136.226 79.63 26.47-19.328h-47.006v34.318zm136.226 159.879c14.407 0 26.175-7.015 34.978-20.849 7.664-12.045 12.24-28.688 12.24-44.519 0-26.036-21.182-47.218-47.218-47.218s-47.248 21.182-47.248 47.218c0 15.445 4.44 31.865 11.877 43.924 8.776 14.229 20.676 21.443 35.371 21.443zm-89.77-195.206h1.904l5.978-4.351v-21.807h-90.756v26.157h82.874zm145.539 312.778c-3.501 0-6.349 2.862-6.349 6.38s2.848 6.349 6.349 6.349 6.38-2.848 6.38-6.349-2.862-6.38-6.38-6.38zm72.505-33.541-18.211 79.841h-122.587c1.274-2.255 2.289-4.702 2.99-7.315 1.93-7.206 1.182-14.507-1.62-20.851l12.566-51.675h126.861zm-50.126 39.921c0-12.34-10.039-22.379-22.378-22.379s-22.348 10.039-22.348 22.379 10.025 22.348 22.348 22.348 22.378-10.025 22.378-22.348zm144.665 78.487c0 4.418-3.581 7.999-7.999 7.999h-429.657c-4.418 0-7.999-3.581-7.999-7.999s3.581-7.999 7.999-7.999h31.254v-247.672l183.589-134.003 183.559 133.999v247.677h31.255c4.418 0 7.999 3.581 7.999 7.999zm-74.057-7.999v-22.568c0-4.418-3.581-7.999-7.999-7.999h-14.284l19.63-86.062c.541-2.373-.027-4.864-1.545-6.766-1.518-1.903-3.82-3.011-6.254-3.011h-28.209v-5.031c0-34.739-30.146-63.002-67.202-63.002h-4.195c3.556-3.526 6.825-7.618 9.779-12.26 9.368-14.723 14.74-34.08 14.74-53.107 0-34.857-28.359-63.216-63.216-63.216s-63.247 28.359-63.247 63.216c0 18.285 5.331 37.844 14.259 52.322 3.065 4.97 6.49 9.32 10.237 13.045h-4.172c-37.055 0-67.202 28.262-67.202 63.002v62.391c0 15.725 7.283 29.705 19.179 38.48h-49.84c-4.418 0-7.999 3.581-7.999 7.999v22.568h15.999v-14.569h92.656c.06 0 .121.006.181.006.047 0 .094-.006.141-.006h172.566v14.569h15.999z' />
      </svg>
    ),
    list: [
      'Developing web applications using React, TypeScript, HTML, and CSS, applying responsive design principles, and ensuring cross-browser compatibility.',
      'Managing application state with Redux Toolkit and useContext to handle complex features and ensure efficient state management across components.',
      'Using Git to track changes and organize development work.',
      'Regularly solving algorithmic challenges to improve problem-solving skills.',
    ],
  },
  {
    company: 'MaxiBud',
    position: 'Construction Engineer',
    duration: 'Sep 2023 – Oct 2024',

    icon: (
      <svg
        version='1.0'
        xmlns='http://www.w3.org/2000/svg'
        width='191.000000pt'
        height='222.000000pt'
        viewBox='0 0 191.000000 222.000000'
        preserveAspectRatio='xMidYMid meet'
      >
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
          transform='translate(0.000000,222.000000) scale(0.100000,-0.100000)'
          fill='#000000'
          stroke='none'
        >
          <path
            d='M915 2216 c-5 -3 -22 -7 -37 -10 l-28 -6 0 -125 0 -125 -40 0 -40 0
0 115 c0 85 -3 115 -12 115 -11 0 -46 -8 -165 -35 -22 -5 -23 -10 -23 -100 l0
-95 -40 0 -40 0 0 85 c0 62 -3 85 -12 85 -7 -1 -51 -9 -98 -18 l-85 -18 -3
-67 -3 -67 -39 0 -40 0 0 55 c0 64 5 63 -115 36 l-80 -17 -3 -122 -3 -122 941
0 941 0 -3 122 -3 122 -80 17 c-120 27 -115 28 -115 -36 l0 -55 -40 0 -40 0 0
64 c0 53 -3 66 -17 70 -24 7 -162 36 -174 36 -5 0 -9 -38 -9 -85 l0 -85 -40 0
-40 0 0 95 c0 90 -1 95 -22 100 -13 2 -54 11 -91 20 -38 8 -72 15 -78 15 -5 0
-9 -50 -9 -115 l0 -115 -40 0 -40 0 0 124 c0 100 -3 125 -15 130 -21 8 -108
16 -120 12z'
          />
          <path
            d='M0 1126 l0 -583 70 -41 70 -40 90 36 c49 19 90 38 90 41 0 3 -34 25
-75 49 l-75 42 0 450 0 450 775 0 775 0 0 -453 0 -453 -35 -17 c-19 -9 -35
-20 -35 -25 0 -4 36 -26 81 -47 l80 -40 37 20 37 20 3 588 2 587 -945 0 -945
0 0 -584z'
          />
          <path
            d='M320 1085 l0 -375 85 0 85 0 0 233 0 232 68 -119 c38 -66 73 -121 78
-123 5 -1 38 50 74 113 l65 116 3 -226 2 -226 85 0 85 0 0 375 0 375 -84 0
-84 0 -67 -122 c-37 -68 -70 -127 -74 -131 -5 -5 -40 49 -78 120 l-69 128 -87
3 -87 3 0 -376z'
          />
          <path
            d='M1090 1085 l0 -375 250 0 250 0 0 154 0 154 -41 35 -42 34 42 33 41
33 0 154 0 153 -250 0 -250 0 0 -375z m330 168 c0 -58 -30 -83 -102 -83 l-58
0 0 60 0 60 80 0 80 0 0 -37z m-28 -270 c21 -20 28 -36 28 -65 l0 -38 -80 0
-80 0 0 65 0 65 52 0 c43 0 57 -5 80 -27z'
          />
          <path
            d='M1113 549 l-201 -100 -125 62 -125 62 -206 -83 c-161 -66 -203 -87
-194 -96 28 -25 680 -395 692 -392 20 5 776 442 776 449 0 7 -395 199 -407
198 -4 0 -99 -45 -210 -100z'
          />
        </g>
      </svg>
    ),
    list: [
      'Managed projects for 3 buildings at the same time, effectively distributing time and resources to ensure timely completion.',
      'Over the year, developed and approved 7 projects for residential and commercial buildings.',
      'Fully completed 4 of my projects, ensuring they met technical requirements.',
      'Collaborated with architects, and construction teams to ensure project alignment and timely execution.',
      'Managed facade projects from the technical assignment phase through to full implementation.',
    ],
  },
];

export const Experience = () => {
  return (
    <section
      className={styles.exp}
      id={MainNavigation.EXPERIENCE.path.slice(2)}
    >
      <div className='container'>
        <h2 className={classNames(styles.exp__title, 'title')}>Experience</h2>
        <p className={classNames(styles.exp__subtitle, 'subtitle')}>
          My background includes full stack development for real-world projects,
          along with previous engineering experience. I focus on building
          scalable, maintainable, and user-friendly applications using modern
          technologies.
        </p>

        <ul className={styles.exp__list}>
          {experience.map((exp) => (
            <ExperienceCard exp={exp} key={exp.company} />
          ))}
        </ul>
      </div>
    </section>
  );
};
