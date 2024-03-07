'use client';

import { useState } from 'react';
import Image from 'next/image';
import { sliderCard } from '../../../public/images';
import FavoritIcon from '../../../public/icons/favorite-icon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

type CardImgProps = {
  images: string[];
};

const CardImage = ({ images }: CardImgProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // const images = sliderCard;
  const newImgs = images.map(image => {
    return image.slice(0, 25) + 'uc?id=' + image.slice(32, 65);
  });
  // console.log(newImgs)
  return (
    <div className="relative md:flex md:flex-row-reverse bg-[#F5F5F5] pb-5 md:p-5 xl:w-[737px] xl:py-6 xl:px-8 xl:gap-16">
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        type="button"
        className="absolute right-4 md:right-5 top-4 md:top-5 z-10"
      >
        <FavoritIcon fill={isFavorite ? '#31304D' : 'white'} />
      </button>
      <Swiper
        loop={true}
        spaceBetween={5}
        pagination={{ clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Pagination, Thumbs]}
        className="main-slider h-96 md:h-auto md:w-[498px]"
      >
        {newImgs.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image src={image} fill alt={image} className=" object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3.33,
            spaceBetween: 15,
            direction: 'horizontal',
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
            direction: 'vertical',
          },
        }}
        watchSlidesProgress={true}
        modules={[Pagination, Thumbs]}
        className="swiper-thumb w-full md:h-[497px] md:w-[100px]"
      >
        {newImgs.map((image, index) => (
          <SwiperSlide key={index} className="card">
            <div className="relative w-[98px] h-[92px] flex justify-center items-center">
              <Image
                src={image}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
                alt=""
                className=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CardImage;
