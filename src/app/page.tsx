import Advantages from "@/components/sections/advantages";
import Banner from "@/components/sections/banner";
import Popular from "@/components/sections/popular";
import Collection from "@/components/sections/collection/collection";
import Catalog from "@/components/sections/catalog";

export default function Home() {
  return (
    <main>
      <Banner />
      <Advantages />
      <Popular />
      <Catalog />
      <Collection />
    </main>
  );
}
