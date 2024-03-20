import ProductCard from '@/components/product-card/ProductCard';
import Popular from '@/components/sections/popular';

const page = () => {
  return (
    <>
      <ProductCard />
      <div className="pl-4 pt-[30px] pb-10 md:hidden xl:block xl:px-20 xl:pb-[72px]">
        <Popular />
      </div>
    </>
  );
};

export default page;
