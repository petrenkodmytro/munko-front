'use client';

import { SetStateAction, useEffect, useState } from 'react';
import SortBy from './sortBy';
import Card from '../card/Card';
import { ICard, IFilteredParams } from '@/types/types';
import FilterMobile from './filter-mobile';
import Filter from './filter';
import { getFilteredCatalog } from '@/api/api';

type Props = {
  cardsCatalog: ICard[];
  filterAttributes: {
    categories: string[];
    collections: string[];
    series: string[];
  };
};

const CatalogFilter = ({ cardsCatalog, filterAttributes }: Props) => {
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
  const [seriesSearchParams, setSeriesSearchParams] = useState<string[]>([]);
  const [categorySearchParams, setCategorySearchParams] = useState<string[]>(
    []
  );

  useEffect(() => {
    const search = async () => {
      let filteredParams: IFilteredParams = {
        category: null,
        collection: null,
        series: null,
        priceFrom: null,
        priceTo: null,
        sale: null,
        inStock: null,
      };
      if (stock) {
        filteredParams.inStock = true;
      }
      if (sale) {
        filteredParams.sale = true;
      }
      if (colectionSearchParams.length !== 0) {
        const stringified = `[${colectionSearchParams.map(v => `"${v}"`).join(', ')}]`;
        filteredParams.collection = stringified;
      }
      if (seriesSearchParams.length !== 0) {
        const stringified = `[${seriesSearchParams.map(v => `"${v}"`).join(', ')}]`;
        filteredParams.series = stringified;
      }
      if (categorySearchParams.length !== 0) {
        const stringified = `[${categorySearchParams.map(v => `"${v}"`).join(', ')}]`;
        filteredParams.category = stringified;
      }
      if (priceFrom !== '') {
        filteredParams.priceFrom = priceFrom;
      }
      if (priceTo !== '') {
        filteredParams.priceTo = priceTo;
      }

      let currentfilteredCatalog: ICard[] = [];
      try {
        currentfilteredCatalog = await getFilteredCatalog(filteredParams);
        console.log('currentfilteredCatalog', currentfilteredCatalog);
      } catch (error) {
        console.log(error);
      }
      setFilteredCardsCatalog(currentfilteredCatalog);
    };
    search();
  }, [
    categorySearchParams,
    colectionSearchParams,
    seriesSearchParams,
    priceFrom,
    priceTo,
    stock,
    sale,
  ]);

  const toggleSelectedFilter = (filterName: string, value: string) => {
    // collection
    if (filterName === 'collection') {
      let currentColectionSearchParams = [...colectionSearchParams];
      const indexOfColectionParams =
        currentColectionSearchParams.indexOf(value);
      if (indexOfColectionParams === -1) {
        currentColectionSearchParams = [...currentColectionSearchParams, value];
        setColectionSearchParams(currentColectionSearchParams);
      } else {
        currentColectionSearchParams = currentColectionSearchParams.filter(
          item => item !== value
        );
        setColectionSearchParams(currentColectionSearchParams);
      }
    }

    // series
    if (filterName === 'series') {
      console.log('series');
      let currentSeriesSearchParams = [...seriesSearchParams];
      const indexOfColectionParams = currentSeriesSearchParams.indexOf(value);
      if (indexOfColectionParams === -1) {
        currentSeriesSearchParams = [...currentSeriesSearchParams, value];
        setSeriesSearchParams(currentSeriesSearchParams);
      } else {
        currentSeriesSearchParams = currentSeriesSearchParams.filter(
          item => item !== value
        );
        setSeriesSearchParams(currentSeriesSearchParams);
      }
    }

    // category
    if (filterName === 'category') {
      console.log('category');
      let currentCategorySearchParams = [...categorySearchParams];
      const indexOfColectionParams = currentCategorySearchParams.indexOf(value);
      if (indexOfColectionParams === -1) {
        currentCategorySearchParams = [...currentCategorySearchParams, value];
        setCategorySearchParams(currentCategorySearchParams);
      } else {
        currentCategorySearchParams = currentCategorySearchParams.filter(
          item => item !== value
        );
        setCategorySearchParams(currentCategorySearchParams);
      }
    }
  };

  const handleChangeSort = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
    console.log(sortBy);
  };

  return (
    <section className="px-4 pt-7 pb-10 xl:px-20">
      <div className="xl:flex gap-[190px]">
        <p>Catalog/Disney/Cartoons</p>
        <div className="xl:flex xl:flex-row-reverse xl:justify-between">
          <div className="flex justify-between">
            {/* filter mobile */}
            <FilterMobile
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
            />
            <SortBy sortBy={sortBy} handleChangeSort={handleChangeSort} />
          </div>
          <p className="hidden md:block">Showing 1-14 of 28 products</p>
        </div>
      </div>

      <div className="xl:flex justify-between">
        {/* filter desktop */}
        <div className="hidden xl:block">
          <Filter
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
          />
        </div>

        {/* Catalog */}
        {filteredCardsCatalog.length === 0 ? (
          <div className="text-2xl flex items-center flex-col gap-[30px] my-5 md:my-9 md:px-16 md:flex-row md:flex-wrap justify-center lg:justify-evenly md:gap-[70px] xl:w-[894px] xl:px-0 xl:mt-0 xl:gap-[84px]">
            За данними критеріями пошуку результатів не знайдено
          </div>
        ) : (
          <div className="flex items-center flex-col gap-[30px] my-5 md:my-9 md:px-16 md:flex-row md:flex-wrap md:justify-between md:gap-[70px]  xl:w-[894px] xl:px-0 xl:my-0 xl:gap-[84px] xl:justify-start">
            {filteredCardsCatalog.map(card => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogFilter;
