import Advantages from '@/components/sections/advantages';
import Banner from '@/components/sections/banner';
import Collection from '@/components/sections/collection/collection';
import Catalog from '@/components/sections/catalog';

export default function Home() {
  return (
    <main>
      <Banner />
      <Advantages />
      <Catalog />
      <Collection />
    </main>
  );
}
