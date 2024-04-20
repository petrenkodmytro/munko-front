'use cluent';

import { useState } from 'react';
import FilterIcon from './../../../public/icons/filter-icon.svg';
import IconClose from './../../../public/icons/icon-close.svg';
import Filter from './filter';
import { IPropsFilter } from '@/types/types';

const FilterMobile = ({
  priceFrom,
  priceTo,
  setPriceFrom,
  setPriceTo,
  stock,
  setStock,
  sale,
  setSale,
  toggleSelectedFilter,
  colectionSearchParams,
  seriesSearchParams,
  categorySearchParams,
  filterAttributes,
  setPageCatalog,
  resetFilter
}: IPropsFilter) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden inline-flex gap-[10px] justify-center items-center text-lg font-medium "
      >
        <FilterIcon />
        Filter
      </button>

      {isOpen && (
        <div className="absolute opacity-1 overflow-auto md:rounded md:shadow-[5px_5px_20px_0px_rgb(124,157,150)]  py-4 pl-4 flex-col top-0 w-[390px] max-h-[750px]  items-center -ml-4 md:-ml-5 bg-footer overflow-y-auto custom">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-1 right-1 cursor-pointer z-40"
          >
            <IconClose />
          </button>
          <div className="bg-white w-[303px]">
            <Filter
             priceFrom={priceFrom}
             priceTo={priceTo}
              setPriceFrom={setPriceFrom}
              setPriceTo={setPriceTo}
              stock={stock}
              setStock={setStock}
              sale={sale}
              setSale={setSale}
              toggleSelectedFilter={toggleSelectedFilter}
              colectionSearchParams={colectionSearchParams}
              seriesSearchParams={seriesSearchParams}
              categorySearchParams={categorySearchParams}
              filterAttributes={filterAttributes}
              setPageCatalog={setPageCatalog}
              resetFilter={resetFilter}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMobile;
