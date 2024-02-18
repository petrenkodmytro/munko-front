import ProductCard from '@/components/product-card/ProductCard';
import Popular from '@/components/sections/popular';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ProductCard />
      <Popular />
    </>
  );
};

export default page;
