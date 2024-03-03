import Advantages from '@/components/sections/advantages';
import Banner from '@/components/sections/banner';
import Collection from '@/components/sections/collection/collection';
import Catalog from '@/components/sections/catalog';
import FAQ from '@/components/sections/faq';

export default function Home() {
  return (
    <main>
      <Banner />
      <Advantages />
      <Catalog />
      <Collection />
      <FAQ />
    </main>
  );
}
