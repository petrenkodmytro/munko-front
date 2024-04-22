'use client';

import FaqList from '../sections/faq-list';

type Props = {};

export default function FaqPage(props: Props) {
  return (
    <section className="flex flex-col px-4 mt-[25px] mb-[103px] text-xl text-blackCustom font-semibold md:px-5 md:mb-[48px] md:text-2xl lg:mt-[35px]">
      <h3 className="text-center text-2xl mb-[16px] md:text-[40px] lg:text-[30px] lg:mb-[56px]">FAQ</h3>
      <FaqList index={12} />
    </section>
  );
}
