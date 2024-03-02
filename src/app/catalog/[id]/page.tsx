import ProductCard from '@/components/product-card/ProductCard';
import Popular from '@/components/sections/popular';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ProductCard />
      <div className='md:hidden xl:block xl:px-20'><Popular /></div>
      
    </>
  );
};

export default page;
