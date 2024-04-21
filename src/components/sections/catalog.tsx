'use client'

import React from 'react';
import Card from '../card/Card';
import Link from 'next/link';
import CardsCarousel from '../card/card-carousel';
import { ICard } from '@/types/types';
import { getCatalog } from '@/api/api';

const Catalog = async () => {
  const cardsCatalog = await getCatalog();

  return (
    <section className="mb-8 md:mb-12 lg:mb-14">
      <div className="text-2xl text-black font-extrabold px-4 mb-5 md:font-bold md:text-3xl md:text-center lg:mb-14 lg:text-4xl">
        CATALOG
      </div>
      <div className="md:ml-0 mb-5 md:mb-9 md:px-20 hidden md:flex md:flex-wrap justify-between lg:justify-evenly xl:justify-between md:gap-[76px] lg:gap-5 lg:px-[164px]">
        {cardsCatalog.slice(0, 8).map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <div className="md:hidden mb-5 ml-4">
        <CardsCarousel slides={cardsCatalog} />
      </div>
      <button className="mx-14 h-[46px] rounded px-8 text-xl font-semibold bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 md:block md:m-auto duration-200 ease-linear">
        <Link href={'/catalog'}>SEE MORE FIGURES</Link>
      </button>
    </section>
  );
};

export default Catalog;
