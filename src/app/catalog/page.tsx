import CatalogPage from '@/components/catalog-page/catalog-page';
import { Suspense } from 'react';

const Catalog = async () => {
  return (
    <Suspense>
      <CatalogPage sale={false} inStock={null} />;
    </Suspense>
  );
};

export default Catalog;
