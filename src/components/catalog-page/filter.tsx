'use client';

import { useState } from 'react';
import FilterArrUp from './../../../public/icons/filter-arrow-up.svg';
import FilterArrDown from './../../../public/icons/filter-arrow-down.svg';
import CheckFilter from './../../../public/icons/check-filter.svg';
import { IPropsFilter } from '@/types/types';

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
const categoryOptions = [
  'Movies',
  'Comics',
  'Anime',
  'Games',
  'Cartoons',
  'Animals',
  'Action',
];

const Filter = ({
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  stock,
  setStock,
  sale,
  setSale,
  toggleSelectedFilter,
  colectionSearchParams,
  seriesSearchParams,
  categorySearchParams
}: IPropsFilter) => {
  const [openPrice, setOpenPrice] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openSeries, setOpenSeries] = useState(false);
  return (
    <div className=" w-[303px] p-[30px] flex flex-col gap-[30px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
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
          <div className="mt-4 flex">
            {' '}
            <input
              value={priceFrom}
              type="number"
              onChange={event  => setPriceFrom(event.target.value)}
              placeholder="From"
              className="pl-1 py-1 mr-[25px] w-[90px]  text-2xl bg-[#F5F5F5] rounded"
            />
            <input
              value={priceTo}
              type="number"
              onChange={event  => setPriceTo(event.target.value)}
              placeholder="To"
              className="pl-1 py-1 w-[90px]  text-2xl bg-[#F5F5F5] rounded"
            />
            <button
              // onClick={() => search()}
              className="text-2xl text-white ml-2 px-2 rounded bg-footer"
              type="button"
            >
              ok
            </button>
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
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  defaultChecked={colectionSearchParams.includes(el)}
                  onClick={() => toggleSelectedFilter('collection', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[35px] h-[35px]  rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
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
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  defaultChecked={seriesSearchParams.includes(el)}
                  onClick={() => toggleSelectedFilter('series', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[35px] h-[35px] rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                <label className="text-2xl">{el}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* in stock */}
      <div className="relative flex items-center gap-[10px] text-2xl">
        <input
          className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[35px] h-[35px]  rounded-[5px]"
          type="checkbox"
          name="In stock"
          id="In stock"
          defaultChecked={stock}
          onClick={() => setStock(!stock)}
        />
        <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
        In stock
      </div>
      {/* sale */}
      <div className="relative flex items-center gap-5 text-2xl">
        <input
          className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[35px] h-[35px] rounded-[5px]"
          type="checkbox"
          name="sale"
          id="sale"
          defaultChecked={sale}
          onClick={() => setSale(!sale)}
        />
        <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
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
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  defaultChecked={categorySearchParams.includes(el)}
                  onClick={() => toggleSelectedFilter('category', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[35px] h-[35px] rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                <label className="text-2xl">{el}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter;
