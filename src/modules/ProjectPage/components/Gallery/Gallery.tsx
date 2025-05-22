'use client';

import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import styles from './Gallery.module.scss';

import Image from 'next/image';
import classNames from 'classnames';
import { SharedSvg } from '@/modules/Shared/SharedSvg';

interface Props {
  images: string[];
  className?: string;
}

export const Gallery: FC<Props> = ({ images, className = '' }) => {
  return (
    <div className={classNames(styles.gallery, className)}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={{
          nextEl: '.gallery__swiper-next',
          prevEl: '.gallery__swiper-prev',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={styles.gallery__swiper}
      >
        {images.map((img) => {
          return (
            <SwiperSlide key={img} className={styles.gallery__slide}>
              <Image
                src={img}
                alt='Project preview'
                width={1900}
                height={900}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        className={classNames(
          styles.gallery__btn,
          styles['gallery__btn--prev'],
          'gallery__swiper-prev'
        )}
        aria-label='Previous slide'
      >
        <SharedSvg type='arrow' />
      </button>

      <button
        className={classNames(
          styles.gallery__btn,
          styles['gallery__btn--next'],
          'gallery__swiper-next'
        )}
        aria-label='Next slide'
      >
        <SharedSvg type='arrow' />
      </button>
    </div>
  );
};
