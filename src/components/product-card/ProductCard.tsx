'use client';

import React, { useContext, useEffect, useState } from 'react';
import CardImage from './cardImage';
import CardReviews from './reviewList';
import { getItem } from '@/api/api';
import { notFound, useParams } from 'next/navigation';
import { ICard } from '@/types/types';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import ModalWnd from '../modal/modal-window';
import NotLogin from '../pop-ups/not-login';
import ForgetPassword from '../pop-ups/forget-password';
import InputNewPassword from '../pop-ups/new-password';
import Instructions from '../pop-ups/instructions';
import NewPassConfirm from '../pop-ups/new-pass-confirm';
import { Context } from '@/context/context';
import {
  notifyAddedToCart,
  notifyAddedToFavorite,
  notifyRemoveFromFavorite,
} from '../notification-modal/toast-notify';
import { discount, initialValue } from '@/constant/constant';
import CardDescription from './cardDescription';
import Spinner from '../loading/loading';

type Params = {
  id: string;
};

const ProductCard = () => {
  const id = useParams<Params>().id; // item id
  // console.log(id);
  const { data: session } = useSession();
  // console.log(session);
  const { addCardToCartCtx, toggleFavoriteCtx, favoriteItemsCtx } =
    useContext(Context);
  // const [product, setProduct] = useState<{ [key: string]: any }>({}); // or set initialValue
  const [modalState, setModalState] = useState(false);
  const [product, setProduct] = useState<ICard>(initialValue);
  const [error, setError] = useState(false);
  const [notifyOder, setNotifyOder] = useState(false);
  const [notifyReview, setNotifyReview] = useState(false);
  const [forget, setForget] = useState(false);
  const [inputNewPassword, setInputNewPassword] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let isFavorite = favoriteItemsCtx.includes(Number(id));

  useEffect(() => {
    async function fetchProduct() {
      try {
        const card = await getItem(id);
        if (card === null) {
          setError(true);
        }
        setProduct(card);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (error) {
    notFound();
  }

  const addCardToCart = async (funkoId: number, token: string | undefined) => {
    if (session === null) {
      setNotifyOder(true);
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

  const toggleFavorite = async () => {
    if (session === null) {
      setNotifyOder(true);
      return;
    } else {
      try {
        await toggleFavoriteCtx(
          Number(session.user.id),
          Number(id),
          session.token
        );
        if (favoriteItemsCtx.includes(Number(id))) {
          notifyRemoveFromFavorite();
        } else {
          notifyAddedToFavorite();
        }
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
    <div className="md:px-5 md:pb-[72px] xl:px-20 xl:pb-[35px]">
      <div className="hidden md:block py-[25px] text-xs font-medium md:text-base">
        <Link className="underline" href={'/catalog'}>
          Catalog
        </Link>
        / {product.category ?? 'Unknown'} / {product.collection ?? 'Unknown'}
      </div>
      {!isLoading ? (
        <div className="xl:flex gap-6">
          <CardImage
            images={product.images}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />

          {/* ---card info--- */}
          <div className="px-[16px] py-[30px] md:px-0 md:pb-10">
            <h5 className="text-2xl font-bold mb-5 md:text-[32px]">
              {product.name}
            </h5>
            {product.sale ? (
              <p className="line-through text-[#656582] font-bold text-base mb-[6px] md:text-2xl">
                {product.price}$
              </p>
            ) : (
              <p className="text-base font-semibold mb-[6px] md:text-2xl">
                {product.price}$
              </p>
            )}
            {product.sale && (
              <p className="text-base font-semibold mb-[6px] md:text-2xl">
                {(product.price * discount).toFixed(2)}$
              </p>
            )}
            {product.amount ? (
              <p className="uppercase text-xs mb-[10px] xl:mb-[60px]">
                in stock
              </p>
            ) : (
              <p className="uppercase text-xs mb-[10px] xl:mb-[60px]">
                coming soon
              </p>
            )}

            <div className="flex justify-between xl:flex-col gap-5">
              <button
                onClick={() => addCardToCart(product.id, session?.token)}
                type="button"
                className={`uppercase px-[25px] py-[14px] rounded-[5px] border-2 border-current text-white text-base not-italic font-bold  md:px-[90px] xl:w-[302px] ${product.amount ? 'bg-[#31304D] lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear' : 'bg-grayBG'}`}
                disabled={!product.amount}
              >
                add to cart
              </button>
              {product.amount ? (
                <button
                  type="button"
                  className="uppercase px-[25px] py-[14px] rounded-[5px] border-2 border-current text-[#31304D] bg-white text-base not-italic font-bold  lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear md:px-[90px] xl:w-[302px]"
                >
                  Fast order
                </button>
              ) : null}
            </div>
            <ul className="hidden xl:flex flex-col gap-[2px] mt-[35px] text-base font-semibold">
              <li>
                Item number: <span className="font-medium">{product.id}</span>
              </li>
              <li>
                Category:{' '}
                <span className="font-medium">
                  {product.category ?? 'Unknown'}
                </span>
              </li>
              <li>
                Colection:{' '}
                <span className="font-medium">
                  {product.collection ?? 'Unknown'}
                </span>
              </li>
              <li>
                Sublicense:{' '}
                <span className="font-medium">
                  {product.sublicense ?? 'Unknown'}
                </span>
              </li>
              <li>
                Product type:{' '}
                <span className="font-medium">
                  {product.productType ?? 'Unknown'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Spinner />
      )}

      <div className="xl:flex gap-6 xl:pt-[35px]">
        {/* ---description--- */}
        <CardDescription product={product} />
        {/* ---card reviews--- */}
        <CardReviews
          cardId={id}
          notify={notifyReview}
          setNotify={setNotifyReview}
          modalState={modalState}
          setModalState={setModalState}
        />
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
      <ModalWnd
        call={modalState}
        onDestroy={() => setModalState(false)}
        handleForgetOpen={handleForgetOpen}
      />
    </div>
  );
};

export default ProductCard;
