'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { contactSchema } from '@/modules/ContactPage/zodSchema/contact';

import styles from './ContactForm.module.scss';
import classNames from 'classnames';
import { SharedSvg } from '@/modules/Shared/SharedSvg';
import { useState } from 'react';
import { Popup } from '@/modules/Shared/Popup';

type FormData = z.infer<typeof contactSchema>;

type PopupType = {
  message: string;
  type: 'error' | 'success';
};

export const ContactForm = () => {
  const [popup, setPopup] = useState<PopupType>({
    message: '',
    type: 'success',
  });

  const handlerPopupOnClose = () => {
    setPopup({
      message: '',
      type: 'success',
    });
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/send-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();

    if (resData.success) {
      reset();
      setPopup({
        message: 'Thanks! I’ll get back to you shortly.',
        type: 'success',
      });
    } else {
      setPopup({
        message: resData.error,
        type: 'error',
      });
    }
  };

  return (
    <>
      <div className={styles.contact}>
        <h2 className={classNames(styles.contact__title, 'title')}>
          Get in Touch
        </h2>

        <p className={classNames(styles.contact__subtitle, 'subtitle')}>
          If you have a project idea, a job opportunity, or just want to connect
          — feel free to drop me a message. I’ll get back to you as soon as
          possible.
        </p>

        <form
          className={styles.contact__form}
          action=''
          method='POST'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.contact__top}>
            {/* Name Input */}
            <div
              className={classNames(styles.contact__group, {
                [styles['contact__group--invalid']]: !!errors.name,
              })}
            >
              <label htmlFor='name' className={styles.contact__label}>
                Name
              </label>

              <input
                {...register('name', { required: true })}
                id='name'
                name='name'
                type='text'
                className={styles.contact__field}
                placeholder='Your name'
                autoComplete='off'
              />
              {errors?.name && (
                <p className={styles.contact__err}>{errors?.name?.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div
              className={classNames(styles.contact__group, {
                [styles['contact__group--invalid']]: !!errors.email,
              })}
            >
              <label htmlFor='email' className={styles.contact__label}>
                Email address
              </label>

              <input
                {...register('email', { required: true })}
                id='email'
                name='email'
                type='text'
                className={styles.contact__field}
                placeholder='john@doe.com'
                autoComplete='off'
              />
              {errors?.email && (
                <p className={styles.contact__err}>{errors?.email?.message}</p>
              )}
            </div>
          </div>

          {/* subject Input */}
          <div
            className={classNames(styles.contact__group, {
              [styles['contact__group--invalid']]: !!errors.subject,
            })}
          >
            <label htmlFor='subject' className={styles.contact__label}>
              Subject
            </label>

            <input
              {...register('subject', { required: true })}
              id='subject'
              type='text'
              name='subject'
              className={styles.contact__field}
              placeholder='How can I help you?'
              autoComplete='off'
            />
            {errors?.subject && (
              <p className={styles.contact__err}>{errors?.subject?.message}</p>
            )}
          </div>

          {/* message Input */}
          <div
            className={classNames(styles.contact__group, {
              [styles['contact__group--invalid']]: !!errors.message,
            })}
          >
            <label htmlFor='message' className={styles.contact__label}>
              Message
            </label>

            <textarea
              {...register('message', { required: true })}
              id='message'
              name='message'
              className={styles.contact__field}
              placeholder='Write your message here...'
              autoComplete='off'
            />
            {errors?.message && (
              <p className={styles.contact__err}>{errors?.message?.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className={styles.contact__submit}
          >
            {isSubmitting ? (
              <div className={styles.contact__status} role='status'>
                <SharedSvg type='loading' />
              </div>
            ) : (
              'Send your message'
            )}
          </button>
        </form>
      </div>

      <Popup
        message={popup.message}
        type={popup.type}
        onClose={handlerPopupOnClose}
        autoClose={5000}
      />
    </>
  );
};
