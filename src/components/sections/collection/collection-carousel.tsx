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
import { sliderCollection } from '../../../../public/images';

const CollectionCarousel = () => {
  SwiperCore.use([Autoplay]);

  const [
    slider1,
    slider2,
    slider3,
    slider4,
    slider1Tab,
    slider2Tab,
    slider3Tab,
    slider4Tab,
  ] = sliderCollection;

  const slides = [
    {
      url: { mob: slider1, tab: slider1Tab },
      title: 'lilo and stitch',
      bg: 'bg-[#4CB9EC]',
      w: { mob: 193, tab: 313 },
      h: { mob: 199, tab: 311 },
    },
    {
      url: { mob: slider2, tab: slider2Tab },
      title: 'harry potter',
      bg: 'bg-[#FEDBBB]',
      w: { mob: 156, tab: 237 },
      h: { mob: 216, tab: 327 },
    },
    {
      url: { mob: slider3, tab: slider3Tab },
      title: 'wednesday',
      bg: 'bg-[#B5ADC6]',
      w: { mob: 156, tab: 214 },
      h: { mob: 219, tab: 313 },
    },
    {
      url: { mob: slider4, tab: slider4Tab },
      title: 'how to train you dragon',
      bg: 'bg-[#B5E1E5]',
      w: { mob: 158, tab: 228 },
      h: { mob: 235, tab: 340 },
    },
  ];

  return (
    <div>
      <Swiper
        allowSlideNext={true}
        initialSlide={0}
        slidesPerView={2}
        autoplay={{ delay: 5000 }}
        // autoplay={false}
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
          1440: {
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
              className={`relative flex justify-center items-center ${slide.bg} h-[268px] pl-4 pr-2 md:h-[404px] md:pl-20 md:pr-10  md:justify-between`}
            >
              <div className="absolute left-4 md:static">
                <p className="uppercase w-[230px] text-2xl not-italic font-extrabold mb-4  md:w-[325px]  md:text-3xl md:font-semibold md:mb-[42px] lg:text-[40px] lg:w-full">
                  {slide.title}
                </p>
                <Link
                  className="inline-block uppercase  px-8 py-[11px] rounded-[5px] bg-white text-base not-italic font-bold md:text-xl lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear"
                  href={'/'}
                >
                  shop collection
                </Link>
              </div>
              <div className="ml-auto md:hidden">
                <Image
                  src={slide.url.mob}
                  alt={slide.title}
                  width={slide.w.mob}
                  height={slide.h.mob}
                />
              </div>
              <div className="hidden  md:block">
                <Image
                  className="max-w-min"
                  src={slide.url.tab}
                  alt={slide.title}
                  width={slide.w.tab}
                  height={slide.h.tab}
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
