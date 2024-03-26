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
    'Date, old to new',
    'Date, new to old',
  ];
  return (
    <div className="text-lg">
      <label>
        Sort by:
        <select value={sortBy} onChange={handleChangeSort}>
          {sortByOptions.map((value, i) => (
            <option value={value} key={i}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SortBy;
