import ProductCard from '@/components/product-card/ProductCard';
import Popular from '@/components/sections/popular';

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params: { id } }: Props) => {
  return (
    <>
      <ProductCard />
      <div className="md:hidden xl:block xl:px-20">
        <Popular />
      </div>
    </>
  );
};

export default page;
