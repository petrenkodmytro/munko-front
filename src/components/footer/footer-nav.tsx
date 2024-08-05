'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {};

const FooterNav = (props: Props) => {
  const pathname = usePathname();
  const navList = [
    {
      url: '/about',
      text: 'About us',
    },
    {
      url: '/sale',
      text: 'Sale',
    },
    {
      url: '/catalog',
      text: 'OUR store',
    },
    {
      url: '/public-offer',
      text: 'Public Offer',
    },
    {
      url: '/faq',
      text: 'FAQ',
    },
  ];
  return (
    <div className="flex flex-col place-items-center text-lg not-italic font-semibold leading-[normal] md:place-items-start md:text-base">
      <div className="bg-white mt-6 mb-4 h-[1px] w-[184px] md:hidden" />
      <p className="uppercase mb-2 text-lg md:text-base xl:text-lg not-italic font-normal leading-[normal]">
        other
      </p>

      <ul className="flex flex-col place-items-center gap-2.5 md:gap-2 xl:gap-1 md:place-items-start md:text-sm xl:text-lg ">
        {navList.map((page, index) => {
          const isActive = pathname.startsWith(page.url);
          return (
            <li key={index}>
              <Link
                href={page.url}
                className={`${isActive ? 'text-[#31304D]' : ''} duration-200 ease-linear lg:hover:text-[#C3C3C3]`}
              >
                {page.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="bg-white my-4 h-[1px] w-[184px] md:hidden" />
    </div>
  );
};

export default FooterNav;
