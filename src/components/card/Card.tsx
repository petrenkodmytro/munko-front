'use client';

import { ICard } from '@/types/types';
import ImgPlaceholder from './../../../public/image/placeholder-png-image.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '@/api/api';
import { useSession } from 'next-auth/react';
import ModalWnd from '../modal/modal-window';
import NotLogin from '../pop-ups/not-login';
import ForgetPassword from '../pop-ups/forget-password';
import InputNewPassword from '../pop-ups/new-password';
import Instructions from '../pop-ups/instructions';
import NewPassConfirm from '../pop-ups/new-pass-confirm';
import { useState } from 'react';
import FavoritIcon from '../../../public/icons/favorite-small-icon.svg';

type CardCatalog = Pick<
  ICard,
  'id' | 'name' | 'images' | 'price' | 'productType' | 'amount' | 'sale'
>;

type CardProps = {
  card: CardCatalog;
};

const Card = ({ card }: CardProps) => {
  const { data: session } = useSession();
  const [modalState, setModalState] = useState(false);
  const [notifyOder, setNotifyOder] = useState(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const discount = 0.8;
  const [forget, setForget] = useState(false);
  const [inputNewPassword, setInputNewPassword] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const addCardToCart = async (
    funkoId: number,
    token: string | undefined
  ) => {
    if (session === null) {
      setNotifyOder(true);
      return;
    } else {
      try {
        await addToCart(funkoId, token);
      } catch (error) {
        console.error(error);
      }
    }
  };


  const handleModalOpen = () => {
    setModalState(!modalState);
  };

  const handleForgetOpen = () => {
    setForget(true);
    setModalState(false);    
  };
  
  const handleNewPasswordOpen = () => {
    setForget(false);
    setInputNewPassword(true);
  };

  const handleInstructionsOpen = () => {
    setInputNewPassword(false);
    setShowInstructions(true);
  };

  const handlePassConfrimOpen = () => {
    setShowInstructions(false);
    setShowPassConfirm(true);
  };

  return (
    <>
      {' '}
      <div className="w-[242px] h-[384px] flex flex-col md:mr-0 px-3 py-6 rounded shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)] duration-200 ease-linear hover:scale-105 flex-shrink-0">
        <Link href={`/catalog/${card.id}`} className="flex flex-col w-full ">
          <div className="w-[173px] h-[153px] flex justify-center items-center bg-[#F5F5F5] mx-auto">
            {card.images.length === 0 ? (
              <Image
                src={ImgPlaceholder}
                width={150}
                height={138}
                alt="card-picture"
              />
            ) : (
              <Image
                src={
                  card.images[0].slice(0, 25) +
                  'uc?id=' +
                  card.images[0].slice(32, 65)
                }
                width={150}
                height={138}
                alt="card-picture"
              />
            )}
          </div>
        </Link>
        <div className="flex flex-col grow text-base leading-5 text-black mt-5">
          <p>{card.productType}</p>
          <p className="h-10 font-bold uppercase  overflow-hidden text-ellipsis">
            {card.name}
          </p>
          <div className="relative mt-auto mb-5">
            {card.sale && (
              <p className="line-through text-[#656582] font-bold">
                {card.price}$
              </p>
            )}
            {card.sale ? (
              <p className="font-bold">{(card.price * discount).toFixed(1)}$</p>
            ) : (
              <p className="font-bold">{card.price}$</p>
            )}
            {card.amount <= 0 && (
              <p className="uppercase text-xs font-normal"> Out of stock</p>
            )}
            {card.amount <= 0 && (
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                type="button"
                className="absolute right-0 top-0 z-40"
              >
                <FavoritIcon fill={isFavorite ? '#31304D' : 'white'} />
              </button>
            )}
          </div>
        </div>

        <button
          onClick={() =>
            addCardToCart(card.id, session?.token)
          }
          className={`mt-auto rounded text-base h-9 font-bold w-full text-white ${card.amount ? 'bg-subscribeBtn hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 duration-200 ease-linear' : 'bg-grayBG'}`}
        >
          ADD TO CART
        </button>
      </div>
      <NotLogin
        notifyCart={notifyOder}
        setNotifyCart={setNotifyOder}
        handleOpenPopUp={handleModalOpen}
      />
      <ForgetPassword
        notifyCart={forget}
        setNotifyCart={setForget}
        handleOpenPopUp={handleNewPasswordOpen}
      />
      <InputNewPassword
        notifyCart={inputNewPassword}
        setNotifyCart={setInputNewPassword}
        handleOpenPopUp={handleInstructionsOpen}
      />
      <Instructions
        notifyCart={showInstructions}
        setNotifyCart={setShowInstructions}
        handleOpenPopUp={handlePassConfrimOpen}
      />
      <NewPassConfirm
        notifyCart={showPassConfirm}
        setNotifyCart={setShowPassConfirm}
      />
      <ModalWnd call={modalState} onDestroy={() => setModalState(false)} handleForgetOpen={handleForgetOpen}/>
    </>
  );
};
export default Card;
