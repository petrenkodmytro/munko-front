import ProductCard from '@/components/product-card/ProductCard';
import Popular from '@/components/sections/popular';
// import { Suspense } from 'react';

const page = () => {
  return (
    <>
      <ProductCard />
      <div className="pl-4 pt-[30px] pb-10 md:hidden xl:block xl:px-20 xl:pb-[72px]">
        <Popular width={750} />
      </div>
    </>
  );
};

export default page;
