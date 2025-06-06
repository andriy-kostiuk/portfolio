'use client';

import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

import styles from './GlobalLayout.module.scss';
import { InfoSidebar } from '../InfoSidebar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Menu } from '../Menu';
import classNames from 'classnames';
import { useClickOutside } from '@/hooks';
import { ThemeProvider } from '@/context/ThemeContext';
import { Theme } from '@/types';

interface Props {
  children: ReactNode;
  theme: Theme;
}

export const GlobalLayout: FC<Props> = ({ children, theme }) => {
  const [isActiveInfoSidebar, setIsActiveInfoSidebar] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const infoSidebarRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const menuElement = menuRef.current;
    const handleClickInsideMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (menuRef.current?.contains(target) && target.closest('a')) {
        setIsActiveMenu(false);
        setIsActiveInfoSidebar(false);
      }
    };

    menuElement?.addEventListener('click', handleClickInsideMenu);

    return () => {
      menuElement?.removeEventListener('click', handleClickInsideMenu);
    };
  }, []);

  const toggleInfoSidebar = () => {
    setIsActiveInfoSidebar((prev) => !prev);
    setIsActiveMenu(false);
  };

  const toggleMenu = () => {
    setIsActiveMenu((prev) => !prev);
    setIsActiveInfoSidebar(false);
  };

  useClickOutside(infoSidebarRef, () => {
    if (isActiveInfoSidebar) {
      setIsActiveInfoSidebar(false);
    }
  });

  useClickOutside(menuRef, () => {
    if (isActiveMenu) {
      setIsActiveMenu(false);
    }
  });

  return (
    <div className={styles.layout}>
      <ThemeProvider initialTheme={theme}>
        <aside
          ref={infoSidebarRef}
          className={classNames(
            styles.layout__sidebar,
            styles['layout__sidebar--left'],
            {
              [styles['layout__sidebar--active']]: isActiveInfoSidebar,
            }
          )}
        >
          <InfoSidebar />
        </aside>
        <div className={styles.layout__content}>
          <Header
            className={styles.layout__header}
            toggleInfoSidebar={toggleInfoSidebar}
            toggleMenu={toggleMenu}
          />
          <main className={styles.layout__main}>{children}</main>
          <Footer />
        </div>
        <aside
          ref={menuRef}
          className={classNames(
            styles.layout__sidebar,
            styles['layout__sidebar--right'],
            {
              [styles['layout__sidebar--active']]: isActiveMenu,
            }
          )}
        >
          <Menu />
        </aside>
      </ThemeProvider>
    </div>
  );
};
