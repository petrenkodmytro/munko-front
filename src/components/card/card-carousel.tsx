'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import './card-carousel.css';

const CardsCarousel = () => {

  const slides = [1, 2, 3];

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
          <SwiperSlide key={index} virtualIndex={index}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardsCarousel;
