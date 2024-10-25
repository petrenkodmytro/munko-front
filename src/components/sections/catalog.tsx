'use client';
import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Link from 'next/link';
import CardsCarousel from '../card/card-carousel';
import { ICard } from '@/types/types';
import { getCatalog } from '@/api/api';
import Spinner from '@/components/loading/loading';

const Catalog = ({ width }: { width: number }) => {
  const [cardsCatalog, setCardsCatalog] = useState<ICard[]>([]);

  useEffect(() => {
    const getCardCatalog = async () => {
      const cardsCatalogGet = await getCatalog();
      if (cardsCatalogGet) {
        setCardsCatalog(cardsCatalogGet);
      } else {
        console.log(cardsCatalogGet);
      }
      return cardsCatalogGet;
    };
    getCardCatalog();
  }, []);

  let sliceTo: number = 9;

  if (width > 720 && width <= 1093) {
    sliceTo = 4;
  } else if (width > 1093 && width <= 1355) {
    sliceTo = 6;
  } else if (width > 1355) {
    sliceTo = 8;
  }

  return (
    <section className="mb-8 md:mb-12 lg:mb-14">
      <div className="text-2xl text-black font-extrabold px-4 mb-5 md:font-bold md:text-3xl md:text-center lg:mb-14 lg:text-4xl">
        CATALOG
      </div>
      {cardsCatalog.length ? (
        <div className="md:ml-0 mb-5 md:mb-9 md:px-20 hidden md:flex md:flex-wrap justify-between lg:justify-evenly xl:justify-between md:gap-[76px] lg:gap-5 lg:px-[164px]">
          {cardsCatalog.slice(0, sliceTo).map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
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
