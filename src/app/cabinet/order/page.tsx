'use client';

import Spinner from '@/components/loading/loading';
import { useSession } from 'next-auth/react';
import React, { useContext, useEffect, useState } from 'react';
import ImgPlaceholder from './../../../../public/image/placeholder-png-image.jpg';
import { Context } from '@/context/context';
import { notifyAddedToCart } from '@/components/notification-modal/toast-notify';
import NotLogin from '@/components/pop-ups/not-login';
import ModalWnd from '@/components/modal/modal-window';
import Image from 'next/image';
import { ICard, IDataOrders, IOrder } from '@/types/types';
import Link from 'next/link';
import { GetUserOrders } from '@/api/api';
import OrderItem from '@/components/cabinet/order/orderItem';

type Props = {};

const Order = (props: Props) => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [notify, setNotify] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addCardToCartCtx } = useContext(Context);

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
                <li key={order.id} className="border-2 border-green-600">
                  <p>ID:{order.id}</p>
                  <p>Status{order.status}</p>
                  <OrderItem order={order.orderItems} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-xs font-medium md:text-lg">
          Your have not orders yet
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
