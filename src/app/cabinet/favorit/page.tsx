'use client';

import Image from 'next/image';
import Link from 'next/link';
import ImgPlaceholder from './../../../public/image/placeholder-png-image.jpg';
import CartImage from './../../../public/image/free-icon-shopping-cart.png';
import IconCloseCart from './../../../public/icons/icon-x-cart.svg';
import { ICard, ICartCard } from '@/types/types';
import Spinner from '@/components/loading/loading';
import { useState } from 'react';

type Props = {};
const arr: ICard[] = [
  {
    id: 1,
    name: 'Funko Nick Wilde POP Disney: Zootopia Figure',
    images: [
      'https://drive.google.com/file/d/1gnFqQteDy37bszavDakT2PJMbztrNDNi/view',
      'https://drive.google.com/file/d/1lElenCmzLFin9VUP8Skdews_Ab26N4Ba/view',
      'https://drive.google.com/file/d/18qF2BsOQJq-J2_J_HiNpZJ81VtLShQ7e/view',
      'https://drive.google.com/file/d/1dHEZM384VymazSQl0JHsrwJT3JKIfNZO/view',
      'https://drive.google.com/file/d/1WyKI_QCKXzHWM2YCv7pw7xz7QhefSLxF/view',
    ],
    price: 29,
    amount: 3,
    description:
      'The Funko Nick Wilde POP Disney: Zootopia Figure is a 3.75-inch vinyl collectible that perfectly captures the witty charm of Nick Wilde from the beloved animated film. With vibrant colors and intricate detailing, this figure is a must-have for fans of Zootopia and Funko POP collectors alike. Display it proudly on shelves or desks to showcase your love for this iconic character and the world of Zootopia.',
    sale: true,
    collection: 'Disney',
    sublicense: 'Zootropia',
    series: 'Nick Wilde',
    category: 'Cartoons',
    productType: 'Pop!',
    date: '12.12.12',
  },
  {
    id: 2,
    name: 'Harry Potter Pack Series 1',
    images: [
      'https://drive.google.com/file/d/1xWm8S1V94GaVLgRURwsLw543tCHoi1_f/view',
      'https://drive.google.com/file/d/1w2OHS6yPcrfe4kewRD2YRe2RSVkq_mFH/view',
      'https://drive.google.com/file/d/13dVrGCw3E25oZmvaUty6HNvQadZDZPDd/view',
      'https://drive.google.com/file/d/1MBxXPvtm8ntgQD08UZeWng6kab7OQOaK/view',
    ],
    price: 45,
    amount: 23,
    description: 'Bitty Pop! Harry Potter 4-Pack Series 1',
    sale: false,
    collection: 'Harry Potter',
    sublicense: null,
    series: "Harry Potter and the Philosopher's Stone ",
    category: 'Movies',
    productType: 'Pop!',
    date: '14.04.24',
  },
  {
    id: 3,
    name: 'Harry Potter Pack Series 2',
    images: [
      'https://drive.google.com/file/d/1EK-CWpT-D31Id7lRqXe4K1JhMXXG7J5M/view',
      'https://drive.google.com/file/d/14lt-LeVwxl10T5AYTpfEqDgkWKfEIpCF/view',
      'https://drive.google.com/file/d/1xDP1p7ZuUTYWhdzIObYHTjx7CYgQuFIH/view',
    ],
    price: 45,
    amount: 12,
    description: 'Bitty Pop! Harry Potter 4-Pack Series 2',
    sale: true,
    collection: 'Harry Potter',
    sublicense: null,
    series: "Harry Potter and the Philosopher's Stone ",
    category: 'Movies',
    productType: 'Pop!',
    date: '14.04.24',
  },
  {
    id: 4,
    name: 'Harry Potter Pack Series 3',
    images: [
      'https://drive.google.com/file/d/12ywM6l5m34s2UILEXR7wcEmVxrcsR7_n/view',
      'https://drive.google.com/file/d/1bUQwgAUohGrxnKCXhZr1fUOpWnIhCNXp/view',
      'https://drive.google.com/file/d/1iDbrTvcyW4vHUHlA-ynAvpQJqqgL4nKE/view',
      'https://drive.google.com/file/d/1MEBNWa8mhpR6HpNwgr47GNE9d4zmYKzk/view',
      'https://drive.google.com/file/d/1w4d79751PTySYVSyJ-VB81b7kVA3Vr7S/view',
    ],
    price: 45,
    amount: 21,
    description: 'Bitty Pop! Harry Potter 4-Pack Series 3',
    sale: false,
    collection: 'Harry Potter',
    sublicense: null,
    series: "Harry Potter and the Philosopher's Stone ",
    category: 'Movies',
    productType: 'Pop!',
    date: '14.04.24',
  },
  {
    id: 5,
    name: 'Harry Potter Pack Series 4',
    images: [
      'https://drive.google.com/file/d/1RObeuZ3YPEgf65Mc_b3Io15eoFDgrH9f/view',
      'https://drive.google.com/file/d/1YgWp_YbVcdcpfrfhv35hkw3gYMeIluwN/view',
      'https://drive.google.com/file/d/1HZPfUv6DxBnDNUL9Hrq_Xk-EpdErKFd8/view',
      'https://drive.google.com/file/d/1mYfXft3hh7lgA_LKXjg_qiggzL1Yaa38/view',
      'https://drive.google.com/file/d/19g9G9jjBmdzcuDnmNu2P8SdLyvTQy67T/view',
    ],
    price: 45,
    amount: 32,
    description: 'Bitty Pop! Harry Potter 4-Pack Series 4',
    sale: true,
    collection: 'Harry Potter',
    sublicense: null,
    series: "Harry Potter and the Philosopher's Stone ",
    category: 'Movies',
    productType: 'Pop!',
    date: '14.04.24',
  },
  {
    id: 6,
    name: 'Albus Dumbledore with Wand',
    images: [
      'https://drive.google.com/file/d/1q9_fZ9ZM3__en3Qt9DH212z9Ebda5tOw/view',
      'https://drive.google.com/file/d/1iV7Twop9ZjYBdNFj5Mo8LL2LnSFCjd3F/view',
    ],
    price: 21,
    amount: 12,
    description: 'Pop! Albus Dumbledore with Wand',
    sale: false,
    collection: 'Harry Potter',
    sublicense: null,
    series: 'Harry Potter and the Chamber of Secrets ',
    category: 'Movies',
    productType: 'Pop!',
    date: '14.04.24',
  },
];

const Favorit = (props: Props) => {
  const [cart, setCart] = useState<ICard[]>(arr);
  const [orders, setOrders] = useState<ICartCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="px-4 pt-6 pb-10 md:px-5 md:pb-[74px] xl:px-20 xl:pt-9">
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : cart.length ? (
        <div className="xl:flex gap-28">
          {/* your cart */}
          <div className="xl:grow">
            <ul className="flex flex-col gap-4">
              {cart.map(card => (
                <li key={card.id} className="flex gap-6">
                  <button
                    // onClick={() => removeItem(card)}
                    type="button"
                    className="hidden md:block"
                  >
                    <IconCloseCart />
                  </button>
                  <div className="w-[86px] h-[80px] flex justify-center items-center bg-[#F5F5F5] rounded flex-shrink-0 md:w-[98px] md:h-[91px]">
                    {card.images.length === 0 ? (
                      <Image src={ImgPlaceholder} alt="card-picture" />
                    ) : (
                      <Image
                        src={
                          card.images[0].slice(0, 25) +
                          'uc?id=' +
                          card.images[0].slice(32, 65)
                        }
                        // src={icon}
                        width={150}
                        height={138}
                        alt="card-picture"
                      />
                    )}
                  </div>
                  <div className="grow">
                    <div className="md:flex md:items-center">
                      <p className="mb-[6px] text-xs font-bold md:text-base xl:w-[400px]">
                        {card.name}
                      </p>

                      <div className="flex justify-between md:flex-row-reverse md:gap-6 md:justify-start md:items-center md:ml-auto">
                        <p className="text-xs font-semibold md:text-base">
                          {card.sale ? card.price.toFixed(2) : card.price}$
                        </p>
                      </div>
                    </div>

                    {card.amount > 0 ? (
                      <p className="text-xs font-bold text-[#34A853]">
                        In stock{' '}
                        <span className="text-[#B1B1B1] text-[10px]">
                          ({card.amount})
                        </span>
                      </p>
                    ) : (
                      <p className="text-xs font-bold text-[#B1B1B1]">
                        Out of stock
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-[150px] md:w-[342px]">
            <Image src={CartImage} alt="empty cart" width={342} height={342} />
          </div>
          <p className="text-sm font-medium md:text-lg">
            Your have not favorit. Let’s go to{' '}
            <Link href={`/catalog`} className="p-1  font-semibold">
              Catalog
            </Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default Favorit;
