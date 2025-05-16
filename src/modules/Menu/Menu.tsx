'use client';

import React, { FC } from 'react';
import styles from './Menu.module.scss';
import { ThemeToggle } from '../Shared/ThemeToggle';
import { MainNAvigation } from '@/constants';
import { SharedSvg } from '../Shared/SharedSvg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const nav = [
  {
    ...MainNAvigation.HOME,
    icon: <SharedSvg type='home' />,
  },
  {
    ...MainNAvigation.SERVICES,
    icon: <SharedSvg type='services' />,
  },
  {
    ...MainNAvigation.EDUCATION,
    icon: <SharedSvg type='education' />,
  },
  {
    ...MainNAvigation.EXPERIENCE,
    icon: <SharedSvg type='experience' />,
  },
  {
    ...MainNAvigation.PROJECTS,
    icon: <SharedSvg type='projects' />,
  },
  {
    ...MainNAvigation.CONTACT,
    icon: <SharedSvg type='contact' />,
  },
];

export const Menu: FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={classNames(styles.menu, className)}>
      <div className={styles.menu__container}>
        <ThemeToggle className={styles.menu__theme} />

        <nav className={styles.menu__nav}>
          <ul className={styles.menu__navList}>
            {nav.map((item) => {
              const isActive = item.path === pathname;

              return (
                <li key={item.path}>
                  <Link
                    className={classNames(styles.menu__link, {
                      [styles['menu__link--active']]: isActive,
                    })}
                    href={item.path}
                  >
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
