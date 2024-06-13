'use client';

import { ICard } from '@/types/types';
import ImgPlaceholder from './../../../public/image/placeholder-png-image.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '@/api/api';
import { useSession } from 'next-auth/react';
import ModalWnd from '../modal/modal-window';
import Notification from '../notification-modal/notification';
import { useState } from 'react';

type CardCatalog = Pick<
  ICard,
  'id' | 'name' | 'images' | 'price' | 'productType' | 'amount'
>;

type CardProps = {
  card: CardCatalog;
};

const Card = ({ card }: CardProps) => {
  const { data: session } = useSession();
  const [modalState, setModalState] = useState(false);
  const [notifyOder, setNotifyOder] = useState(false);

  const addCardToCart = async (
    funkoId: number,
    userId: number,
    token: string | undefined
  ) => {
    if (session === null) {
      setNotifyOder(true);
      return;
    } else {
      try {
        await addToCart(funkoId, userId, token);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {' '}
      <div className="w-[242px] h-[384px] flex flex-wrap md:mr-0 px-3 py-6 rounded shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)] duration-200 ease-linear hover:scale-105 flex-shrink-0">
        <Link href={`/catalog/${card.id}`}>
          <div className="w-[173px] h-[153px] flex justify-center items-center bg-[#F5F5F5] m-auto">
            {card.images.length === 0 ? (
              <Image
                src={ImgPlaceholder}
                // src={icon}
                // width={150}
                // height={138}
                alt="card-picture"
              />
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
          <div className="text-base leading-5 text-black mt-5">
            <span className="">{card.productType}</span>
            <p className="font-bold mb-5">{card.name}</p>
            <p className="font-bold">{card.price}$</p>
          </div>
        </Link>
        <button
          onClick={() =>
            addCardToCart(card.id, Number(session?.user?.id), session?.token)
          }
          className={`self-end rounded text-base h-9 font-bold w-full text-white ${card.amount ? 'bg-subscribeBtn hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 duration-200 ease-linear' : 'bg-grayBG'}`}
        >
          ADD TO CART
        </button>
      </div>
      <Notification notify={notifyOder} setNotify={setNotifyOder}>
        <div className="flex flex-col gap-7 items-center">
          {' '}
          <p className="pt-5 text-sm md:text-base font-semibold">
            You are not logged in. If you want to buy the product, you must log
            in
          </p>
          <button
            onClick={() => {
              setModalState(true);
              setNotifyOder(false);
            }}
            type="button"
            className="w-[137px] uppercase px-8 py-2 rounded-[5px] border-2 border-current text-white text-xl not-italic font-semibold  bg-[#31304D] lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear"
          >
            login
          </button>
        </div>
      </Notification>
      <ModalWnd call={modalState} onDestroy={() => setModalState(false)} />
    </>
  );
};
export default Card;
