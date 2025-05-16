'use client';

import React, { FC, ReactNode, useRef, useState } from 'react';

import styles from './GlobalLayout.module.scss';
import { InfoSidebar } from '../InfoSidebar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Menu } from '../Menu';
import classNames from 'classnames';
import { useClickOutside } from '@/hooks';
import { ThemeProvider } from '@/context/ThemeContext';

interface Props {
  children: ReactNode;
}

export const GlobalLayout: FC<Props> = ({ children }) => {
  const [isActiveInfoSidebar, setIsActiveInfoSidebar] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const infoSidebarRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);

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
      <div className={styles.layout__container}>
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
          <ThemeProvider>
            <Header
              className={styles.layout__header}
              toggleInfoSidebar={toggleInfoSidebar}
              toggleMenu={toggleMenu}
            />
          </ThemeProvider>
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
          <ThemeProvider>
            <Menu />
          </ThemeProvider>
        </aside>
      </div>
    </div>
  );
};
