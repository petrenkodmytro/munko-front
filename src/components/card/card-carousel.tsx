'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import { ICard } from '@/types/types';

type CatalogProps = {
  slides: ICard[] | undefined;
};

const CardsCarousel = ({ slides }: CatalogProps) => {

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
        {slides?.length && slides.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Card card={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardsCarousel;
