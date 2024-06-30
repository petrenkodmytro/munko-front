'use client';

import Link from 'next/link';
import PersonalData from './../../../public/icons/cabinet-personal-data.svg';
import OrderHistory from './../../../public/icons/cabinet-order-history.svg';
import Favorites from './../../../public/icons/cabinet-favorites.svg';
import Shipment from './../../../public/icons/cabinet-data-for-shipment.svg';
import Payment from './../../../public/icons/cabinet-payment.svg';
import { Icon, SvgIcon } from '@mui/material';
import { usePathname } from 'next/navigation';

type Props = {};

const navUrl = [
  {
    url: '/cabinet/user',
    text: 'Personal data',
    icon: PersonalData,
  },
  {
    url: '/cabinet/order',
    text: 'Order history',
    icon: OrderHistory,
  },
  {
    url: '/cabinet/favorit',
    text: 'favorites',
    icon: Favorites,
  },
  {
    url: '/cabinet/shipment',
    text: 'Data for shippment',
    icon: Shipment,
  },
  {
    url: '/cabinet/payment',
    text: 'payment',
    icon: Payment,
  },
];

const CabinetNav = (props: Props) => {
  const currentPath = usePathname();
  return (
    <>
      <ul className="flex justify-around bg-[#F5F5F5]">
        {navUrl.map((page, index) => {
          return (
            <li key={index} className="">
              <Link
                //   onClick={handleMenu}
                href={page.url}
                className={`inline-block uppercase py-3 font-bold md:text-[13px] xl:text-lg ${currentPath === page.url ? 'text-black bg-white' : 'text-[#B1B1B1] bg-[#F5F5F5]'}`}
              >
                <span className="hidden md:block">{page.text}</span>
                <div className=" md:hidden">
                  <Icon component={page.icon} className="w-full h-full" />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CabinetNav;