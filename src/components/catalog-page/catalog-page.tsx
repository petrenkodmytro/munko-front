'use client';

import { getCatalog, getFilterAttributes } from '@/api/api';
import CatalogFilter from './catalog-filter';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ICard } from '@/types/types';

interface ICatalogPageProps {
  sale: boolean;
  inStock: boolean | null;
}
const CatalogPage = ({ sale, inStock }: ICatalogPageProps) => {
  const [cardsCatalog, setCardsCatalog] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterAttributes, setFilterAttributes] = useState<{
    categories: string[];
    collections: string[];
    series: string[];
  }>({ categories: [], collections: [], series: [] });
  const [searchValue, setSearchValue] = useState('');
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    search ? setSearchValue(search) : null;
    const getData = async () => {
      const cardsCatalogData = await getCatalog();
      const filterAttributesData = await getFilterAttributes();

      if (cardsCatalogData) {
        setCardsCatalog(cardsCatalogData);
      }
      if (filterAttributesData) {
        setFilterAttributes(filterAttributesData);
      }
    };

    getData();
  }, [search]);

  useEffect(() => {
    if (cardsCatalog.length === 0 && filterAttributes.categories.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [cardsCatalog.length, filterAttributes.categories.length]);

  // if (cardsCatalog.length === 0 && filterAttributes.categories.length === 0) {
  //   return (
  //     <div className="h-20 flex justify-center items-center">
  //       Вибачте трапилась помилка. Спробуйте пізніше. Сервер не відповідає
  //     </div>
  //   );
  // }

  return (
    <>
      <CatalogFilter
        saleProps={sale}
        inStockProps={inStock}
        cardsCatalog={cardsCatalog}
        filterAttributes={filterAttributes}
        searchValue={searchValue}
        isLoading={isLoading}
      />
    </>
  );
};

export default CatalogPage;
