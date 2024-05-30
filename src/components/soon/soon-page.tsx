import { getSoonCatalog, getFilterAttributes } from '@/api/api';
import SoonFilter from './soon-filter';

interface ICatalogPageProps {
  sale: boolean;
}
const SoonPage = async ({ sale }: ICatalogPageProps) => {
  const cardsCatalog = await getSoonCatalog();
  const filterAttributes = await getFilterAttributes();  

  if (cardsCatalog.length === 0 && filterAttributes.categories.length === 0) {
    return (
      <div className="h-20 flex justify-center items-center">
        Вибачте трапилась помилка. Спробуйте пізніше. Сервер не відповідає
      </div>
    );
  }

  return (
    <>
      <SoonFilter
        saleProps={sale}
        cardsCatalog={cardsCatalog}
        filterAttributes={filterAttributes}
      />
    </>
  );
};

export default SoonPage;
