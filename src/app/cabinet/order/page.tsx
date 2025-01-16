'use client';

import Spinner from '@/components/loading/loading';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import NotLogin from '@/components/pop-ups/not-login';
import ModalWnd from '@/components/modal/modal-window';
import { IOrder } from '@/types/types';
import { GetUserOrders } from '@/api/api';
import OrderItem from '@/components/cabinet/order/orderItem';
import OrderDetails from './../../../../public/icons/order-details.svg';
import OrderIdCopy from './../../../../public/icons/order-id-copy.svg';
import {notifyCopiedOrderId} from './../../../components/notification-modal/toast-notify'

type Props = {};

const Order = (props: Props) => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [notify, setNotify] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (session === null) {
      setNotify(true);
      return;
    }

    async function fetchOrders() {
      try {
        const orders = await GetUserOrders(session?.token);
        setOrders(orders);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchOrders();
  }, [session]);

  // const addCardToCart = async (funkoId: number, token: string | undefined) => {
  //   if (session === null) {
  //     setNotify(true);
  //     return;
  //   } else {
  //     try {
  //       await addCardToCartCtx(funkoId, token);
  //       notifyAddedToCart();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  const handleCopy = async (orderId: number) => {
    try {
      const textToCopy = String(orderId);
      await navigator.clipboard.writeText(textToCopy);
      notifyCopiedOrderId()

    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const handleModalOpen = () => {
    setModalState(!modalState);
  };

  return (
    <section className="px-3 pt-6 pb-10 md:px-3 md:pb-[74px] xl:px-[44px] xl:pt-9">
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : orders.length ? (
        <div className="xl:flex gap-28">
          <div className="xl:grow">
            <ul className="">
              {orders.map(order => (
                <li
                  key={order.id}
                  className="flex gap-[30px] justify-between flex-col md:gap-10"
                >
                  <div className="flex justify-between items-center pb-2.5 border-b border-[#B1B1B1]">
                    <p className="text-base font-bold capitalize xl:text-xl">
                      {order.status}
                    </p>
                    <div className="flex justify-between flex-col items-end text-xs font-medium">
                      <div className="flex">
                        <p className="text-sm font-bold pr-1">Order details</p>
                        <div className="mr-0 mt-1">
                          <OrderDetails />
                        </div>
                      </div>
                      {/* <p>Order date: {order.id}</p> */}
                      <p>Order date: Feb 24, 2024</p>
                      <div className='flex'>
                        <p className='mr-1.5'>{order.id}</p>
                        <button onClick={()=> handleCopy(order.id)}>
                        <OrderIdCopy />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <OrderItem order={order.orderItems} />
                    <p className="text-sm font-bold mr-[60px] xl:mr-[88px]">
                      Total: 62,64$
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-xs font-medium md:text-lg text-center">
          You don’t have any orders yet.
        </p>
      )}
      <NotLogin
        notifyCart={notify}
        setNotifyCart={setNotify}
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

export default Order;
