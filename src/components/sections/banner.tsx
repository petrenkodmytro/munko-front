'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import slider1 from '../../../public/image/banner-1.png';
import slider2 from '../../../public/image/banner-2.png';
import sliderMob1 from '../../../public/image/banner-mob-1.png';
import sliderMob2 from '../../../public/image/banner-mob-2.png';
import sliderMob3 from '../../../public/image/banner-mob-3.png';
import sliderMob4 from '../../../public/image/banner-mob-4.png';
import ArrowRight from '../../../public/icons/arrow-right.svg';
import ArrowLeft from '../../../public/icons/arrow-left.svg';
import ArrowRightHover from '../../../public/icons/arrow-right-hover.svg';
import ArrowLeftHover from '../../../public/icons/arrow-left-hover.svg';

const Banner = () => {
  SwiperCore.use([Autoplay, Navigation]);

  const slides = {
    mobile: [
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
    ],
    tablet: [
      {
        url: slider1,
        title: 'slider1',
      },
      {
        url: slider2,
        title: 'slider2',
      },
    ],
  };

  return (
    <section>
      <div className="relative h-[316px] md:hidden">
        <Swiper
          initialSlide={0}
          slidesPerView={1}
          autoplay={{ delay: 15000 }}
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
          {slides.mobile.map((slide, index) => (
            <SwiperSlide key={slide.title} virtualIndex={index}>
              <Image className="md:hidden" src={slide.url} alt={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative hidden md:block">
        <Swiper
          initialSlide={0}
          slidesPerView={1}
          autoplay={{ delay: 15000 }}
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
          {slides.tablet.map((slide, index) => (
            <SwiperSlide
              className="hidden"
              key={slide.title}
              virtualIndex={index}
            >
              <Image src={slide.url} alt={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute top-[50%] z-[8] left-5 lg:left-20"
          id="my-prev-button"
        >
          <div>
            <div className="absolute duration-200 ease-linear lg:hover:opacity-0">
              <ArrowLeft />
            </div>
          </div>
          <ArrowLeftHover />
        </button>
        <button
          className="absolute top-[50%] right-5 lg:right-20 z-[8]"
          id="my-next-button"
        >
          <div>
            <div className="absolute duration-200 ease-linear lg:hover:opacity-0">
              <ArrowRight />
            </div>
          </div>
          <ArrowRightHover />
        </button>
      </div>
    </section>
  );
};

export default Banner;
