import React from 'react';
import styles from './Education.module.scss';
import classNames from 'classnames';
import { IEducation } from '@/types';
import { EducationCard } from '../EducationCard';
import { MainNAvigation } from '@/constants';

const formalEducation: IEducation[] = [
  {
    title: 'Kyiv National University of Construction and Architecture',
    status: 'Student',
    date: '2015 – 2019',
    result: "Master's Degree in Industrial and Civil Engineering",
    desc: `Studied engineering principles, structural analysis, and project management. 
           These skills shaped my logical thinking and attention to detail — qualities I now apply in software development.`,
  },
];

const courses: IEducation[] = [
  {
    title: 'Mate Academy',
    status: 'Fullstack Student',
    date: '2024 – 2025',
    result: 'Fullstack Web Development Course',
    desc: `Learned modern web development tools such as React, Node.js, PostgreSQL, and TypeScript. Built fullstack apps using best practices and code reviews.`,
    certificateLinks: [
      {
        label: 'Mate Academy Certificate',
        url: 'https://drive.google.com/file/d/1pJjAFfgRIN-UbCcs3woML5IM3WPc0kZG/view?usp=sharing',
      },
    ],
  },
  {
    title: 'ITVDN / CodeWars',
    status: 'Self-Learning',
    date: '2022 – 2025',
    result: 'React, JavaScript, Algorithms',
    desc: `Completed multiple courses on React, JavaScript, and OOP. Solved 266+ CodeWars katas to improve algorithmic skills.`,
    certificateLinks: [
      {
        label: 'React',
        url: 'https://drive.google.com/file/d/1DsX5LSqlcWLMh0tMJrXm5h5ZL0jtd64g/view?usp=drive_link',
      },

      {
        label: 'JavaScript',
        url: 'https://drive.google.com/file/d/187GgrAjI-GDvDaXnAx1bEe5tIkfYosFi/view?usp=drive_link',
      },
    ],
  },
  {
    title: 'HTML Academy',
    status: 'Frontend Student',
    date: '2021 - 2022',
    result: 'Frontend Development Course',
    desc: `Practiced responsive design, semantic HTML, and CSS (BEM methodology), improving my frontend development skills.`,
  },
];

export const Education = () => {
  return (
    <section
      className={styles.education}
      id={MainNAvigation.EDUCATION.path.slice(2)}
    >
      <div className='container'>
        <h2 className={classNames(styles.education__title, 'title')}>
          Education
        </h2>
        <p className={classNames(styles.education__subtitle, 'subtitle')}>
          My technical education and intensive self-learning through courses
          have equipped me with the skills to build scalable, maintainable, and
          efficient web applications.
        </p>

        <h3 className={styles.education__groupTitle}>
          Courses & Certifications
        </h3>
        <ul className={styles.education__list}>
          {courses.map((item) => (
            <EducationCard key={item.title} item={item} />
          ))}
        </ul>

        <h3 className={styles.education__groupTitle}>Formal Education</h3>
        <ul className={styles.education__list}>
          {formalEducation.map((item) => (
            <EducationCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
