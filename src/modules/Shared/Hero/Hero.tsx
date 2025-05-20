import React, { FC } from 'react';
import styles from './Hero.module.scss';
import classNames from 'classnames';
import { SharedSvg } from '@/modules/Shared/SharedSvg';
import Image from 'next/image';
import Link from 'next/link';
import { MainNAvigation } from '@/constants';

interface Props {
  link?: boolean;
}

export const Hero: FC<Props> = ({ link = true }) => {
  return (
    <section className={styles.hero}>
      <div className={classNames(styles.hero__container)}>
        <div className={classNames(styles.hero__content)}>
          <h1 className={styles.hero__title}>
            I’m Andrii Kostiuk <span>Fullstack</span> Developer
          </h1>

          <p className={styles.hero__subtitle}>
            Full Stack Developer with 5+ years in facade system design and 1+
            years in web development, specializing in React, Redux, TypeScript,
            Node.js, and PostgreSQL.My engineering background sharpens my
            ability to create scalable, high-performance applications while
            balancing functionality and efficiency. Strong at modular
            architecture, API integration, and real-time WebSocket
            updates.Experienced in managing complex projects, meeting deadlines,
            and translating technical requirements into maintainable code. Eager
            to expand into Vue, Angular,and React Native.
          </p>

          {link && (
            <Link
              href={MainNAvigation.CONTACT.path}
              className={styles.hero__action}
            >
              Let’s Talk
              <span className={styles.hero__icon}>
                <SharedSvg type='arrow' />
              </span>
            </Link>
          )}
        </div>
        <div className={styles.hero__photo}>
          <Image
            src={'/img/hero.png'}
            width={325}
            height={460}
            alt='Andrii Kostiuk'
          />
        </div>
      </div>
    </section>
  );
};
