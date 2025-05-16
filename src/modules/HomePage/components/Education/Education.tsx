import React from 'react';
import styles from './Education.module.scss';
import classNames from 'classnames';
import { IEducation } from '@/types';
import { EducationCard } from '../EducationCard';
import { MainNAvigation } from '@/constants';

const education: IEducation[] = [
  {
    title: 'University of Toronto',
    status: 'student',
    date: 'Jan 1016 - Dec 2021',
    result: 'Certificate of web training',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
  },
  {
    title: 'University of Toronto2',
    status: 'student',
    date: 'Jan 1016 - Dec 2021',
    result: 'Certificate of web training',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
  },
  {
    title: 'University of Toronto3',
    status: 'student',
    date: 'Jan 1016 - Dec 2021',
    result: 'Certificate of web training',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
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
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>

        <ul className={styles.education__list}>
          {education.map((item) => (
            <EducationCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
