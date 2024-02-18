'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import slider1 from '../../../public/image/collection-1.png';
import slider2 from '../../../public/image/collection-2.png';
import slider3 from '../../../public/image/collection-3.png';
import slider4 from '../../../public/image/collection-4.png';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import img from 'next/image';

export default function CardImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={slider1.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4.src} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={() => setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3.src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4.src} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
