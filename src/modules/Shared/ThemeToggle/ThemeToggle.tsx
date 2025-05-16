'use client';

import React, { ButtonHTMLAttributes, FC } from 'react';
import { SharedSvg } from '../SharedSvg';
import { useTheme } from '@/context/ThemeContext';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ThemeToggle: FC<Props> = ({ className, ...rest }) => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={className} {...rest}>
      <span className='visually-hidden'>Change Theme</span>
      <SharedSvg type='theme' />
    </button>
  );
};
