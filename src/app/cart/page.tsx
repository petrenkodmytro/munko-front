'use client';

import Image from 'next/image';
import Link from 'next/link';
import ImgPlaceholder from './../../../public/image/placeholder-png-image.jpg';
import CartImage from './../../../public/image/free-icon-shopping-cart.png';
import IconBack from './../../../public/icons/icon-back-cart-chevron-left.svg';
import IconCloseCart from './../../../public/icons/icon-x-cart.svg';
import CheckOrder from './../../../public/icons/check-cart.svg';
import { useEffect, useState } from 'react';
import { ICartCard } from '@/types/types';
import { useSession } from 'next-auth/react';
import Notification from '@/components/notification-modal/notification';

const allOrders = [
  {
    id: 9,
    name: 'Deluxe Albus Dumbledore and Magic Albus Dumbledore',
    images: [
      'https://drive.google.com/file/d/1yDwPmF30DZYaKOoDrkz9o4GhIeOJ0Ows/view',
      'https://drive.google.com/file/d/1LDdW-IBK3bLTYBu4oES7CYg60Dd1AdKu/view',
      'https://drive.google.com/file/d/1LDdW-IBK3bLTYBu4oES7CYg60Dd1AdKu/view',
    ],
    price: 22,
    amount: 34,
    description: "Pop! Deluxe Albus Dumbledore with Hog's Head Inn",
    sale: false,
    collection: 'Harry Potter',
    sublicense: null,
    series: "Harry Potter and the Philosopher's Stone ",
    category: 'Movies',
    productType: 'Pop!',
    date: '14.04.24',
  },
  {
    id: 20,
    name: 'Harley Quinn',
    images: [
      'https://drive.google.com/file/d/1x6BVSZWwC485D3I0bI_9ib5RIEQsilJS/view',
      'https://drive.google.com/file/d/1Ot4cWKkghuOON1hDqr5mp-WAoGRTTl5W/view',
    ],
    price: 28,
    amount: 52,
    description: 'Pop! Harley Quinn with Bat',
    sale: true,
    collection: 'Marvel',
    sublicense: null,
    series: 'Suicide Squad',
    category: 'Comics',
    productType: 'Pop!',
    date: '01.01.24',
  },
  {
    id: 30,
    name: 'Remus Lupin',
    images: [
      'https://drive.google.com/file/d/11bZN2iwJXmqWtnIHflVuiHKN9inBQae8/view',
      'https://drive.google.com/file/d/1-khIfuzZMMFfwi9174d0TC6PDEYlciwt/view',
    ],
    price: 21,
    amount: 35,
    description: 'Pop! Remus Lupin with Map',
    sale: false,
    collection: 'Harry Potter',
    sublicense: null,
    series: 'Harry Potter and the Prisoner of Azkaban',
    category: 'Movies',
    productType: 'Pop!',
    date: '02.02.24',
  },
  {
    id: 41,
    name: 'Homer Simpson',
    images: [],
    price: 23,
    amount: 0,
    description: 'Homer Pop!',
    sale: false,
    collection: 'The Simpsons',
    sublicense: null,
    series: 'Spiderman',
    category: 'Anime',
    productType: 'Pop!',
    date: '02.03.24',
  },
  {
    id: 45,
    name: 'Yang',
    images: [],
    price: 21,
    amount: 12,
    description: 'Yang Pop!',
    sale: false,
    collection: 'Avatar',
    sublicense: null,
    series: 'Maleficent',
    category: 'Anime',
    productType: 'Pop!',
    date: '02.03.24',
  },
];
type Props = {};

const Cart = (props: Props) => {
  const { data: session } = useSession();
  // const user={...session}
  // console.log(session?.user?.firstName);

  const modifyOrders = allOrders.map(order => {
    return { ...order, count: 1 };
  });
  // console.log(modifyOrders)
  const delivery = 1;
  const [cart, setCart] = useState<ICartCard[]>([]);
  const [orders, setOrders] = useState<ICartCard[]>([]);
  const [notifyCart, setNotifyCart] = useState(false);
useEffect(() => {
  if (session === null) {
    setNotifyCart(true);
  }
  }
, [session])

 

  const toggleSelectedOrder = (newOrder: ICartCard) => {
    // console.log(newOrder);
    let currentOrders = [...orders];
    if (!orders.map(order => order.id).includes(newOrder.id)) {
      currentOrders = [...currentOrders, newOrder];
    } else {
      currentOrders = currentOrders.filter(order => order.id !== newOrder.id);
    }
    setOrders(currentOrders);
  };
  // console.log(orders);

  const removeItem = (card: ICartCard) => {
    let currentCart = [...cart];
    currentCart = currentCart.filter(cartItem => cartItem.id !== card.id);
    setCart(currentCart);
    let currentOrders = [...orders];
    currentOrders = currentOrders.filter(order => order.id !== card.id);
    setOrders(currentOrders);
  };

  const handleIncreaceCount = (card: ICartCard) => {
    if (card.count === card.amount) {
      return;
    } else {
      setCart(
        cart.map(item => {
          if (item.id === card.id) {
            item.count++;
          }
          return item;
        })
      );
    }
  };

  const handleDecreaceCount = (card: ICartCard) => {
    if (card.count < 2) {
      return;
    } else {
      setCart(
        cart.map(item => {
          if (item.id === card.id) {
            item.count--;
          }
          return item;
        })
      );
    }
  };

  return (
    <section className="px-4 pt-6 pb-10 md:px-5  md:pb-[74px] xl:px-20 xl:pt-9">
      <div className="mb-6 text-xs font-medium md:mb-10 md:text-base">
        <Link className="underline" href={'/'}>
          Home page
        </Link>
        /
      </div>
      <h3 className="mb-4 uppercase text-2xl font-bold md:text-4xl md:mb-8">
        Your cart
      </h3>
      {cart.length ? (
        <div className="xl:flex gap-28">
          {/* your cart */}
          <div className="xl:grow">
            <ul className="flex flex-col gap-4">
              {cart.map(card => (
                <li key={card.id} className="flex gap-6">
                  <button
                    onClick={() => removeItem(card)}
                    type="button"
                    className="hidden md:block"
                  >
                    <IconCloseCart />
                  </button>
                  <div className="relative self-center flex items-center">
                    <input
                      type="checkbox"
                      // checked={orders.includes(card.id)}
                      onChange={() => toggleSelectedOrder(card)}
                      name={card.name}
                      id={card.name}
                      // hidden={card.amount === 0}
                      disabled={card.amount === 0}
                      className="  appearance-none peer shrink-0  w-[24px] h-[24px] rounded-full shadow-[0px_0px_4px_0px_rgb(0,0,0,0.25)]"
                    />
                    <CheckOrder className="  absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                  </div>

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
                          {card.price}$
                        </p>
                        {card.amount > 0 && (
                          <div className="flex items-center gap-[10px] mb-[6px] md:mb-0">
                            <button
                              onClick={() => handleDecreaceCount(card)}
                              type="button"
                              className="flex justify-center items-center w-5 h-5 rounded-full bg-[#F5F5F5] text-[17px] font-bold"
                            >
                              -
                            </button>
                            <p className="text-xs font-bold">{card.count}</p>
                            <button
                              onClick={() => handleIncreaceCount(card)}
                              type="button"
                              className="flex justify-center items-center w-5 h-5 rounded-full bg-[#F5F5F5] text-[17px] font-bold"
                            >
                              +
                            </button>
                          </div>
                        )}
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

            <div className="mt-7 max-w-[586px] md:ml-12 xl:ml-[90px]">
              <p className="text-xs font-semibold">
                Have a coupon? Enter your code.
              </p>
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="text-sm border-black border-b-[1px] focus:outline-none grow"
                />
                <button
                  type="button"
                  className="px-10 py-2  uppercase text-sm font-bold border-2 border-[#31304D] rounded   border-current text-[#31304D] bg-white not-italic  lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* cart totals */}
          <div className="mt-10 xl:mt-0 xl:border-l-[1px] xl:border-black xl:pl-10 xl:pr-5 xl:w-[436px]">
            <h4 className="uppercase text-2xl font-semibold md:text-3xl">
              Cart totals
            </h4>
            <div className="w-full h-[1px] bg-black my-5"></div>
            <ul className="flex flex-col gap-4">
              {orders.map(card => (
                <li key={card.id} className="flex justify-between">
                  <p className="text-xs font-bold md:text-sm">{card.name}</p>
                  {card.count > 1 && (
                    <p className="ml-auto text-xs font-semibold md:text-sm">
                      {card.count}
                      <span className="px-2">x</span>
                    </p>
                  )}
                  <p className="text-xs font-semibold md:text-sm">
                    {card.price}$
                  </p>
                </li>
              ))}
            </ul>
            {orders.length > 0 ? (
              <p className="flex justify-between mt-4 text-xs font-bold md:text-sm">
                Delivery<span>{delivery}$</span>
              </p>
            ) : (
              <p className="flex justify-between  text-xs font-bold md:text-sm">
                Please checked your orders
              </p>
            )}
            <div className="w-full h-[1px] bg-black my-5"></div>
            {orders.length > 0 && (
              <p className="flex justify-between text-lg font-bold md:text-xl">
                Total
                <span>
                  {[...orders].reduce((total, order) => {
                    return total + order.price * order.count;
                  }, delivery)}
                  $
                </span>
              </p>
            )}
            <div className="mt-9 flex items-center justify-between md:flex-row-reverse xl:flex-col xl:mt-14 xl:gap-6">
              <button
                onClick={() => alert(JSON.stringify(orders))}
                disabled={orders.length === 0}
                type="button"
                className="w-[170px] md:w-[331px] xl:w-full px-5 py-2 md:py-2.5 text-xs md:text-base font-bold uppercase rounded-[5px] border-2 border-current text-white bg-[#31304D] lg:enabled:hover:text-[#31304D] lg:enabled:hover:bg-white duration-200 ease-linear disabled:bg-[#B1B1B1]"
              >
                PROCEED TO CHACKOUT
              </button>
              <Link
                className="flex items-center uppercase text-xs font-bold md:text-base"
                href={'/catalog'}
              >
                <IconBack />
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <div className="w-[150px] md:w-[342px]">
            <Image
              src={CartImage}
              alt="empty cart"
              width={342}
              height={342}
              // sizes="100vw"
              // style={{
              //   width: '100%',
              //   height: 'auto',
              // }}
            />
          </div>
          <p className='text-sm font-medium md:text-lg'>
            Your cart is empty. Let’s go to{' '}
            <Link href={`/catalog`} className="p-1  font-semibold">
              Catalog
            </Link>
          </p>
        </div>
      )}
      <Notification notify={notifyCart} setNotify={setNotifyCart}>
        <p className="pt-5 text-sm md:text-base font-semibold">
          You are not logged in. If you want to buy the product, you must log in
        </p>
      </Notification>
    </section>
  );
};

export default Cart;
