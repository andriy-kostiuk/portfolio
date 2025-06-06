import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import classNames from 'classnames';
import { contactSchema } from '@/modules/ContactPage/zodSchema/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { SharedSvg } from '@/modules/Shared/SharedSvg';
import { Popup } from '@/modules/Shared/Popup';
import { useT } from '@/hooks';

import styles from './ContactForm.module.scss';

type FormData = z.infer<typeof contactSchema>;

type PopupType = {
  message: string;
  type: 'error' | 'success';
};

export const ContactForm = () => {
  const t = useT('contactPage.form');
  const formElements = useT('contactPage.form.formElements');
  const formErrors = t.raw<{ [key: string]: string }>('errors');

  const [popup, setPopup] = useState<PopupType>({
    message: '',
    type: 'error',
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
        message: t('successMessage'),
        type: 'success',
      });
    } else {
      setPopup({
        message: `${t('errorMessage')} ${resData.error}`,
        type: 'error',
      });
    }
  };

  return (
    <>
      <div className={styles.contact}>
        <h2 className={classNames(styles.contact__title, 'title')}>
          {t('title')}
        </h2>

        <p className={classNames(styles.contact__subtitle, 'subtitle')}>
          {t('subtitle')}
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
                {formElements('nameInput.label')}
              </label>

              <input
                {...register('name', { required: true })}
                id='name'
                name='name'
                type='text'
                className={styles.contact__field}
                placeholder={formElements('nameInput.placeholder')}
                autoComplete='off'
              />
              {errors?.name?.message && (
                <p className={styles.contact__err}>
                  {formErrors[errors.name.message]}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div
              className={classNames(styles.contact__group, {
                [styles['contact__group--invalid']]: !!errors.email,
              })}
            >
              <label htmlFor='email' className={styles.contact__label}>
                {formElements('emailInput.label')}
              </label>

              <input
                {...register('email', { required: true })}
                id='email'
                name='email'
                type='text'
                className={styles.contact__field}
                placeholder={formElements('emailInput.placeholder')}
                autoComplete='off'
              />
              {errors?.email?.message && (
                <p className={styles.contact__err}>
                  {formErrors[errors.email.message]}
                </p>
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
              {formElements('subjectInput.label')}
            </label>

            <input
              {...register('subject', { required: true })}
              id='subject'
              type='text'
              name='subject'
              className={styles.contact__field}
              placeholder={formElements('subjectInput.placeholder')}
              autoComplete='off'
            />
            {errors?.subject?.message && (
              <p className={styles.contact__err}>
                {formErrors[errors.subject.message]}
              </p>
            )}
          </div>

          {/* message Input */}
          <div
            className={classNames(styles.contact__group, {
              [styles['contact__group--invalid']]: !!errors.message,
            })}
          >
            <label htmlFor='message' className={styles.contact__label}>
              {formElements('messageInput.label')}
            </label>

            <textarea
              {...register('message', { required: true })}
              id='message'
              name='message'
              className={styles.contact__field}
              placeholder={formElements('messageInput.placeholder')}
              autoComplete='off'
            />
            {errors?.message?.message && (
              <p className={styles.contact__err}>
                {formErrors[errors.message.message]}
              </p>
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
              formElements('btn')
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
