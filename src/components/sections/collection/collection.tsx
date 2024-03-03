'use client';

import Link from 'next/link';
import Image from 'next/image';
import imgMain from '../../../../public/image/collection-main.png';
import CollectionCarousel from './collection-carousel';

type Props = {};

const Collection = (props: Props) => {
  return (
    <section>
      <div className="flex px-4 pt-2 pb-6 bg-[#D63F3F] md:py-1 md:pl-20 md:pr-10 md:justify-between lg:py-4 lg:items-center xl:pr-[284px]">
        <div>
          <p className="uppercase w-[230px]  text-2xl not-italic font-extrabold mt-[98px] mb-4 md:w-full md:mt-[117px] md:text-3xl md:font-semibold md:mb-[42px] lg:text-[40px] lg:mt-0">
            marvel loki president
          </p>
          <Link
            className="inline-block uppercase  px-8 py-[11px] rounded-[5px] bg-white text-base not-italic font-bold md:text-xl lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear"
            href={'/'}
          >
            shop collection
          </Link>
        </div>
        <div className="w-[130px] md:w-[195px] lg:w-[252px]">
          <Image
            src={imgMain}
            alt="main collection"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <CollectionCarousel />
    </section>
  );
};

export default Collection;
