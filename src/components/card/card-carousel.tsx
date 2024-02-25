'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import './card-carousel.css';

const CardsCarousel = () => {
  const slides = [<Card />, <Card />, <Card />];

  return (
    <>
      <Swiper
        allowSlideNext={true}
        initialSlide={0}
        slidesPerView={1.33}
        autoplay={{ delay: 3000 }}
        direction={'horizontal'}
        loop={true}
        simulateTouch={true}
        touchRatio={1}
        effect="slide"
        slideNextClass="swiper-slide-cards-next"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardsCarousel;
