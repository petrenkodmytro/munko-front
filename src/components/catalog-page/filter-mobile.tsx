'use cluent';

import { useState, useEffect, SetStateAction } from 'react';
import FilterIcon from './../../../public/icons/filter-icon.svg';
import IconClose from './../../../public/icons/icon-close.svg';
import Filter from './filter';

type FilterProps = {
  priceFrom: string;
  handleSetPriceFrom: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  priceTo: string;
  handleSetPriceTo: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  stock: boolean;
  setStock: (stock: boolean) => void;
  sale: boolean;
  setSale: (sale: boolean) => void;
  toggleSelectedFilter: (filterName: string, value: string) => void;
  colectionSearchParams: string[];
};

const FilterMobile = ({
  priceFrom,
  handleSetPriceFrom,
  priceTo,
  handleSetPriceTo,
  stock,
  setStock,
  sale,
  setSale,
  toggleSelectedFilter,
  colectionSearchParams,
}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden inline-flex gap-[10px] justify-center items-center text-lg font-medium "
      >
        <FilterIcon />
        Filter
      </button>

      {isOpen && (
        <div className="absolute opacity-1 overflow-auto md:rounded md:shadow-[5px_5px_20px_0px_rgb(124,157,150)]  py-4 pl-4 flex-col top-0 w-[390px]  items-center -ml-4 md:-ml-5 bg-footer">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-1 right-1 cursor-pointer z-40"
          >
            <IconClose />
          </button>
          <div className="bg-white w-[303px]">
            <Filter
              priceFrom={priceFrom}
              handleSetPriceFrom={handleSetPriceFrom}
              priceTo={priceTo}
              handleSetPriceTo={handleSetPriceTo}
              stock={stock}
              setStock={setStock}
              sale={sale}
              setSale={setSale}
              toggleSelectedFilter={toggleSelectedFilter}
              colectionSearchParams={colectionSearchParams}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMobile;
