'use client';

import { SetStateAction, useEffect, useState } from 'react';
import SortBy from './sortBy';
import Card from '../card/Card';
import { ICard } from '@/types/types';
import FilterMobile from './filter-mobile';
import Filter from './filter';
import { getFilteredByPrice } from '@/api/api';

type Props = {
  cardsCatalog: ICard[];
};

const CatalogFilter = ({ cardsCatalog }: Props) => {
  // search parameters
  const [filteredCardsCatalog, setFilteredCardsCatalog] =
    useState(cardsCatalog);
  const [sortBy, setSortBy] = useState('Best selling');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [stock, setStock] = useState(false);
  const [sale, setSale] = useState(false);
  const [colectionSearchParams, setColectionSearchParams] = useState<string[]>(
    []
  );
  const [seriesSearchParams, setSeriesSearchParams] = useState('');
  const [categorySearchParams, setCategorySearchParams] = useState('');

  // const search = () => {
  //   let currentfilteredCatalog: ICard[] = [];
  //   console.log('search');
  //   if (colectionSearchParams.length !== 0) {
  //     for (let i = 0; i < colectionSearchParams.length; i++) {
  //       const searchValue = colectionSearchParams[i];
  //       let currentFilteredCardsCatalog: ICard[] = cardsCatalog.filter(
  //         card => card.collection === searchValue
  //       );
  //       currentfilteredCatalog = [
  //         ...filteredCardsCatalog,
  //         ...currentFilteredCardsCatalog,
  //       ];
  //     }
  //   }
  //   setFilteredCardsCatalog(currentfilteredCatalog);
  // };

  const search = async () => {
    console.log('priceFrom', priceFrom)
    console.log('priceTo', priceTo)
    let currentfilteredCatalog: ICard[] = [];
    try {
      currentfilteredCatalog = await getFilteredByPrice(priceFrom, priceTo)
      console.log('currentfilteredCatalog', currentfilteredCatalog);
    } catch (error) {
      console.log(error)
    }
    setFilteredCardsCatalog(currentfilteredCatalog);
    // console.log('filteredCardsCatalog', filteredCardsCatalog);
  };

  const toggleSelectedFilter = (filterName: string, value: string) => {
    if (filterName === 'collection') {
      const indexOfColectionParams = colectionSearchParams.indexOf(value);
      if (indexOfColectionParams === -1) {
        setColectionSearchParams(prevState => {
          return [...prevState, value];
        });
      } else {
        setColectionSearchParams(prevState => {
          return [...prevState].filter(item => item !== value);
        });
      }
    }
    // search();
    console.log('colectionSearchParams', colectionSearchParams);
    console.log('filteredCardsCatalog', filteredCardsCatalog);
  };

  const handleChangeSort = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
    console.log(sortBy);
  };
  const handleSetPriceFrom = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPriceFrom(event.target.value);
    console.log(priceFrom);
  };
  const handleSetPriceTo = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPriceTo(event.target.value);
    console.log(priceTo);
  };

  return (
    <section className="px-4 pt-7 pb-10 xl:px-20">
      <div>Catalog/Disney/Cartoons</div>
      <div className="flex justify-between">
        <SortBy sortBy={sortBy} handleChangeSort={handleChangeSort} />
      </div>
      {/* filter mobile */}
      <FilterMobile
        priceFrom={priceFrom}
        setPriceFrom={setPriceFrom}
        priceTo={priceTo}
        setPriceTo={setPriceTo}
        stock={stock}
        setStock={setStock}
        sale={sale}
        setSale={setSale}
        toggleSelectedFilter={toggleSelectedFilter}
        colectionSearchParams={colectionSearchParams}
        search={search}
      />

      <div className="hidden md:block">Showing 1-14 of 28 products</div>
      <div className="xl:flex justify-between">
        {/* filter desktop */}
        <div className="hidden xl:block">
          {' '}
          <Filter
            priceFrom={priceFrom}
            setPriceFrom={setPriceFrom}
            priceTo={priceTo}
            setPriceTo={setPriceTo}
            stock={stock}
            setStock={setStock}
            sale={sale}
            setSale={setSale}
            toggleSelectedFilter={toggleSelectedFilter}
            colectionSearchParams={colectionSearchParams}
            search={search}
          />
        </div>

        {/* Catalog */}
        <div className="flex items-center flex-col gap-[30px] my-5 md:my-9 md:px-16 md:flex-row md:flex-wrap justify-between lg:justify-evenly md:gap-[70px] xl:w-[894px] xl:px-0 xl:mt-0 xl:gap-[84px]">
          {filteredCardsCatalog.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogFilter;
