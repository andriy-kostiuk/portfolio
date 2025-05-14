import React, { ReactNode } from 'react';
import styles from './InfoSidebar.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { SharedSvg } from '../SharedSvg';

interface Info {
  value: string;
  title: string;
}

const info: Info[] = [
  {
    title: 'Email:',
    value: 'info@youremail.com',
  },
  {
    title: 'Phone:',
    value: '+880 16429 24081',
  },
  {
    title: 'Residence:',
    value: 'Bangladesh',
  },
  {
    title: 'City:',
    value: 'Dhaka',
  },
  {
    title: 'Age:',
    value: '24 Years',
  },
  {
    title: 'Freelance:',
    value: 'Available',
  },
  {
    title: 'Language:',
    value: 'English, Bangla',
  },
];

interface Social {
  name: string;
  icon: ReactNode;
  href: string;
}

const socials: Social[] = [
  {
    name: 'Telegram',
    icon: <SharedSvg type='telegram' />,
    href: '',
  },
  {
    name: 'GitHab',
    icon: <SharedSvg type='gitHub' />,
    href: '',
  },
  {
    name: 'LinkedIn',
    icon: <SharedSvg type='linkedin' />,
    href: '',
  },
];

const skills = [
  'JavaScript',
  'TypeScript',
  'AJAX(Fetch)',
  'React',
  'Next.js',
  'Redux Toolkit',
  'Styled Components',
  'HTML5',
  'BEM',
  'CSS3',
  'Sass (SCSS)',
  'Tailwind',
  'Node.js',
  'Express',
  'REST API',
  'WebSockets',
  'SQL',
  'PostgreSQL',
  'Sequelize',
  'Git',
  'Webpack',
  'Eslint',
  'Prettier',
  'Trello',
  'Jira',
  'Basics of OOP',
  'Server-side Programming',
];

export const InfoSidebar = () => {
  return (
    <aside className={styles.info}>
      <div className={styles.info__avatar}>
        <Image src='/img/profile.png' alt='human' width={100} height={100} />
      </div>
      <p className={styles.info__name}>Andrii Kostiuk</p>
      <p className={styles.info__position}>Fullstack Developer</p>

      <ul className={styles.info__socials}>
        {socials.map(({ name, icon, href }) => (
          <li key={name}>
            <a href={href} target='_blank' className={styles.info__socialLink}>
              {icon}
            </a>
          </li>
        ))}
      </ul>

      <ul className={classNames(styles.info__about, styles.infoSection)}>
        {info.map(({ title, value }) => (
          <li key={title} className={styles.info__aboutItem}>
            <p>{title}</p>
            <p className={styles.info__aboutValue}>{value}</p>
          </li>
        ))}
      </ul>

      <p className={styles.info__sectionTitle}>Skills</p>
      <ul className={classNames(styles.info__skills, styles.infoSection)}>
        {skills.map((skill) => (
          <li className={styles.info__skill} key={skill}>
            {skill}
          </li>
        ))}
      </ul>

      <button className={styles.info__download}>
        Download My CV <SharedSvg type='download' />
      </button>
    </aside>
  );
};
