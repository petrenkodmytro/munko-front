'use client';

import Image from 'next/image';
import Link from 'next/link';
import ImgPlaceholder from './../../../../public/image/placeholder-png-image.jpg';
import CartImage from './../../../../public/image/free-icon-shopping-cart.png';
import FavoritIcon from './../../../../public/icons/favorite-small-icon.svg';
import ArrowFavoriteBtn from './../../../../public/icons/arrow-right-btn-favorite.svg';
import { ICard } from '@/types/types';
import Spinner from '@/components/loading/loading';
import { useContext, useEffect, useState } from 'react';
import { discount } from '@/constant/constant';
import NotLogin from '@/components/pop-ups/not-login';
import ModalWnd from '@/components/modal/modal-window';
import { useSession } from 'next-auth/react';
import {
  notifyAddedToCart,
  notifyRemoveFromFavorite,
} from '@/components/notification-modal/toast-notify';
import { Context } from '@/context/context';
import { GetUserFavorite } from '@/api/api';

type Props = {};

const Favorite = (props: Props) => {
  const { data: session } = useSession();
  const { addCardToCartCtx, toggleFavoriteCtx } = useContext(Context);
  const [favorite, setFavorite] = useState<ICard[]>([]);
  const [notify, setNotify] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (session === null) {
      setNotify(true);
      return;
    }

    async function fetchFavorite() {
      try {
        const allFavorite: ICard[] = await GetUserFavorite(session?.token);
        setFavorite(allFavorite);
      } catch (error) {
        console.log(error);
      } finally {
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

  const toggleFavorite = async (funkoId: number, token: string | undefined) => {
    try {
      await toggleFavoriteCtx(Number(session?.user.id), funkoId, token);
      let currentFavorite = favorite.filter(
        cartItem => cartItem.id !== funkoId
      );
      setFavorite(currentFavorite);
      notifyRemoveFromFavorite();
    } catch (error) {
      console.error(error);
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
                  <button
                    onClick={() => toggleFavorite(card.id, session?.token)}
                    type="button"
                    className="mr-[10px] md:mr-[22px]"
                  >
                    <FavoritIcon fill={'#31304D'} />
                  </button>
                  <Link
                    href={`/catalog/${card.id}`}
                    className="hover:scale-105 duration-200 ease-linear hover:shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)]"
                  >
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
                    </div>{' '}
                  </Link>
                  <div className="ml-6">
                    <p className="text-xs font-bold md:text-base xl:w-[400px]">
                      {card.name}
                    </p>
                    <p className="text-xs font-semibold md:text-base">
                      {card.sale
                        ? (card.price * discount).toFixed(2)
                        : card.price}
                      $
                    </p>
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
                  <button
                    onClick={() => addCardToCart(card.id, session?.token)}
                    className={`absolute flex right-0 bottom-0 text-xs underline md:no-underline md:rounded md:uppercase md:px-10 md:py-2 font-bold  md:text-white ${card.amount ? 'md:bg-subscribeBtn lg:hover:bg-white lg:hover:text-subscribeBtn lg:hover:border-subscribeBtn lg:hover:border-2 duration-200 ease-linear' : 'md:bg-grayBG'}`}
                    disabled={!card.amount}
                  >
                    Move to cart
                    <ArrowFavoriteBtn className="md:hidden" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center px-20">
          {/* <div className="w-[150px] md:w-[342px]">
            <Image src={CartImage} alt="empty cart" width={342} height={342} />
          </div> */}
          <p className="text-xs font-medium md:text-lg">
            You don’t have any favorite products yet. Let’s head to the{' '}
            <Link
              href={`/catalog`}
              className="text-xs p-1 italic font-bold md:text-lg"
            >
              Catalog
            </Link>
            to find some!{' '}
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

export default Favorite;
