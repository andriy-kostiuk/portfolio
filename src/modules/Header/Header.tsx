'use client';

import React, { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { SharedSvg } from '../SharedSvg';
import { Theme } from '@/types';

export const Header = () => {
  const [, setTheme] = useState<Theme>(Theme.LIGHT);

  const changeTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

      const body = document.body;
      body.classList.remove(currentTheme);
      body.classList.add(newTheme);

      return newTheme;
    });
  };

  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__container, 'container')}>
        <div className={styles.header__content}>
          <button
            className={classNames(
              styles.header__btn,
              styles['header__btn--info']
            )}
          >
            <span className='visually-hidden'>Info sidebar</span>

            <Image
              src='/img/profile.png'
              alt='Man photo'
              width={36}
              height={36}
            />
          </button>

          <div className={styles.header__right}>
            <button
              onClick={changeTheme}
              className={classNames(
                styles.header__btn,
                styles['header__btn--theme']
              )}
            >
              <span className='visually-hidden'>Theme</span>
              <SharedSvg type='theme' />
            </button>
            <button
              className={classNames(
                styles.header__btn,
                styles['header__btn--nav']
              )}
            >
              <span className='visually-hidden'>Navigation menu</span>
              <SharedSvg type='burger' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
