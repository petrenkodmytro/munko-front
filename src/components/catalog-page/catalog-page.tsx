import { getCatalog, getFilterAttributes } from '@/api/api';
import CatalogFilter from './catalog-filter';

const CatalogPage = async () => {
  const cardsCatalog = await getCatalog();
  const filterAttributes = await getFilterAttributes();

  if (cardsCatalog.length === 0 && filterAttributes.categories.length === 0) {
    return (
      <div className='h-20 flex justify-center items-center'>
        Вибачте трапилась помилка. Спробуйте пізніше. Сервер не відповідає
      </div>
    );
  }

  return (
    <>
      <CatalogFilter
        cardsCatalog={cardsCatalog}
        filterAttributes={filterAttributes}
      />
    </>
  );
};

export default CatalogPage;
