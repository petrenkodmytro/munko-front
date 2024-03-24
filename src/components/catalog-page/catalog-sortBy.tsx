import React, { SetStateAction } from 'react';

type Props = {
  sortByOptions: string[];
  sortBy: string;
  handleChangeSort: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
};

const CatalogSortBy = ({ sortByOptions, sortBy, handleChangeSort }: Props) => {
  return (
    <div className='text-lg'>
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

export default CatalogSortBy;
