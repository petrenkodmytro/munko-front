'use client';

import Image from 'next/image';
import Link from 'next/link';
import page404 from '../../public/image/404.png';
import { useRouter } from 'next/navigation';

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center py-10 md:py-32">
      <div className="w-[300px] md:w-[500px] mb-7">
        <Image src={page404} alt="page 404" width={500} />
      </div>

      <h2 className="text-sm md:text-[28px] font-bold mb-2">
        The page not found
      </h2>
      <p className="text-xs md:text-2xl font-semibold">
        Please don’t give up! Go back and try again
      </p>
      <div className="mt-[50px] md:mt-[120px]">
        <Link
          href="/"
          className="px-8 py-3 mr-6 rounded text-base md:text-xl font-semibold text-white bg-[#31304D] lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear"
        >
          GO HOME
        </Link>
        <button
          onClick={() => router.back()}
          type="button"
          className="box-border px-8 py-[11px] rounded text-base md:text-xl font-semibold border-2 border-current text-[#31304D] bg-white  lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default NotFound;
