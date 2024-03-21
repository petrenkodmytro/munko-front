'use client';

import { SetStateAction, useState } from 'react';
import FilterArrUp from './../../../public/icons/filter-arrow-up.svg';
import FilterArrDown from './../../../public/icons/filter-arrow-down.svg';
import CatalogSortBy from './catalogSortBy';
import Card from '../card/Card';
import { ICard } from '@/types/types';

type Props = {
  cardsCatalog: ICard[];
};

const sortByOptions = [
  'Best selling',
  'Price, low to high',
  'Price, high to low',
  'Date, old to new',
  'Date, new to old',
];
const collectionOptions = [
  'Marvel',
  'DC',
  'Disney',
  'Starwars',
  'The Simpsons',
  'Who framed Roger Rabbit?',
  'Harry Potter',
  'Avatar',
];
const seriesOptions = [
  'A bug’s life',
  'Bambi',
  'Black Panther',
  'Captain America',
  'Frozen',
  'Maleficent',
  'Spiderman',
  'IronMan',
];
const categoryOptions = ['Movies', 'Comics', 'Anime', 'Games', 'Cartoons'];

const CatalogFilter = ({ cardsCatalog }: Props) => {
  const [sortBy, setSortBy] = useState('Best selling');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [stock, setStock] = useState(false);
  const [sale, setSale] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openSeries, setOpenSeries] = useState(false);

  const handleChangeSort = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
    console.log(sortBy);
  };

  return (
    <section className=''>
      <CatalogSortBy
        sortByOptions={sortByOptions}
        sortBy={sortBy}
        handleChangeSort={handleChangeSort}
      />
      {/* filter */}
      <div className="w-[303px] p-[30px] flex flex-col gap-[30px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
        {/* price */}
        <div className="">
          <div className="inline-flex gap-2 px-2 py-2 text-2xl rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
            Price
            <button
              className=""
              onClick={() => setOpenPrice(!openPrice)}
              type="button"
            >
              {openPrice ? <FilterArrUp /> : <FilterArrDown />}
            </button>
          </div>
          {openPrice && (
            <div className="mt-4 flex gap-[30px]">
              {' '}
              <input
                value={priceFrom}
                type="number"
                onChange={event => setPriceFrom(event.target.value)}
                placeholder="From"
                className="pl-1 py-1 w-[100px]  text-2xl bg-[#F5F5F5] rounded"
              />
              <input
                value={priceTo}
                type="number"
                onChange={event => setPriceTo(event.target.value)}
                placeholder="To"
                className="pl-1 py-1 w-[100px]  text-2xl bg-[#F5F5F5] rounded"
              />
            </div>
          )}
        </div>
        {/* Collection */}
        <div className="">
          <div className="inline-flex gap-2 px-2 py-2 text-2xl rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
            Collection
            <button
              className=""
              onClick={() => setOpenCollection(!openCollection)}
              type="button"
            >
              {openCollection ? <FilterArrUp /> : <FilterArrDown />}
            </button>
          </div>
          {openCollection && (
            <ul className="flex flex-col gap-[30px] mt-4">
              {collectionOptions.map((el, index) => (
                <li key={index} className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    key={index}
                    onClick={() => console.log(el)}
                    name="filter"
                    id={el}
                    value={el}
                    className="flex-shrink-0 w-[35px] h-[35px]"
                  />
                  <label className="text-2xl">{el}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Series */}
        <div className="">
          <div className="inline-flex gap-2 px-2 py-2 text-2xl rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
            Series
            <button
              className=""
              onClick={() => setOpenSeries(!openSeries)}
              type="button"
            >
              {openSeries ? <FilterArrUp /> : <FilterArrDown />}
            </button>
          </div>
          {openSeries && (
            <ul className="flex flex-col gap-[30px] mt-4">
              {seriesOptions.map((el, index) => (
                <li key={index} className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    key={index}
                    onClick={() => console.log(el)}
                    name="filter"
                    id={el}
                    value={el}
                    className="flex-shrink-0 w-[35px] h-[35px]"
                  />
                  <label className="text-2xl">{el}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* in stock */}
        <div className="flex items-center gap-[10px] text-2xl">
          <input
            className="appearance-none relative peer shrink-0 bg-[#F5F5F5] w-[23px] h-[18px] rounded-[5px]"
            type="checkbox"
            name="In stock"
            id="In stock"
            defaultChecked={stock}
            onClick={() => setStock(!stock)}
          />
          <svg
            className="absolute  hidden peer-checked:block pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
          >
            <rect y="0" width="22" height="18" rx="5" fill="white" />
            <path
              d="M17 7L9.4375 14L6 10.8182"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          In stock
        </div>
        {/* sale */}
        <div className="flex items-center gap-[10px] text-2xl">
          <input
            className="appearance-none relative peer shrink-0 bg-[#F5F5F5] w-[22px] h-[18px] rounded-[5px] mr-1"
            type="checkbox"
            name="sale"
            id="sale"
            defaultChecked={sale}
            onClick={() => setSale(!sale)}
          />
          <svg
            className="absolute  hidden peer-checked:block pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
          >
            <rect y="0" width="22" height="18" rx="5" fill="white" />
            <path
              d="M17 7L9.4375 14L6 10.8182"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Sale
        </div>
        {/* Category */}
        <div className="">
          <div className="inline-flex gap-2 px-2 py-2 text-2xl rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
            Category
            <button
              className=""
              onClick={() => setOpenCategory(!openCategory)}
              type="button"
            >
              {openCategory ? <FilterArrUp /> : <FilterArrDown />}
            </button>
          </div>
          {openCategory && (
            <ul className="flex flex-col gap-[30px] mt-4">
              {categoryOptions.map((el, index) => (
                <li key={index} className="flex gap-5">
                  <input
                    type="checkbox"
                    key={index}
                    onClick={() => console.log(el)}
                    name="filter"
                    id={el}
                    value={el}
                    className="w-[35px] h-[35px]"
                  />
                  <label className="text-2xl">{el}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex items-center flex-col  my-5 md:my-9 md:px-20 md:flex-row md:flex-wrap justify-between lg:justify-evenly xl:justify-between md:gap-[76px] lg:gap-5 lg:px-[164px]">
        {cardsCatalog.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default CatalogFilter;
