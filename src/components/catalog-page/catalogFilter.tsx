'use client';
import DatalistInput from 'react-datalist-input';
import { useState } from 'react';

type Props = {};

const CatalogFilter = (props: Props) => {
  const [sortBy, setSortBy] = useState('Best selling');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const sortByValue = [
    'Best selling',
    'Price, low to high',
    'Price, high to low',
    'Date, old to new',
    'Date, new to old',
  ];

  return (
    <div>
      <div>Sort by</div>

      <DatalistInput
        value={sortBy}
        setValue={setSortBy}
        label="Sort by"
        showLabel={true}
        items={sortByValue}
      />

      <div>
        <label htmlFor="priceFrom">
          Price
          <input
            value={priceFrom}
            id="priceFrom"
            type="text"
            onChange={event => setPriceFrom(event.target.value)}
            placeholder="From"
          />{' '}
        </label>
        <input
          value={priceTo}
          id="priceTo"
          type="text"
          onChange={event => setPriceTo(event.target.value)}
          placeholder="To"
        />
      </div>
    </div>
  );
};

export default CatalogFilter;
