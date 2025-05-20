import React from 'react';
import styles from './ContactPage.module.scss';
import { ContactForm } from './components/ContactForm';
import { Hero } from '../Shared/Hero';

export const ContactPage = () => {
  return (
    <div className={styles.page}>
      <h1 className='visually-hidden'>Contact</h1>
      <Hero link={false} />
      <ContactForm />
    </div>
  );
};
