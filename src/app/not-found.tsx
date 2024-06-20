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
      <div className="w-[330px] md:w-[500px] mb-7">
        <Image src={page404} alt="page 404" width={500} />
      </div>

      <h2 className="text-lg md:text-2xl xl:text-[28px] font-bold mb-2">
        The page not found
      </h2>
      <p className="text-sm md:text-xl xl:text-2xl font-semibold">
        Please don’t give up! Go back and try again
      </p>
      <div className="mt-[50px] md:mt-[120px]">
        <Link
          href="/"
          className="inline-block mr-4 md:mr-6 uppercase px-11 py-3 rounded-[5px] border-2 border-current text-white bg-[#31304D] text-base xl:text-xl font-semibold  lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear md:px-[60px]"
        >
          GO HOME
        </Link>
        <button
          onClick={() => router.back()}
          type="button"
          className="uppercase px-11 py-3 rounded-[5px] border-2 border-current text-[#31304D] bg-white text-base xl:text-xl font-semibold  lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear md:px-[60px]"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default NotFound;
