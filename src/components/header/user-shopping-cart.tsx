import { useState, useEffect, useContext } from 'react';
import ModalWnd from '../modal/modal-window';
import UserIconMobile from './../../../public/icons/user-icon-mobile.svg';
import BasketIconMobile from './../../../public/icons/basket-icon-mobile.svg';
import BasketIcon from './../../../public/icons/basket-icon.svg';
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
import { CartContext } from '@/context/cart';
import { BackDrop } from './back-drop';
import { enableAccount } from '@/api/api';

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

  const { cartItemsCtx } = useContext(CartContext);  

  const searchParams = useSearchParams();
  const search = searchParams.get('error');
  const resetTokenParams = searchParams.get('token');
  const emailConfirmationToken = searchParams.get('confirm_token');

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
      setEmailConfirmation(true);
      enableAccount(emailConfirmationToken)
    }
  }, [search, resetTokenParams, emailConfirmationToken]);

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
    setRegSuccess(true);
  };

  return (
    <div className="w-auto pb-6 flex pr-1 md:pr-0 md:w-auto md:self-center md:pb-0 md:mt-5">
      <ModalWnd
        call={modalState}
        serverError={serverError}
        onDestroy={() => setModalState(false)}
        handleForgetOpen={handleForgetOpen}
      />
      {isMenuShow ? <BackDrop handleMenu={() => setIsMenuShow(false)} /> : null}
      {session ? (
        isMenuShow ? (
          <div className="py-2.5 md:px-4 relative top-8 md:top-[19px] z-30 rounded md:bg-footer">
            <div className="border-white border-2 flex flex-col rounded gap-3 items-cente bg-footer">
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
                className="pl-1 scale-[0.8] md:scale-100 bg-footer rounded"
                onClick={() => signOut()}
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
        <div className="relative inline-block md:self-stretch md:hidden align-bottom ">
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
        <div className="relative hidden md:inline-block">
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
