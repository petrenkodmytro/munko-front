import ProductCard from '@/components/product-card/ProductCard';
import Popular from '@/components/sections/popular';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ProductCard />
      <div className='md:hidden'><Popular /></div>
      
    </>
  );
};

export default page;
