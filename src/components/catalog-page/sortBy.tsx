import React, { SetStateAction } from 'react';

type Props = {
  sortBy: string;
  handleChangeSort: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
};

const SortBy = ({ sortBy, handleChangeSort }: Props) => {
  const sortByOptions = [
    'Best selling',
    'Price, low to high',
    'Price, high to low',
    // 'Date, old to new',
    'Date, new to old',
  ];
  let currentSortValue: string = 'Best selling';
  if (sortBy === 'IdAsc') {
    currentSortValue = 'Best selling';
  }
  if (sortBy === 'PriceAsc') {
    currentSortValue = 'Price, low to high';
  }
  if (sortBy === 'PriceDesc') {
    currentSortValue = 'Price, high to low';
  }
  // if (sortBy === 'DateDesc') {
  //   currentSortValue = 'Date, old to new';
  // }
  if (sortBy === 'DateAsc') {
    currentSortValue = 'Date, new to old';
  }
  return (
    <div className="text-lg">
      <label>
        Sort by:
        <select  value={currentSortValue} onChange={handleChangeSort} className='outline-none'>
          {sortByOptions.map((value, i) => (
            <option value={value} key={i} className='text-lg '>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SortBy;
