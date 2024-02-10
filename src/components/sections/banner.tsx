'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import sliderMob1 from '../../../public/image/banner-mob-1.png';
import sliderMob2 from '../../../public/image/banner-mob-2.png';
import sliderMob3 from '../../../public/image/banner-mob-3.png';
import sliderMob4 from '../../../public/image/banner-mob-4.png';
import ArrowRight from '../../../public/icons/arrow-right.svg';
import ArrowLeft from '../../../public/icons/arrow-left.svg';

const Banner = () => {
  SwiperCore.use([Autoplay, Navigation]);

  const slides = [
    {
      url: sliderMob1,
      title: 'sliderMob1',
    },
    {
      url: sliderMob2,
      title: 'sliderMob2',
    },
    {
      url: sliderMob3,
      title: 'sliderMob3',
    },
    {
      url: sliderMob4,
      title: 'sliderMob4',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <section>
      <div className="relative h-[316px]">
        <Swiper
          initialSlide={0}
          slidesPerView={1}
          // autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: '#my-prev-button',
            nextEl: '#my-next-button',
          }}
          modules={[Navigation]}
          direction={'horizontal'}
          autoHeight={false}
          // spaceBetween={40}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            1440: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          simulateTouch={true}
          touchRatio={1}
          effect="slide"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <Image key={index} src={slide.url} alt={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute inset-y-1/4 z-10"
          id="my-prev-button"
          onClick={() => handlePrevSlide}
        >
          <ArrowLeft />
        </button>
        <button
          className="absolute inset-y-1/4 right-0 z-10"
          id="my-next-button"
          onClick={() => handleNextSlide}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Banner;
