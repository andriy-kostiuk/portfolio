import React, { FC } from 'react';
import { ThemeToggle } from '../Shared/ThemeToggle';
import { MainNavigation } from '@/constants';
import { SharedSvg } from '../Shared/SharedSvg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { LocaleToggle } from '../Shared/LocaleToggle';

import styles from './Menu.module.scss';

interface Props {
  className?: string;
}

const nav = [
  {
    ...MainNavigation.HOME,
    icon: <SharedSvg type='home' />,
  },
  {
    ...MainNavigation.SERVICES,
    icon: <SharedSvg type='services' />,
  },
  {
    ...MainNavigation.EDUCATION,
    icon: <SharedSvg type='education' />,
  },
  {
    ...MainNavigation.EXPERIENCE,
    icon: <SharedSvg type='experience' />,
  },
  {
    ...MainNavigation.PROJECTS,
    icon: <SharedSvg type='projects' />,
  },
  {
    ...MainNavigation.CONTACT,
    icon: <SharedSvg type='contact' />,
  },
];

export const Menu: FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={classNames(styles.menu, className)}>
      <div className={styles.menu__container}>
        <div className={styles.menu__top}>
          <ThemeToggle
            className={classNames(
              styles.menu__action,
              styles['menu__action--theme']
            )}
          />
          <LocaleToggle className={styles.menu__action} />
        </div>

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
                    <span className='visually-hidden'>{item.title}</span>
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
