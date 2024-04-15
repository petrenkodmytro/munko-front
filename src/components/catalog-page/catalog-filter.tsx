'use client';

import { SetStateAction, useEffect, useState } from 'react';
import SortBy from './sortBy';
import Card from '../card/Card';
import { ICard, IFilteredParams, IPagination } from '@/types/types';
import FilterMobile from './filter-mobile';
import Filter from './filter';
import { getFilteredCatalog } from '@/api/api';
import Link from 'next/link';
import SimplePagination from './pagination';

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
  const [pageCatalog, setPageCatalog] = useState(0);
  const [paginationValue, setPaginationValue] = useState<IPagination>({
    page: 0,
    perPage: 0,
    pageCount: 0,
    totalCount: 0,
  });

  useEffect(() => {
    // console.log('useEffect');
    const search = async () => {
      let filteredParams: IFilteredParams = {
        searchCriteria: {
          category: null,
          collection: null,
          series: null,
          priceFrom: null,
          priceTo: null,
          sale: null,
          inStock: null,
        },
        paging: { page: pageCatalog, perPage: 12 },
      };

      if (stock) {
        filteredParams.searchCriteria.inStock = true;
      }
      if (sale) {
        filteredParams.searchCriteria.sale = true;
      }
      if (colectionSearchParams.length !== 0) {
        const stringified = `[${colectionSearchParams.map(v => `"${v}"`).join(', ')}]`;
        filteredParams.searchCriteria.collection = stringified;
      }
      if (seriesSearchParams.length !== 0) {
        const stringified = `[${seriesSearchParams.map(v => `"${v}"`).join(', ')}]`;
        filteredParams.searchCriteria.series = stringified;
      }
      if (categorySearchParams.length !== 0) {
        const stringified = `[${categorySearchParams.map(v => `"${v}"`).join(', ')}]`;
        filteredParams.searchCriteria.category = stringified;
      }
      if (priceFrom !== '') {
        filteredParams.searchCriteria.priceFrom = priceFrom;
      }
      if (priceTo !== '') {
        filteredParams.searchCriteria.priceTo = priceTo;
      }

      let currentfilteredCatalog: ICard[] = [];
      let pagination: IPagination = {
        page: 0,
        perPage: 0,
        pageCount: 0,
        totalCount: 0,
      };
      try {
        const dataFilteredCatalog = await getFilteredCatalog(filteredParams);
        currentfilteredCatalog = dataFilteredCatalog.items;
        pagination = dataFilteredCatalog.paging;
        console.log('currentfilteredCatalog', currentfilteredCatalog);
        console.log('pagination', pagination);
      } catch (error) {
        console.log(error);
      }
      // if (pageCatalog > 0) {
      //   currentfilteredCatalog = [
      //     ...filteredCardsCatalog,
      //     ...currentfilteredCatalog,
      //   ];
      // }
      setFilteredCardsCatalog(currentfilteredCatalog);
      setPaginationValue(pagination);
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
    pageCatalog,
  ]);

  const toggleSelectedFilter = (filterName: string, value: string) => {
    // ------------
    setPageCatalog(0);
    // --------------
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

  // const loadMore = async () => {
  //   console.log('loadMore');
  //   let filteredParams: IFilteredParams = {
  //     searchCriteria: {
  //       category: `[${categorySearchParams.map(v => `"${v}"`).join(', ')}]`,
  //       collection: `[${colectionSearchParams.map(v => `"${v}"`).join(', ')}]`,
  //       series: `[${seriesSearchParams.map(v => `"${v}"`).join(', ')}]`,
  //       priceFrom: priceFrom,
  //       priceTo: priceTo,
  //       sale: null,
  //       inStock: null,
  //     },
  //     paging: { page: pageCatalog, perPage: 5 },
  //   };
  //   let currentfilteredCatalog: ICard[] = [...filteredCardsCatalog];
  //   let pagination: IPagination = {
  //     page: 0,
  //     perPage: 0,
  //     pageCount: 0,
  //     totalCount: 0,
  //   };
  //   try {
  //     const dataFilteredCatalog = await getFilteredCatalog(filteredParams);
  //     currentfilteredCatalog = [
  //       ...filteredCardsCatalog,
  //       ...dataFilteredCatalog.items,
  //     ];
  //     pagination = dataFilteredCatalog.paging;
  //     console.log('currentfilteredCatalog', currentfilteredCatalog);
  //     console.log('pagination', pagination);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setFilteredCardsCatalog(currentfilteredCatalog);
  //   setPaginationValue(pagination);
  // };

  return (
    <section className="px-4 pt-7 pb-10 xl:px-20">
      <div className="xl:flex gap-[200px] xl:mb-[35px]">
        <div className="mb-[25px] xl:mb-0 xl:text-lg">
          <Link className="underline" href={'/'}>
            Home page
          </Link>
          /Catalog
        </div>
        <div className="xl:flex grow flex-row-reverse justify-between">
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
              setPageCatalog={setPageCatalog}
            />

            <SortBy sortBy={sortBy} handleChangeSort={handleChangeSort} />
          </div>
          <p className="hidden md:block">
            Showing {paginationValue.perPage * paginationValue.page + 1}-
            {paginationValue.perPage * (paginationValue.page + 1) <
            paginationValue.totalCount
              ? paginationValue.perPage * (paginationValue.page + 1)
              : paginationValue.totalCount}{' '}
            of {paginationValue.totalCount} products
          </p>
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
            setPageCatalog={setPageCatalog}
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
      <div className="flex xl:mt-12">
        {filteredCardsCatalog.length > 0 && (
          <SimplePagination
            paginationValue={paginationValue}
            setPageCatalog={setPageCatalog}
          />
        )}
        {/* {
          <button
            onClick={() => {
              setPageCatalog(prev => prev + 1);
            }}
            type="button"
            className="ml-auto mr-auto uppercase px-8 py-3 rounded-[5px] border-2 border-current text-white bg-[#31304D] text-xl not-italic font-semibold  lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear"
          >
            load more
          </button>
        } */}
      </div>
    </section>
  );
};

export default CatalogFilter;

// {
//   <button
//     onClick={() => {
//       setPageCatalog(prev => prev + 1);
//       loadMore();
//     }}
//     type="button"
//     className="ml-auto mr-auto uppercase px-8 py-3 rounded-[5px] border-2 border-current text-white bg-[#31304D] text-xl not-italic font-semibold  lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear"
//   >
//     load more
//   </button>
// }
