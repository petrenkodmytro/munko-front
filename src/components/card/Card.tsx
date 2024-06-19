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
  const [forget, setForget] = useState(false);
  const [inputNewPassword, setInputNewPassword] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

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
      <div className="w-[242px] h-[384px] flex flex-wrap md:mr-0 px-3 py-6 rounded shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)] duration-200 ease-linear hover:scale-105 flex-shrink-0">
        <Link href={`/catalog/${card.id}`} className='w-full'>
          <div className="w-[173px] h-[153px] flex justify-center items-center bg-[#F5F5F5] m-auto">
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
