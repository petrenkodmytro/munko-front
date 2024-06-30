'use client';

import { useState } from 'react';
import FilterArrUp from './../../../public/icons/filter-arrow-up.svg';
import FilterArrDown from './../../../public/icons/filter-arrow-down.svg';
import CheckFilter from './../../../public/icons/check-filter.svg';
import { IPropsFilter } from '@/types/types';

const Filter = ({
  priceFrom,
  priceTo,
  setPriceFrom,
  setPriceTo,
  stock,
  setStock,
  stockShow,
  sale,
  setSale,
  toggleSelectedFilter,
  colectionSearchParams,
  seriesSearchParams,
  categorySearchParams,
  filterAttributes,
  setPageCatalog,
  resetFilter,
}: IPropsFilter) => {
  const [openPrice, setOpenPrice] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openSeries, setOpenSeries] = useState(false);
  const [localPriceFrom, setLocalPriceFrom] = useState(priceFrom);
  const [localPriceTo, setLocalPriceTo] = useState(priceTo);
  const [showMoreCollection, setShowMoreCollection] = useState(false);
  const [showMoreSeries, setShowMoreSeries] = useState(false);
  const [showMoreCategory, setShowMoreCategory] = useState(false);

  let isVisibleBtnReset = false;
  if (
    priceFrom !== '' ||
    priceTo !== '' ||
    colectionSearchParams.length > 0 ||
    seriesSearchParams.length > 0 ||
    categorySearchParams.length > 0 ||
    sale === true ||
    stock === true
  ) {
    isVisibleBtnReset = true;
  }

  const resetLocalStateFilter = () => {
    setOpenPrice(false);
    setOpenCollection(false);
    setOpenCategory(false);
    setOpenSeries(false);
    setLocalPriceFrom('');
    setLocalPriceTo('');
    setShowMoreCollection(false);
    setShowMoreSeries(false);
    setShowMoreCategory(false);
  };

  return (
    <div className=" p-[20px] w-[303px] rounded xl:p-[30px] flex flex-col gap-4 xl:gap-[30px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] text-lg xl:text-2xl">
      {/* price */}
      <div className="">
        <div className="inline-flex gap-2 px-2 py-2  rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
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
              value={localPriceFrom}
              type="number"
              min={0}
              onChange={event => {
                if (
                  parseInt(event.target.value) >= 0 ||
                  event.target.value === ''
                ) {
                  setLocalPriceFrom(event.target.value);
                }
              }}
              placeholder="From"
              className="pl-1 py-1 mr-[25px] w-[90px]  xl:text-2xl bg-[#F5F5F5] rounded"
            />
            <input
              value={localPriceTo}
              type="number"
              min={0}
              onChange={event => {
                if (
                  parseInt(event.target.value) >= 0 ||
                  event.target.value === ''
                ) {
                  setLocalPriceTo(event.target.value);
                }
              }}
              placeholder="To"
              className="pl-1 py-1 w-[90px]  xl:text-2xl bg-[#F5F5F5] rounded"
            />
            <button
              onClick={() => {
                setPriceFrom(localPriceFrom);
                setPriceTo(localPriceTo);
                setPageCatalog(0);
              }}
              className="text-lg xl:text-2xl font-semibold ml-2 px-2  flex justify-center items-center rounded-[5px] text-white bg-subscribeBtn duration-200 ease-linear w-10 h-10  py-2 shrink-0  lg:hover:bg-white lg:hover:text-subscribeBtn lg:hover:border-[3px] lg:hover:border-subscribeBtn"
              type="button"
            >
              ok
            </button>
          </div>
        )}
      </div>
      {/* Collection */}
      <div className="">
        <div className="inline-flex gap-2 px-2 py-2  rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
          Collection
          <button
            className=""
            onClick={() => {
              setOpenCollection(!openCollection);
              // if (openCollection === false) {
              //   setShowMoreCollection(false);
              // }
            }}
            type="button"
          >
            {openCollection ? <FilterArrUp /> : <FilterArrDown />}
          </button>
        </div>
        {openCollection && !showMoreCollection && (
          <ul className="flex flex-col gap-4 xl:gap-[30px] mt-4">
            {filterAttributes.collections.slice(0, 6).map((el, index) => (
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  checked={colectionSearchParams.includes(el)}
                  onChange={() => toggleSelectedFilter('collection', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]  rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                <label className="">{el}</label>
              </li>
            ))}
          </ul>
        )}
        {openCollection && showMoreCollection && (
          <ul className="flex flex-col gap-4 xl:gap-[30px] mt-4">
            {filterAttributes.collections.map((el, index) => (
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  checked={colectionSearchParams.includes(el)}
                  onChange={() => toggleSelectedFilter('collection', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]  rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                <label className="">{el}</label>
              </li>
            ))}
          </ul>
        )}
        {openCollection && !showMoreCollection && (
          <button
            onClick={() => setShowMoreCollection(!showMoreCollection)}
            className="mt-[30px] xl:text-2xl underline"
            type="button"
          >
            Others
          </button>
        )}
      </div>
      {/* Series */}
      <div className="">
        <div className="inline-flex gap-2 px-2 py-2  rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
          Series
          <button
            className=""
            onClick={() => setOpenSeries(!openSeries)}
            type="button"
          >
            {openSeries ? <FilterArrUp /> : <FilterArrDown />}
          </button>
        </div>
        {openSeries && !showMoreSeries && (
          <ul className="flex flex-col gap-4 xl:gap-[30px] mt-4">
            {filterAttributes.series.slice(0, 6).map((el, index) => (
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  checked={seriesSearchParams.includes(el)}
                  onChange={() => toggleSelectedFilter('series', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px] rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                <label className="">{el}</label>
              </li>
            ))}
          </ul>
        )}
        {openSeries && showMoreSeries && (
          <ul className="flex flex-col gap-4 xl:gap-[30px] mt-4">
            {filterAttributes.series.map((el, index) => (
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  checked={seriesSearchParams.includes(el)}
                  onChange={() => toggleSelectedFilter('series', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px] rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                <label className="">{el}</label>
              </li>
            ))}
          </ul>
        )}
        {openSeries && !showMoreSeries && (
          <button
            onClick={() => setShowMoreSeries(!showMoreSeries)}
            className="mt-[30px] xl:text-2xl underline"
            type="button"
          >
            Others
          </button>
        )}
      </div>
      {stockShow && (
        <>
          {/* in stock */}
          <div className="relative flex items-center gap-[10px] xl:text-2xl">
            <input
              className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]  rounded-[5px]"
              type="checkbox"
              name="In stock"
              id="In stock"
              checked={stock !== null ? stock : undefined}
              onChange={() => {
                setStock(!stock);
                setPageCatalog(0);
              }}
            />
            <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
            In stock
          </div>
          {/* sale */}
          <div className="relative flex items-center gap-5 xl:text-2xl">
            <input
              className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px] rounded-[5px]"
              type="checkbox"
              name="sale"
              id="sale"
              checked={sale}
              onChange={() => {
                setSale(!sale);
                setPageCatalog(0);
              }}
            />
            <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
            Sale
          </div>
        </>
      )}
      {/* Category */}
      <div className="">
        <div className="inline-flex gap-2 px-2 py-2  rounded shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]">
          Category
          <button
            className=""
            onClick={() => setOpenCategory(!openCategory)}
            type="button"
          >
            {openCategory ? <FilterArrUp /> : <FilterArrDown />}
          </button>
        </div>
        {openCategory && !showMoreCategory && (
          <ul className="flex flex-col gap-4 xl:gap-[30px] mt-4">
            {filterAttributes.categories.slice(0, 6).map((el, index) => (
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  checked={categorySearchParams.includes(el)}
                  onChange={() => toggleSelectedFilter('category', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px] rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                <label className="">{el}</label>
              </li>
            ))}
          </ul>
        )}
        {openCategory && showMoreCategory && (
          <ul className="flex flex-col gap-4 xl:gap-[30px] mt-4">
            {filterAttributes.categories.map((el, index) => (
              <li key={index} className="relative flex items-center gap-5">
                <input
                  type="checkbox"
                  key={index}
                  checked={categorySearchParams.includes(el)}
                  onChange={() => toggleSelectedFilter('category', el)}
                  name="filter"
                  id={el}
                  value={el}
                  className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px] rounded-[5px]"
                />
                <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                <label className="">{el}</label>
              </li>
            ))}
          </ul>
        )}
        {openCategory && !showMoreCategory && (
          <button
            onClick={() => setShowMoreCategory(!showMoreCategory)}
            className="mt-[30px] xl:text-2xl underline"
            type="button"
          >
            Others
          </button>
        )}
      </div>
      {/* Coming soon */}
      <div className="relative flex items-center gap-[10px] xl:text-2xl">
        <input
          className="appearance-none  peer shrink-0 bg-[#F5F5F5] w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]  rounded-[5px]"
          type="checkbox"
          name="In stock"
          id="In stock"
          checked={stock !== null ? stock : undefined}
          onChange={() => {
            setStock(false);
            setPageCatalog(0);
          }}
        />
        <CheckFilter className="absolute left-[5px] hidden peer-checked:block pointer-events-none" />
        Coming soon
      </div>
      {/* reset filters */}
      {isVisibleBtnReset && (
        <button
          onClick={() => {
            resetFilter();
            resetLocalStateFilter();
          }}
          className="inline-flex justify-center items-center text-lg uppercase xl:text-xl font-semibold p-1 rounded-[5px] text-white bg-subscribeBtn duration-200 ease-linear w-[229px] h-[46px]  lg:hover:bg-white lg:hover:text-subscribeBtn lg:hover:border-[2px] lg:hover:border-subscribeBtn"
          type="button"
        >
          reset filters
        </button>
      )}
    </div>
  );
};

export default Filter;
