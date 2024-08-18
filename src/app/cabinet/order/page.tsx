'use client';

import Spinner from '@/components/loading/loading';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import NotLogin from '@/components/pop-ups/not-login';
import ModalWnd from '@/components/modal/modal-window';
import { IOrder } from '@/types/types';
import { GetUserOrders } from '@/api/api';
import OrderItem from '@/components/cabinet/order/orderItem';

type Props = {};

const Order = (props: Props) => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [notify, setNotify] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleModalOpen = () => {
    setModalState(!modalState);
  };

  return (
    <section className="px-4 pt-6 pb-10 md:px-5 md:pb-[74px] xl:px-20 xl:pt-9">
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : orders.length ? (
        <div className="xl:flex gap-28">
          <div className="xl:grow">
            <ul className="">
              {orders.map(order => (
                <li key={order.id} className="p-4 border-2 border-green-600">
                  <div className="flex justify-between">
                    <p>Status: {order.status}</p>
                    <p>Order ID: {order.id}</p>
                  </div>
                  <div className="h-[1px] my-4 bg-gray-600"></div>
                  <OrderItem order={order.orderItems} />
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
