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
    <div className="relative bg-[#F5F5F5]">
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        type="button"
        className="absolute right-4 top-4 z-10"
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
        // freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Pagination, Thumbs]}
        className="swiper-thumb w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='flex justify-center items-center'>
            
              <Image src={image} alt="" className="" />
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
