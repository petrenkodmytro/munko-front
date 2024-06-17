'use client';
import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import CardsCarousel from '../card/card-carousel';
import { getCatalog } from '@/api/api';
import { ICard } from '@/types/types';
import Spinner from '@/components/loading/loading';

const Popular = ({ width }: { width?: number }) => {
  const [cardsCatalog, setCardsCatalog] = useState<ICard[]>([]);

  useEffect(() => {
    const getCardCatalog = async () => {
      const cardsCatalogGet = await getCatalog();
      if (cardsCatalogGet) {
        setCardsCatalog(cardsCatalogGet);
      }
    };
    getCardCatalog();
  }, []);

  let sliceTo: number = 8;

  if (width) {
    if (width > 720 && width <= 1093) {
      sliceTo = 4;
    } else if (width > 1093 && width <= 1355) {
      sliceTo = 6;
    } else if (width > 1355) {
      sliceTo = 8;
    }
  }

  return (
    <div className="pl-4 md:p-0">
      <div className="text-2xl text-black font-extrabold mb-5 md:p-0 md:font-bold md:text-3xl lg:mb-11">
        HOT RIGHT NOW
      </div>
      {cardsCatalog.length ? (
        <div className="hidden md:flex md:flex-wrap md:gap-[76px] lg:gap-5 justify-between lg:justify-evenly xl:justify-between md:ml-0">
          {cardsCatalog.slice(0, sliceTo).map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
      <div className="md:hidden">
        <CardsCarousel slides={cardsCatalog} />
      </div>
    </div>
  );
};

export default Popular;
