"use client";

import Link from "next/link";
import Image from "next/image";
import imgMain from "../../../../public/image/collection-main.png";
import CollectionCarousel from "./collection-carousel";

type Props = {};

const Collection = (props: Props) => {
  return (
    <section>
      <div className="flex px-4 pt-2 pb-6 bg-[#D63F3F]">
        <div className="">
          <p className="uppercase w-[230px] text-2xl not-italic font-extrabold mt-[98px] mb-4">marvel loki president</p>
          <Link
            className="block uppercase w-[226px] h-[42px] px-8 py-3 rounded-[5px] bg-white text-base not-italic font-bold"
            href={"/"}>
            shop collection
          </Link>
        </div>
        <div className="w-[130px]">
          <Image
            src={imgMain}
            alt="main collection"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <CollectionCarousel/>
    </section>
  );
};

export default Collection;
