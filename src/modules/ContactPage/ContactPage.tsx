'use client';

import React from 'react';
import { ContactForm } from './components/ContactForm';
import { Hero } from '../Shared/Hero';
import { useT } from '@/hooks';

import styles from './ContactPage.module.scss';

export const ContactPage = () => {
  const t = useT('contactPage');

  return (
    <div className={styles.page}>
      <h1 className='visually-hidden'>{t('title')}</h1>
      <Hero link={false} />
      <ContactForm />
    </div>
  );
};
