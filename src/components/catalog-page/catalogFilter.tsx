'use client';

import { SetStateAction, useState } from 'react';

type Props = {};

const CatalogFilter = (props: Props) => {
  const [sortBy, setSortBy] = useState('Best selling');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [stock, setStock] = useState(false);
  const [sale, setSale] = useState(false);

  const sortByOptions = [
    'Best selling',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old',
  ];

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
    console.log(sortBy);
  };

  return (
    <div>
      {/* sort */}
      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={handleChange}>
            {sortByOptions.map((value, i) => (
              <option value={value} key={i}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
      {/* price */}
      <div className="">
        Price
        <div className="">
          {' '}
          <input
            value={priceFrom}
            type="number"
            onChange={event => setPriceFrom(event.target.value)}
            placeholder="From"
            className="px-2 xl:w-[148px] xl:h-14 outline"
          />
          <input
            value={priceTo}
            type="number"
            onChange={event => setPriceTo(event.target.value)}
            placeholder="To"
            className="px-2 xl:w-[148px] xl:h-14 outline"
          />
        </div>
      </div>
      {/* in stock */}
      <div className="p-3">
        <div className="flex ">
          <input
            className="appearance-none relative peer shrink-0 bg-[#F5F5F5] w-[22px] h-[18px] rounded-[5px] mr-1"
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
      </div>
      {/* sale */}
      <div className="p-3">
        <div className="flex ">
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
      </div>
    </div>
  );
};

export default CatalogFilter;
