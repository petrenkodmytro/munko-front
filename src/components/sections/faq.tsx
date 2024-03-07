'use client';

import Link from 'next/link';
import FaqList from './faq-list';

type Props = {};

export default function FAQ(props: Props) {
  return (
    <section className="flex flex-col px-4 mt-8 text-xl text-blackCustom font-semibold md:px-5 md:text-2xl">
      <h3 className="hidden text-center text-[40px] mt-[46px] mb-[56px] md:block">
        FAQ
      </h3>
      <FaqList index={3}/>
      <button className="mx-auto mt-2.5 mb-[40px] h-[46px] rounded px-8 text-xl bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 duration-200 ease-linear md:mt-[29px] md:mb-[72px]">
        <Link href={'/faq'}>MORE QUESTIONS</Link>
      </button>
    </section>
  );
}
