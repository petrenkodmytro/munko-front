'use client';

import { useState } from 'react';
import Image from 'next/image';
import { sliderCard } from '../../../public/images';
import FavoritIcon from '../../../public/icons/favorite-icon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const images = sliderCard;

  return (
    <div className="relative md:flex md:flex-row-reverse bg-[#F5F5F5] pb-5 xl:w-[737px]">
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        type="button"
        className="absolute right-4 md:right-5 top-4 md:top-5 z-10"
      >
        <FavoritIcon fill={isFavorite ? '#31304D' : 'white'} />
      </button>
      <Swiper
        loop={true}
        spaceBetween={10}
        pagination={{ clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Pagination, Thumbs]}
        className="h-96 w-full rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image src={image} alt="" className=" object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={15}
        slidesPerView={4}
        breakpoints={{
          0: {
            direction: "horizontal"
          },
          768: {
            direction: "vertical"
          }
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Pagination, Thumbs]}
        className="swiper-thumb w-full md:h-[537px] md:w-[120px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='w-[90px] flex justify-center items-center'>
            
              <Image src={image} alt="" className="" />
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
