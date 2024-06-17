import React, { Suspense } from 'react';
import CatalogPage from '@/components/catalog-page/catalog-page';

const ComingSoon = () => {
  return (
    <Suspense>
      <CatalogPage sale={false} inStock={false} />
    </Suspense>
  );
};

export default ComingSoon;
