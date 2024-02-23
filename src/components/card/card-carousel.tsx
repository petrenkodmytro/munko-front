'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import './card-carousel.css'

const CardsCarousel = () => {

  const slides = [<Card />, <Card />, <Card />];

  return (
    <div>
      <Swiper
        allowSlideNext={true}
        initialSlide={0}
        slidesPerView={1.3}
        direction={'horizontal'}
        loop={true}
        simulateTouch={true}
        touchRatio={1}
        effect="slide"
        slideNextClass='swiper-slide-cards-next'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
                <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardsCarousel;
