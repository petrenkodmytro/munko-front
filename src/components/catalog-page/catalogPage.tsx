// 'use client';

import { getCatalog } from '@/api/api';
import Card from '@/components/card/Card';
import { ICard } from '@/types/types';
// import { FC } from 'react';
// import { useState } from 'react';

// interface CatalogProps {
//   cards: ICard[];
// }

const CatalogPage = async () => {
  // const [catalog, setCatalog] = useState([]);

  const cardsCatalog = await getCatalog();
  console.log(cardsCatalog);
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
  if (cardsCatalog.length === 0) {
    return <div>ERROR!!! Сервер не відповідає</div>;
  }
  return (
    <>
      {cardsCatalog.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default CatalogPage;
