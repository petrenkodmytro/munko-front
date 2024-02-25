import React from 'react';
import Card from '../card/Card';
import Link from 'next/link';
import CardsCarousel from '../card/card-carousel';

const Catalog = () => {
  return (
    <section className="mb-8 md:mb-12 lg:mb-14">
      <div className="text-2xl text-black font-extrabold px-4 mb-5 md:font-bold md:text-3xl md:text-center lg:mb-14 lg:text-4xl">
        CATALOG
      </div>
      <div className="md:ml-0 mb-5 md:mb-9 md:px-20 hidden md:flex md:flex-wrap justify-between lg:justify-evenly xl:justify-between md:gap-[76px] lg:gap-5 lg:px-[164px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="md:hidden mb-5 ml-4">
        <CardsCarousel />
      </div>
      <button className="mx-14 rounded px-8 text-xl h-11 font-semibold py-2.5 hover:py-2 bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 md:block md:m-auto">
        <Link href={'/catalog'}>SEE MORE FIGURES</Link>
      </button>
    </section>
  );
};

export default Catalog;
