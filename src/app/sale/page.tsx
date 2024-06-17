import CatalogPage from '@/components/catalog-page/catalog-page';
import React, { Suspense } from 'react';

const Sale = () => {
  return (
    <Suspense>
      <CatalogPage sale={true} inStock={null} />
    </Suspense>
  );
};

export default Sale;
