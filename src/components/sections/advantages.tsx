import React from 'react';
import original from './../../../public/image/advantages-original.png';
import clock from './../../../public/image/advantages-clock.png';
import price from './../../../public/image/advantages-price.png';

const Advantages = () => {
  return (
    <section className="text-center md:bg-[#F5F5F5] px-4 py-8 md:mx-5 md:rounded md:relative z-10 md:-mt-5 lg:-mt-6 lg:px-20 lg:py-14">
      <h3 className="text-2xl text-black font-bold md:text-3xl lg:text-4xl md:font-semibold">
        We have figures for everyones&apos;s taste
      </h3>
      <div className="text-xs text-black font-semibold py-8 px-2 md:px-0 flex justify-evenly md:py-6 md:text-base lg:text-lg md:justify-center">
        <div className='w-[110px] md:w-auto md:pr-2.5 lg:pr-0'>
          <img src={original.src} alt="original" className="w-10 md:w-16 lg:w-20 m-auto" />
          <p className='mt-1.5 pt-1 md:pt-0'>Only Originals</p>
        </div>
        <div className='w-[105px] md:w-auto md:mx-5 lg:mx-20'>
          <img src={clock.src} alt="speed" className="w-10 md:w-16 lg:w-20 m-auto" />
          <p className='mt-1.5'>Fast Worldwide Shipping</p>
        </div>
        <div className='w-[110px] md:w-auto'>
          <img src={price.src} alt="price" className="w-10 md:w-16 lg:w-20 m-auto" />
          <p className='mt-1.5 pt-1 md:pt-0'>Affordable Prices</p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
