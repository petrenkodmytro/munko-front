"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import ArrR from "../../../../public/icons/arrow-right.svg";
import slider1 from "../../../../public/image/collection-1.png";
import slider2 from "../../../../public/image/collection-2.png";
import slider3 from "../../../../public/image/collection-3.png";
import slider4 from "../../../../public/image/collection-4.png";

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

const CollectionCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [slider1, slider2, slider3, slider4];
  return (
    <div className="slider-container h-[230px]">
      <Slider {...settings}>
        {images.map((image, index) => {
          {
            return (
              <div className="bg-green-500" key={index}>
                <Image src={image} objectFit="contain" alt={"image"} className="animate-fadeIn" />
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};
export default CollectionCarousel;
