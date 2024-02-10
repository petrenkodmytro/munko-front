'use client';

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

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
  const swiperRef = useRef(null);
  SwiperCore.use([Autoplay, Navigation]);

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

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  // const handleSlideChange = (swiper: { isBeginning: any; isEnd: any }) => {
  //   setCanGoPrev(!swiper.isBeginning);
  //   setCanGoNext(!swiper.isEnd);
  // };

  return (
    <div>
      <Swiper
        initialSlide={0}
        slidesPerView={1}
        // ref={swiperRef}
        autoplay={false}
        // autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '#my-prev-button',
          nextEl: '#my-next-button',
        }}
        // onSlideChange={handleSlideChange}
        modules={[Navigation, Pagination]}
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
            <div className={`flex justify-center items-center ${slide.bg} h-[260px] px-4`}>
              <div className="">
                  <p className="uppercase w-[230px] text-2xl not-italic font-extrabold mt-[18px] mb-4">
                    {slide.title}
                  </p>
                  <Link
                    className="block uppercase w-[226px] h-[42px] px-8 py-3 rounded-[5px] bg-white text-base not-italic font-bold"
                    href={'/'}
                  >
                    shop collection
                  </Link>
                </div>
              <div className="w-40">
                <Image key={index} src={slide.url} alt={slide.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionCarousel;

// {/* <div className="flex justify-around">
//         <button id="my-prev-button" onClick={() => handlePrevSlide}>
//           prev
//         </button>
//         <button id="my-next-button" onClick={() => handleNextSlide}>
//           next
//         </button>
//       </div> */}

// /**
//  * CollectionCarousel component for nextJS and Tailwind.
//  * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
//  *
//  * @param images - Array of images with src and alt attributes
//  * @returns React component
//  */
// export default function CollectionCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = [slider1, slider2, slider3, slider4]
//   const handleNextSlide = () => {
//     let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
//     setCurrentSlide(newSlide);
//   };

//   const handlePrevSlide = () => {
//     let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
//     setCurrentSlide(newSlide);
//   };

//   return (
//     <div className="relative">
//       <ArrR
//         onClick={handlePrevSlide}
//         className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
//       />
//       <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
//         <Swipe onSwipeLeft={handleNextSlide} onSwipeRight={handlePrevSlide} className="relative z-10 w-full h-full">
//           {images.map((image, index) => {
//             if (index === currentSlide) {
//               return (
//                 <Image
//                   key={index}
//                   src={image}
//                   layout="fill"
//                   objectFit="contain"
//                   alt={'image'}
//                   className="animate-fadeIn"
//                 />
//               );
//             }
//           })}
//         </Swipe>
//       </div>
//       <ArrR
//         onClick={handleNextSlide}
//         className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
//       />

//       <div className="relative flex justify-center p-2">
//         {images.map((_, index) => {
//           return (
//             <div
//               className={
//                 index === currentSlide
//                   ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
//                   : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
//               }
//               key={index}
//               onClick={() => {
//                 setCurrentSlide(index);
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// const CollectionCarousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 3000,
//   };
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = [slider1, slider2, slider3, slider4];
//   return (
//     <div className="slider-container h-[230px]">
//       <Slider {...settings}>
//         {images.map((image, index) => {
//           {
//             return (
//               <div className="bg-green-500" key={index}>
//                 <Image src={image} objectFit="contain" alt={"image"} className="animate-fadeIn" />
//               </div>
//             );
//           }
//         })}
//       </Slider>
//     </div>
//   );
// };
// export default CollectionCarousel;
