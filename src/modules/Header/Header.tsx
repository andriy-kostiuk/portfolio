import React, { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { SharedSvg } from '../Shared/SharedSvg';
import { ThemeToggle } from '../Shared/ThemeToggle';
import { LocaleToggle } from '../Shared/LocaleToggle';

import styles from './Header.module.scss';

interface Props {
  className?: string;
  toggleMenu: () => void;
  toggleInfoSidebar: () => void;
}

export const Header: FC<Props> = ({
  className,
  toggleInfoSidebar,
  toggleMenu,
}) => (
  <header className={classNames(styles.header, className)}>
    <div className={classNames(styles.header__container, 'container')}>
      <div className={styles.header__content}>
        <button
          onClick={toggleInfoSidebar}
          className={classNames(
            styles.header__btn,
            styles['header__btn--info']
          )}
          aria-label='Info sidebar'
        >
          <Image
            src='/img/profile.png'
            alt='Man photo'
            width={36}
            height={36}
          />
        </button>

        <div className={styles.header__right}>
          <LocaleToggle />
          <ThemeToggle
            className={classNames(
              styles.header__btn,
              styles['header__btn--theme']
            )}
          />

          <button
            onClick={toggleMenu}
            className={classNames(
              styles.header__btn,
              styles['header__btn--nav']
            )}
            aria-label='Navigation menu'
          >
            <SharedSvg type='burger' />
          </button>
        </div>
      </div>
    </div>
  </header>
);
