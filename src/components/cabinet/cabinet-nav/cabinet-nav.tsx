'use client';

import Link from 'next/link';
import PersonalData from './../../../../public/icons/cabinet-personal-data.svg';
import OrderHistory from './../../../../public/icons/cabinet-order-history.svg';
import Favorites from './../../../../public/icons/cabinet-favorites.svg';
import Shipment from './../../../../public/icons/cabinet-data-for-shipment.svg';
import Payment from './../../../../public/icons/cabinet-payment.svg';
import { usePathname } from 'next/navigation';

type Props = {};

const navUrl = [
  {
    url: '/cabinet/user',
    text: 'Personal data',
    icon: <PersonalData />,
  },
  {
    url: '/cabinet/order',
    text: 'Order history',
    icon: <OrderHistory />,
  },
  {
    url: '/cabinet/favorit',
    text: 'favorites',
    icon: <Favorites />,
  },
  {
    url: '/cabinet/shipment',
    text: 'Data for shippment',
    icon: <Shipment />,
  },
  {
    url: '/cabinet/payment',
    text: 'payment',
    icon: <Payment />,
  },
];

const CabinetNav = (props: Props) => {
  const currentPath = usePathname();
  return (
    <>
      <ul className="flex justify-around bg-[#F5F5F5] rounded xl:items-start ">
        {navUrl.map((page, index) => {
          return (
            <li key={index} className="grow flex">
              <Link
                href={page.url}
                className={`inline-block text-center  rounded-t uppercase py-3 grow font-bold md:text-[13px]  xl:text-lg   ${currentPath === page.url ? 'text-black bg-white border-[#B1B1B1] border-l-[1px] border-r-[1px] border-b-transparent' : 'text-[#B1B1B1] bg-[#F5F5F5] border-[#B1B1B1] border-b-[1px]'}  ${currentPath === '/cabinet/user' && 'border-l-transparent'} ${currentPath === '/cabinet/payment' && 'border-r-transparent'}`}
              >
                <span className="hidden md:inline-block">{page.text}</span>
                <div className="flex justify-center md:hidden">
                  {' '}
                  {page.icon}
                </div>

                {/* <div className="md:hidden">
                  <Icon component={page.icon} className="h-full  " />
                </div> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CabinetNav;

// const iconArray = [
//   <PersonalData key="personalData" />,
//   <OrderHistory key="orderHistory" />,
//   <Favorites key="favorites" />,
//   <Shipment key="shipment" />,
//   <Payment key="payment" />,
// ];

//  {iconArray.map((e, i) => {
//   return <p key={i}>{e}</p>;
// })}
