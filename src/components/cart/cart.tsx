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
import { getUserCart, removeFromCart } from '@/api/api';
import Spinner from '../loading/loading';
import NotLogin from '../pop-ups/not-login';
import ModalWnd from '../modal/modal-window';

import { useContext } from 'react';
import { Context } from '@/context/context';
import { delivery, discount } from '@/constant/constant';
import { notifyRemoveFromCart } from '../notification-modal/toast-notify';

type Props = {};

const CartPage = (props: Props) => {
  const { data: session } = useSession();
  // console.log(session?.user);

  const { removeItemFromCartCtx: removeItemCtx } = useContext(Context);

  const [cart, setCart] = useState<ICartCard[]>([]);
  const [orders, setOrders] = useState<ICartCard[]>([]);
  const [notifyCart, setNotifyCart] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (session === null) {
      setNotifyCart(true);
      return;
    }

    async function fetchOrders() {
      try {
        const allOrders: ICartCard[] = await getUserCart(session?.token);
        console.log(allOrders);
        setCart(allOrders);
        setOrders(allOrders);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchOrders();
  }, [session]);

  const toggleSelectedOrder = (newOrder: ICartCard) => {
    let currentOrders = [...orders];
    if (!orders.map(order => order.id).includes(newOrder.id)) {
      currentOrders = [...currentOrders, newOrder];
    } else {
      currentOrders = currentOrders.filter(order => order.id !== newOrder.id);
    }
    setOrders(currentOrders);
  };

  const removeItem = async (card: ICartCard) => {
    try {
      await removeItemCtx(card);
      let currentCart = [...cart];
      currentCart = currentCart.filter(cartItem => cartItem.id !== card.id);
      setCart(currentCart);
      let currentOrders = [...orders];
      currentOrders = currentOrders.filter(order => order.id !== card.id);
      setOrders(currentOrders);
      notifyRemoveFromCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncreaceCount = (card: ICartCard) => {
    if (card.amount === card.funkoPop.amount) {
      return;
    } else {
      setCart(
        cart.map(item => {
          if (item.id === card.id) {
            item.amount++;
          }
          return item;
        })
      );
    }
  };

  const handleDecreaceCount = (card: ICartCard) => {
    if (card.amount < 2) {
      return;
    } else {
      setCart(
        cart.map(item => {
          if (item.id === card.id) {
            item.amount--;
          }
          return item;
        })
      );
    }
  };

  const handleModalOpen = () => {
    setModalState(!modalState);
  };

  return (
    <section className="px-4 pt-6 pb-10 md:px-5 md:pb-[74px] xl:px-20 xl:pt-9">
      {/* <div className="mb-6 text-xs font-medium md:mb-10 md:text-base">
        <Link className="underline" href={'/'}>
          Home page
        </Link>
        /
      </div> */}
      <h3 className="mb-4 uppercase text-2xl font-bold md:text-4xl md:mb-8">
        Your cart
      </h3>
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
                    onClick={() => removeItem(card)}
                    type="button"
                    className="hidden md:block"
                  >
                    <IconCloseCart />
                  </button>
                  <div className="relative self-center flex items-center">
                    <input
                      type="checkbox"
                      key={card.id}
                      checked={orders.map(i => i.id).includes(card.id)}
                      onChange={() => toggleSelectedOrder(card)}
                      name={card.funkoPop.name}
                      id={card.funkoPop.name}
                      // hidden={card.amount === 0}
                      disabled={card.amount === 0}
                      className="  appearance-none peer shrink-0  w-[24px] h-[24px] rounded-full shadow-[0px_0px_4px_0px_rgb(0,0,0,0.25)]"
                    />
                    <CheckOrder className="  absolute left-[5px] hidden peer-checked:block pointer-events-none" />
                  </div>

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
                            ? (card.funkoPop.price * discount).toFixed(2)
                            : card.funkoPop.price}
                          $
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
                            <p className="text-xs font-bold">{card.amount}</p>
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
                  <p className="text-xs font-bold md:text-sm">
                    {card.funkoPop.name}
                  </p>
                  {card.amount > 1 && (
                    <p className="ml-auto text-xs font-semibold md:text-sm">
                      {card.amount}
                      <span className="px-2">x</span>
                    </p>
                  )}
                  <p className="text-xs font-semibold md:text-sm">
                    {card.funkoPop.sale
                      ? (card.funkoPop.price * discount).toFixed(2)
                      : card.funkoPop.price}
                    $
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
                    return total + order.funkoPop.price * order.amount;
                  }, delivery)}
                  $
                </span>
              </p>
            )}
            <div className="mt-9 flex items-center justify-between md:flex-row-reverse xl:flex-col xl:mt-14 xl:gap-6">
              <button
                onClick={() => {
                  let res = orders.map(order => order.funkoPop.name);
                  console.log(res);
                  alert(JSON.stringify(res));
                }}
                disabled={orders.length === 0}
                type="button"
                className="w-[170px] md:w-[331px] xl:w-full px-5 py-2 md:py-2.5 text-xs md:text-base font-bold uppercase rounded-[5px] border-2 border-current text-white bg-[#31304D] lg:enabled:hover:text-[#31304D] lg:enabled:hover:bg-white duration-200 ease-linear disabled:bg-[#B1B1B1]"
              >
                Proceed to checkout
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
        <div className="flex flex-col items-center">
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
          <p className="text-sm font-medium md:text-lg">
            Your cart is empty. Let’s go to{' '}
            <Link href={`/catalog`} className="p-1  font-semibold">
              Catalog
            </Link>
          </p>
        </div>
      )}

      <NotLogin
        notifyCart={notifyCart}
        setNotifyCart={setNotifyCart}
        handleOpenPopUp={handleModalOpen}
      />
      <ModalWnd
        call={modalState}
        onDestroy={() => setModalState(false)}
        handleForgetOpen={() => setModalState(false)}
      />
    </section>
  );
};

export default CartPage;
