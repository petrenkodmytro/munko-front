'use client';

import { SetStateAction, useState } from 'react';

import SortBy from './sortBy';
import Card from '../card/Card';
import { ICard } from '@/types/types';
import FilterMobile from './filter-mobile';
import Filter from './filter';

type Props = {
  cardsCatalog: ICard[];
};

const CatalogFilter = ({ cardsCatalog }: Props) => {
  const [sortBy, setSortBy] = useState('Best selling');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [stock, setStock] = useState(false);
  const [sale, setSale] = useState(false);
 

  const handleChangeSort = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
    console.log(sortBy);
  };
  const handleSetPriceFrom = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPriceFrom(event.target.value);
    console.log(priceFrom);
  };
  const handleSetPriceTo = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPriceTo(event.target.value);
    console.log(priceTo);
  };

  return (
    <section className="px-4 pt-7 pb-10">
      <div>Catalog/Disney/Cartoons</div>
      <div className="flex justify-between">
        <SortBy sortBy={sortBy} handleChangeSort={handleChangeSort} />
      </div>
      <FilterMobile />

      <div className="hidden md:block">Showing 1-14 of 28 products</div>
      <Filter
        priceFrom={priceFrom}
        handleSetPriceFrom={handleSetPriceFrom}
        priceTo={priceTo}
        handleSetPriceTo={handleSetPriceTo}
      />
      {/* Catalog */}
      <div className="flex items-center flex-col  my-5 md:my-9 md:px-20 md:flex-row md:flex-wrap justify-between lg:justify-evenly xl:justify-between md:gap-[76px] lg:gap-5 lg:px-[164px]">
        {cardsCatalog.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default CatalogFilter;
