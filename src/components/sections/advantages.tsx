import React from 'react';
import Image from 'next/image';
import original from './../../../public/image/advantages-original.png';
import clock from './../../../public/image/advantages-clock.png';
import price from './../../../public/image/advantages-price.png';
import Popular from './popular';

const Advantages = ({width}: {width:number}) => {
  return (
    <section className="md:bg-[#F5F5F5] md:shadow-[0px_0px_30px_0px_rgb(0,0,0,0.15)] py-8 md:mx-5 md:rounded md:px-[60px] md:relative z-10 md:-mt-5 md:mb-12 lg:-mt-6 lg:px-[84px] lg:py-14 lg:mx-20 lg:mb-20">
      <h3 className="text-2xl text-center text-black font-bold md:text-3xl lg:text-4xl md:text-nowrap md:font-semibold">
        We have figures for everyone&apos;s taste
      </h3>
      <div className="text-xs text-center text-black font-semibold py-8 px-6 md:px-0 flex justify-evenly md:py-6 md:text-base lg:text-lg md:justify-center md:pb-12">
        <div className="w-[110px] md:w-auto md:pr-2.5 lg:pr-0">
          <Image
            src={original.src}
            alt="original"
            width={40}
            height={40}
            className="w-10 md:w-16 lg:w-20 m-auto"
          />
          <p className="mt-1.5 pt-1 md:pt-0">Only Originals</p>
        </div>
        <div className="w-[105px] md:w-auto md:mx-5 lg:mx-20">
          <Image
            src={clock.src}
            alt="speed"
            width={40}
            height={40}
            className="w-10 md:w-16 lg:w-20 m-auto"
          />
          <p className="mt-1.5">Fast Worldwide Shipping</p>
        </div>
        <div className="w-[110px] md:w-auto">
          <Image
            src={price.src}
            alt="price"
            width={40}
            height={40}
            className="w-10 md:w-16 lg:w-20 m-auto"
          />
          <p className="mt-1.5 pt-1 md:pt-0">Affordable Prices</p>
        </div>
      </div>
      <Popular width={width} />
    </section>
  );
};

export default Advantages;
