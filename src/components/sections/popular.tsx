import React from 'react';
import Card from '../card/Card';
import CardsCarousel from '../card/card-carousel';

const Popular = () => {
  return (
    <div className='pl-4 md:p-0'>
      <div className="text-2xl text-black font-extrabold mb-5 md:p-0 md:font-bold md:text-3xl lg:mb-11">
        HOT RIGHT NOW
      </div>
      <div className="hidden md:flex md:flex-wrap md:gap-[76px] lg:gap-5 justify-between lg:justify-evenly xl:justify-between md:ml-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='md:hidden'>
      <CardsCarousel />        
      </div>
    </div>
  );
};

export default Popular;
