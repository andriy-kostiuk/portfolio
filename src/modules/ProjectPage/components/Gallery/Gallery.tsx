'use client';

import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import styles from './Gallery.module.scss';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  images?: string[];
}

export const Gallery: FC<Props> = ({}) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className={styles.gallery}
    >
      <SwiperSlide className={styles.gallery__slide}>
        {/* <img src='https://swiperjs.com/demos/images/nature-1.jpg' /> */}
      </SwiperSlide>
      <SwiperSlide className={styles.gallery__slide}>
        {/* <img src='https://swiperjs.com/demos/images/nature-2.jpg' /> */}
      </SwiperSlide>
      <SwiperSlide className={styles.gallery__slide}>
        {/* <img src='https://swiperjs.com/demos/images/nature-3.jpg' /> */}
      </SwiperSlide>
      <SwiperSlide className={styles.gallery__slide}>
        {/* <img src='https://swiperjs.com/demos/images/nature-4.jpg' /> */}
      </SwiperSlide>
    </Swiper>
  );
};
