import React, { FC } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { SharedSvg } from '../Shared/SharedSvg';
import { ThemeToggle } from '../Shared/ThemeToggle';

interface Props {
  className?: string;
  toggleMenu: () => void;
  toggleInfoSidebar: () => void;
}

export const Header: FC<Props> = ({
  className,
  toggleInfoSidebar,
  toggleMenu,
}) => {
  return (
    <header className={classNames(styles.header, className)}>
      <div className={classNames(styles.header__container, 'container')}>
        <div className={styles.header__content}>
          <button
            onClick={toggleInfoSidebar}
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
