// 'use client';

import { getCatalog } from '@/api/api';
import Card from '@/components/card/Card';
import { FC } from 'react';
// import React, { useState } from 'react';

interface Card {
  id: number;
  name: string;
  images: string[];
  price: number;
}

interface CadrsCatalog {
  cards: Card[];
}

const Catalog = async () => {
  // const [catalog, setCatalog] = useState(cards);
  // const cardsCatalog: Card[] = [];
  const  cardsCatalog = await getCatalog();
  // const cardsCatalog = [
  //   {
  //     id: 1,
  //     name: 'Tomas Shelby',
  //     images: [
  //       'https://drive.google.com/file/d/1bDViP4fu0NNOcc3kJTVCJ6zhrpYdHpjP/view',
  //       'https://drive.google.com/file/d/12PUqNM9Eo8p-7w-grGoHJQhlVz_Y6jcY/view',
  //     ],
  //     price: 15,
  //   },
  //   {
  //     id: 2,
  //     name: 'Tomas Shelby',
  //     images: [
  //       'https://drive.google.com/file/d/1bDViP4fu0NNOcc3kJTVCJ6zhrpYdHpjP/view',
  //       'https://drive.google.com/file/d/12PUqNM9Eo8p-7w-grGoHJQhlVz_Y6jcY/view',
  //     ],
  //     price: 15,
  //   },
  // ];

  // console.log(cardsCatalog);

  return (
    <>
      {cardsCatalog.map((slide, index) => (
        <div key={slide.id}>{slide.name}</div>
      ))}
    </>
  );
};

export default Catalog;

/* <Link href={`/catalog/${card.id}`}> */
