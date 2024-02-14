'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from '../../../../public/image/collection-1.png';
import slider2 from '../../../../public/image/collection-2.png';
import slider3 from '../../../../public/image/collection-3.png';
import slider4 from '../../../../public/image/collection-4.png';

const CollectionCarousel = () => {
  SwiperCore.use([Autoplay]);

  const slides = [
    {
      url: slider1,
      title: 'lilo and stitch',
      bg: 'bg-[#4CB9EC]',
    },
    {
      url: slider2,
      title: 'harry potter',
      bg: 'bg-[#FEDBBB]',
    },
    {
      url: slider3,
      title: 'wednesday',
      bg: 'bg-[#B5ADC6]',
    },
    {
      url: slider4,
      title: 'how to train you dragon',
      bg: 'bg-[#B5E1E5]',
    },
  ];

  return (
    <div>
      <Swiper
        allowSlideNext={true}
        initialSlide={0}
        slidesPerView={2}
        // autoplay={{ delay: 5000 }}
        autoplay={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        direction={'horizontal'}
        autoHeight={false}
        // spaceBetween={40}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
        }}
        simulateTouch={true}
        touchRatio={1}
        effect="slide"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div
              className={`relative flex justify-center items-center ${slide.bg} h-[268px] pl-4 pr-2 md:h-[404px] md:pl-20 md:pr-10 md:py-11 md:justify-between`}
            >
              <div className="absolute left-4 md:static">
                <p className="uppercase w-[230px] text-2xl not-italic font-extrabold mb-4  md:w-full  md:text-3xl md:font-semibold md:mb-[42px]">
                  {slide.title}
                </p>
                <Link
                  className="inline-block uppercase  px-8 py-[11px] rounded-[5px] bg-white text-base not-italic font-bold md:text-xl "
                  href={'/'}
                >
                  shop collection
                </Link>
              </div>
              <div className="ml-auto">
                <Image
                  src={slide.url}
                  alt={slide.title}
                
                  layout='responsive'
                  objectFit='cover'
                 
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionCarousel;
