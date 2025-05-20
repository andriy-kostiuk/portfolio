import React, { FC } from 'react';
import styles from './InfoSidebar.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { SharedSvg } from '../Shared/SharedSvg';

interface Props {
  className?: string;
}

const info = [
  {
    title: 'Email:',
    value: 'andriykostiuk1@gmail.com',
  },
  {
    title: 'Phone:',
    value: '+38 068 130 9316',
  },
  {
    title: 'Residence:',
    value: 'Ukraine',
  },
  {
    title: 'City:',
    value: 'Kyiv',
  },
  {
    title: 'Age:',
    value: '29 Years',
  },
  {
    title: 'English:',
    value: 'Intermediate',
  },
];

const socials = [
  {
    name: 'Telegram',
    icon: <SharedSvg type='telegram' />,
    href: 'https://t.me/Andrii4',
  },
  {
    name: 'GitHub',
    icon: <SharedSvg type='gitHub' />,
    href: 'https://github.com/andriy-kostiuk',
  },
  {
    name: 'LinkedIn',
    icon: <SharedSvg type='linkedin' />,
    href: 'https://www.linkedin.com/in/andrii-kostiuk-3141592653589793238',
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

export const InfoSidebar: FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.info, className)}>
      <div className={styles.info__container}>
        <div className={styles.info__avatar}>
          <Image
            src='/img/profile.png'
            alt='Andrii Kostiuk'
            width={100}
            height={100}
          />
        </div>
        <p className={styles.info__name}>Andrii Kostiuk</p>
        <p className={styles.info__position}>Fullstack Developer</p>

        <ul className={styles.info__socials}>
          {socials.map(({ name, icon, href }) => (
            <li key={name}>
              <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.info__socialLink}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>

        <ul className={classNames(styles.info__about, styles.infoSection)}>
          {info.map(({ title, value }) => {
            const renderValue = () => {
              if (title === 'Email:') {
                return (
                  <a href={`mailto:${value}`} className={styles.info__link}>
                    {value}
                  </a>
                );
              }

              if (title === 'Phone:') {
                return (
                  <a
                    href={`tel:${value.replace(/\s+/g, '')}`}
                    className={styles.info__link}
                  >
                    {value}
                  </a>
                );
              }

              return value;
            };

            return (
              <li key={title} className={styles.info__aboutItem}>
                <p>{title}</p>
                <p className={styles.info__aboutValue}>{renderValue()}</p>
              </li>
            );
          })}
        </ul>

        <p className={styles.info__sectionTitle}>Skills</p>
        <ul className={classNames(styles.info__skills, styles.infoSection)}>
          {skills.map((skill) => (
            <li className={styles.info__skill} key={skill}>
              {skill}
            </li>
          ))}
        </ul>

        <a
          href='/Andrii_Kostiuk_CV_fullstack.pdf'
          download
          className={styles.info__download}
        >
          Download My CV <SharedSvg type='download' />
        </a>
      </div>
    </div>
  );
};
