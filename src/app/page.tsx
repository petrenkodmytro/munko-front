'use client';

import Advantages from '@/components/sections/advantages';
import Banner from '@/components/sections/banner';
import Collection from '@/components/sections/collection/collection';
import Catalog from '@/components/sections/catalog';
import FAQ from '@/components/sections/faq';
import useWindowSize from '@/hooks/useWindowSize';

export default function Home() {
  const {width} = useWindowSize();  
  
  return (
    <main>
      <Banner />
      <Advantages width={width} />
      <Catalog width={width} />
      <Collection />
      <FAQ />
    </main>
  );
}