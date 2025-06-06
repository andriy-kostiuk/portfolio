import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, useState, useEffect } from 'react';

import { SharedSvg } from '@/modules/Shared/SharedSvg';
import { Locale } from '@/i18n/routing';

import styles from './LocaleToggle.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const LocaleToggle: FC<Props> = ({ className = '' }) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;
  const newLocale = locale === 'en' ? 'uk' : 'en';
  const [isClicked, setIsClicked] = useState(false);
  const [shouldAppear, setShouldAppear] = useState(true);

  const basePath = pathname.replace(`/${locale}`, '') || '/';
  const newPath = `/${newLocale}${basePath}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAppear(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (isClicked) return;

    setIsClicked(true);

    setTimeout(() => {
      router.push(newPath);
    }, 100);
  };

  return (
    <button
      className={classNames(styles.locale, className)}
      onClick={handleClick}
      disabled={isClicked}
    >
      <span className='visually-hidden'>Change language to {newLocale}</span>
      <div
        className={classNames(styles.locale__icon, {
          [styles['locale__icon--appear']]: shouldAppear,
          [styles['locale__icon--clicked']]: isClicked,
        })}
      >
        <SharedSvg type={newLocale} />
      </div>
    </button>
  );
};
