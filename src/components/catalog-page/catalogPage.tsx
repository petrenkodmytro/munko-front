import { getCatalog } from '@/api/api';
import Card from '@/components/card/Card';
import CatalogFilter from './catalogFilter';

const CatalogPage = async () => {
  const cardsCatalog = await getCatalog();

  if (cardsCatalog.length === 0) {
    return <div>ERROR!!! Сервер не відповідає</div>;
  }

  return (
    <>
      <CatalogFilter cardsCatalog={cardsCatalog}/>
      {/* <section className="flex items-center flex-col  my-5 md:my-9 md:px-20 md:flex-row md:flex-wrap justify-between lg:justify-evenly xl:justify-between md:gap-[76px] lg:gap-5 lg:px-[164px]">
        {cardsCatalog.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </section> */}
    </>
  );
};

export default CatalogPage;
