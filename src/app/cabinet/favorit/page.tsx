'use client';

import Image from 'next/image';
import Link from 'next/link';
import ImgPlaceholder from './../../../public/image/placeholder-png-image.jpg';
import CartImage from './../../../public/image/free-icon-shopping-cart.png';
import IconCloseCart from './../../../public/icons/icon-x-cart.svg';
import { ICartCard } from '@/types/types';
import Spinner from '@/components/loading/loading';
import { useState } from 'react';

type Props = {};
const arr:ICartCard[] = []

const Favorit = (props: Props) => {
  const [cart, setCart] = useState<ICartCard[]>(arr);
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
                    {card.funkoPop.images.length === 0 ? (
                      <Image src={ImgPlaceholder} alt="card-picture" />
                    ) : (
                      <Image
                        src={
                          card.funkoPop.images[0].slice(0, 25) +
                          'uc?id=' +
                          card.funkoPop.images[0].slice(32, 65)
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
                        {card.funkoPop.name}
                      </p>

                      <div className="flex justify-between md:flex-row-reverse md:gap-6 md:justify-start md:items-center md:ml-auto">
                        <p className="text-xs font-semibold md:text-base">
                          {card.funkoPop.sale
                            ? (card.funkoPop.price).toFixed(2)
                            : card.funkoPop.price}
                          $
                        </p>
                      </div>
                    </div>

                    {card.funkoPop.amount > 0 ? (
                      <p className="text-xs font-bold text-[#34A853]">
                        In stock{' '}
                        <span className="text-[#B1B1B1] text-[10px]">
                          ({card.funkoPop.amount})
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
            <Image
              src={CartImage}
              alt="empty cart"
              width={342}
              height={342}
            />
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
