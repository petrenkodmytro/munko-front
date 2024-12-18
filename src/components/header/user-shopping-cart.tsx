import { useState, useEffect, useContext } from 'react';
import ModalWnd from '../modal/modal-window';
import UserIconMobile from './../../../public/icons/user-icon-mobile.svg';
import BasketIconMobile from './../../../public/icons/basket-icon-mobile.svg';
import BasketIcon from './../../../public/icons/basket-icon.svg';
// import FavoriteIcon from './../../../public/icons/favorite-header-icon.svg';
import UserIcon from './../../../public/icons/user-icon.svg';
import UserIconHover from './../../../public/icons/user-hover-icon.svg';
import LoginMobile from './../../../public/icons/login_icon_mobile.svg';
import LoginIcon from './../../../public/icons/login_icon.svg';
import LoginIconHover from './../../../public/icons/login_icon hover.svg';
import Logout from './../../../public/icons/logout-icon.svg';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import NotLogin from '../pop-ups/not-login';
import ForgetPassword from '../pop-ups/forget-password';
import InputNewPassword from '../pop-ups/new-password';
import Instructions from '../pop-ups/instructions';
import NewPassConfirm from '../pop-ups/new-pass-confirm';
import RegSuccess from '../pop-ups/reg-success';
import EmailConfirm from '../pop-ups/email-confirm';
import Link from 'next/link';
import { BackDrop } from './back-drop';
import { enableAccount, emailChange } from '@/api/api';
import { Context } from '@/context/context';
import { FavoriteIcon } from '../ui-kit/svgs/FavoriteIcon.svg';

const UserShoppingCart = () => {
  const router = useRouter();
  const [modalState, setModalState] = useState(false);
  const [notifyCart, setNotifyCart] = useState(false);
  const { data: session } = useSession();
  const [serverError, setServerError] = useState('');
  const [forget, setForget] = useState(false);
  const [inputNewPassword, setInputNewPassword] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [tokenFromEmail, setTokenFromEmail] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);
  const [emailConfirmation, setEmailConfirmation] = useState(false);

  const { cartItemsCtx } = useContext(Context);
  const { favoriteItemsCtx } = useContext(Context);

  const searchParams = useSearchParams();
  const search = searchParams.get('error');
  const resetTokenParams = searchParams.get('reset_token');
  const emailConfirmationToken = searchParams.get('confirm_token');
  const newEmail = searchParams.get('email');

  useEffect(() => {
    if (search) {
      setModalState(true);
      setServerError(search);
    }

    if (resetTokenParams) {
      setTokenFromEmail(resetTokenParams);
      setInputNewPassword(true);
    }

    if (emailConfirmationToken) {
      if (newEmail && session) {
        emailChange(session.token, emailConfirmationToken, newEmail);
        signOut({ redirect: false })
      } else {
        enableAccount(emailConfirmationToken);
      }
      setEmailConfirmation(true);
    }
  }, [search, resetTokenParams, emailConfirmationToken, newEmail, session]);

  useEffect(() => {
    if (
      modalState ||
      forget ||
      inputNewPassword ||
      showInstructions ||
      showPassConfirm
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalState, forget, inputNewPassword, showInstructions, showPassConfirm]);

  const handleForgetOpen = () => {
    setForget(!forget);
    setModalState(false);
  };

  const handleModalOpen = () => {
    setModalState(!modalState);
  };

  const handleInstructionsOpen = () => {
    setForget(false);
    setShowInstructions(true);
  };

  const handlePassConfrimOpen = () => {
    setInputNewPassword(false);
    router.push('/');
    setShowPassConfirm(true);
  };

  const handleRegSuccessOpen = () => {
    setEmailConfirmation(false);
    router.push('/');
    if(!newEmail){
      setRegSuccess(true);
    }
  };

  return (
    <div className="w-auto pb-6 flex gap-1 md:gap-2 pr-1 md:pr-0 md:w-auto md:self-center md:pb-0 md:mt-5">
      <ModalWnd
        call={modalState}
        serverError={serverError}
        onDestroy={() => setModalState(false)}
        handleForgetOpen={handleForgetOpen}
      />
      {isMenuShow ? <BackDrop handleMenu={() => setIsMenuShow(false)} /> : null}
      {session ? (
        isMenuShow ? (
          <div className="py-2.5 md:px-4 relative top-8 md:top-[19px] z-30 rounded md:bg-darkGreen">
            <div className="border-white border-2 flex flex-col rounded gap-3 items-cente bg-darkGreen">
              <Link
                href={'/cabinet'}
                onClick={() => setIsMenuShow(false)}
                className="inline-block pl-1 mr-1.5 md:hidden align-bottom"
              >
                <UserIconMobile />
              </Link>
              <div className="hidden md:inline-block">
                <Link
                  href={'/cabinet'}
                  className="absolute duration-200 ease-linear hover:opacity-20"
                  onClick={() => setIsMenuShow(false)}
                >
                  <UserIcon />
                </Link>
                <UserIconHover />
              </div>
              <button
                className="pl-1 scale-[0.8] md:scale-100 bg-darkGreen rounded"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <Logout />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsMenuShow(true)}
            className="self-end md:ml-[19px]"
          >
            <div className="inline-block mr-1.5 pl-1 md:hidden self-end align-bottom">
              <UserIconMobile />
            </div>
            <div className="hidden md:inline-block md:mr-4">
              <div className="absolute duration-200 ease-linear hover:opacity-20">
                <UserIcon />
              </div>
              <UserIconHover />
            </div>
          </button>
        )
      ) : (
        <button
          className="self-end md:ml-[19px]"
          onClick={() => (setModalState(true), setServerError(''))}
        >
          <div className="mr-2.5 inline-block md:hidden align-bottom">
            <LoginMobile />
          </div>
          <div className="hidden md:inline-block md:mr-6">
            <div className="absolute duration-200 ease-linear hover:opacity-20">
              <LoginIcon />
            </div>
            <LoginIconHover />
          </div>
        </button>
      )}
      {/* cart icon */}
      <button
        className="self-end md:self-center"
        type="button"
        onClick={() => {
          if (session === null) {
            setNotifyCart(true);
          } else {
            router.push('/cart');
          }
        }}
      >
        <div className="relative inline-block mr-1.5 md:self-stretch md:hidden align-bottom ">
          {cartItemsCtx ? (
            <div className="text-[#31304D]">
              <BasketIconMobile />
              <div className="absolute -top-3 -right-3 w-4 h-4 flex justify-center items-center text-[8px] font-bold rounded-full text-white bg-[#31304D]">
                {cartItemsCtx}
              </div>
            </div>
          ) : (
            <div className="text-white">
              <BasketIconMobile />
            </div>
          )}
        </div>
        <div className="relative hidden md:inline-block md:mr-4">
          {cartItemsCtx ? (
            <div className="text-[#31304D] duration-200 ease-linear hover:text-[#161629]">
              <BasketIcon />
              <div className="absolute -top-3 -right-3 w-4 h-4 flex justify-center items-center text-[8px] font-bold rounded-full text-white bg-[#31304D]">
                {cartItemsCtx}
              </div>
            </div>
          ) : (
            <div className="text-white duration-200 ease-linear hover:text-[#C3C3C3]">
              <BasketIcon />
            </div>
          )}
        </div>
      </button>
      {/* favorite icon */}
      <button
        className="self-end md:self-center"
        type="button"
        onClick={() => {
          if (session === null) {
            setNotifyCart(true);
          } else {
            router.push('/cabinet/favorite');
          }
        }}
      >
        <div className="relative inline-block md:self-stretch md:hidden align-bottom">
          {favoriteItemsCtx.length ? (
            <div className="text-[#31304D]">
              <FavoriteIcon width={25} height={25} />
              <div className="absolute -top-3 -right-3 w-4 h-4 flex justify-center items-center text-[8px] font-bold rounded-full text-white bg-[#31304D]">
                {favoriteItemsCtx.length}
              </div>
            </div>
          ) : (
            <div className="text-white">
              <FavoriteIcon width={25} height={25} />
            </div>
          )}
        </div>
        <div className="relative hidden md:inline-block">
          {favoriteItemsCtx.length ? (
            <div className="text-[#31304D] duration-200 ease-linear hover:text-[#161629]">
              <FavoriteIcon />
              <div className="absolute -top-3 -right-3 w-4 h-4 flex justify-center items-center text-[8px] font-bold rounded-full text-white bg-[#31304D]">
                {favoriteItemsCtx.length}
              </div>
            </div>
          ) : (
            <div className="text-white duration-200 ease-linear hover:text-[#C3C3C3]">
              <FavoriteIcon />
            </div>
          )}
        </div>
      </button>
      <NotLogin
        notifyCart={notifyCart}
        setNotifyCart={setNotifyCart}
        handleOpenPopUp={handleModalOpen}
      />
      <ForgetPassword
        notifyCart={forget}
        setNotifyCart={setForget}
        handleOpenPopUp={handleInstructionsOpen}
      />
      <InputNewPassword
        notifyCart={inputNewPassword}
        setNotifyCart={setInputNewPassword}
        resetToken={tokenFromEmail}
        handleOpenPopUp={handlePassConfrimOpen}
      />
      <Instructions
        notifyCart={showInstructions}
        setNotifyCart={setShowInstructions}
      />
      <NewPassConfirm
        notifyCart={showPassConfirm}
        setNotifyCart={setShowPassConfirm}
      />
      <RegSuccess notifyCart={regSuccess} setNotifyCart={setRegSuccess} />
      <EmailConfirm
        notifyCart={emailConfirmation}
        setNotifyCart={handleRegSuccessOpen}
      />
    </div>
  );
};

export default UserShoppingCart;
