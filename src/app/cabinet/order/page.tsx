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
import { ICard } from '@/types/types';

type Props = {};

const Order = (props: Props) => {
  const { data: session } = useSession();
  const [favorite, setFavorite] = useState<ICard[]>([]);
  const [notify, setNotify] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addCardToCartCtx } = useContext(Context);

  useEffect(() => {
    if (session === null) {
      setNotify(true);
      return;
    }

    async function fetchFavorite() {
      try {
        // const allFavorite: ICard[] = await GetUserFavorite(session?.token);
        // setFavorite(allFavorite);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchFavorite();
  }, [session]);

  const addCardToCart = async (funkoId: number, token: string | undefined) => {
    if (session === null) {
      setNotify(true);
      return;
    } else {
      try {
        await addCardToCartCtx(funkoId, token);
        notifyAddedToCart();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleModalOpen = () => {
    setModalState(!modalState);
  };

  return (
    <section className="px-4 pt-6 pb-10 md:px-5 md:pb-[74px] xl:px-20 xl:pt-9">
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : favorite.length ? (
        <div className="xl:flex gap-28">
          <div className="xl:grow">
            <ul className="flex flex-col gap-4">
              {favorite.map(card => (
                <li key={card.id} className="relative flex">
                  <div className="w-[86px] h-[80px] mr-6 flex justify-center items-center bg-[#F5F5F5] rounded flex-shrink-0 md:w-[98px] md:h-[91px]">
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
                  <div className="">
                    <p className="text-xs font-bold md:text-base xl:w-[400px]">
                      {card.name}
                    </p>
                  </div>
                  <button
                    onClick={() => addCardToCart(card.id, session?.token)}
                    className={`absolute flex right-0 bottom-0 text-xs underline md:no-underline md:rounded md:uppercase md:px-10 md:py-2 font-bold  md:text-white ${card.amount ? 'md:bg-subscribeBtn lg:hover:bg-white lg:hover:text-subscribeBtn lg:hover:border-subscribeBtn lg:hover:border-2 duration-200 ease-linear' : 'md:bg-grayBG'}`}
                    disabled={!card.amount}
                  >
                    Move to cart
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-xs font-medium md:text-lg">
            Your have not orders yet
          </p>
        </div>
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
