import ProductCard from '@/components/product-card/ProductCard';
import Popular from '@/components/sections/popular';

const page = () => {
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
