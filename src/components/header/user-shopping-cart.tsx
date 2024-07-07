import { useState, useEffect } from 'react';
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
import BasketIconHover from './../../../public/icons/basket-hover-icon.svg';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import NotLogin from '../pop-ups/not-login';
import ForgetPassword from '../pop-ups/forget-password';
import InputNewPassword from '../pop-ups/new-password';
import Instructions from '../pop-ups/instructions';
import NewPassConfirm from '../pop-ups/new-pass-confirm';
import Link from 'next/link';

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
  const [isMenuShow, setIsMenuShow] = useState(false)

  const searchParams = useSearchParams();
  const search = searchParams.get('error');
  
  useEffect(() => {
    if (search) {
      setModalState(true);
      setServerError(search);
    }
  }, [search]);

  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalState]);

  const handleForgetOpen = () => {
    setForget(!forget);
    setModalState(false);
  };

  const handleNewPasswordOpen = () => {
    setForget(false);
    setInputNewPassword(true);
  };

  const handleModalOpen = () => {
    setModalState(!modalState);
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
    <div className="w-16 pb-6 flex pr-1 md:pr-0 md:ml-4 xl:ml-5 md:w-auto md:self-center md:pb-0 md:mt-5">
      <ModalWnd
        call={modalState}
        serverError={serverError}
        onDestroy={() => setModalState(false)}
        handleForgetOpen={handleForgetOpen}
      />
      {session ? (
        isMenuShow ? (
          <div
            className="py-2.5 md:pr-3 flex flex-col relative top-8 md:top-[18px] rounded gap-3 md:mr-1 items-center bg-footer z-10"
          >
            <Link href={'/cabinet'} className="inline-block pl-1 mr-1.5 md:hidden align-bottom">
              <UserIconMobile />
            </Link>
            <div className="hidden md:inline-block">
              <Link href={'/cabinet'} className="absolute duration-200 ease-linear hover:opacity-20">
                <UserIcon />
              </Link>
              <UserIconHover />
            </div>
            <button className='pl-1 bg-footer rounded' onClick={()=> signOut()}>
              <Logout />
            </button>
          </div>
        ):(
          <button
            onClick={()=> setIsMenuShow(true)}
            className="self-end"
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
        <button className='self-end' onClick={() => (setModalState(true), setServerError(''))}>
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
      className='self-end md:self-center'
        type="button"
        onClick={() => {
          if (session === null) {
            setNotifyCart(true);
          } else {
            router.push('/cart');
          }
        }}
      >
        <div className="inline-block md:self-stretch md:hidden align-bottom">
          <BasketIconMobile />
        </div>
        <div className="hidden md:inline-block">
          <div className="absolute duration-200 ease-linear hover:opacity-0">
            <BasketIcon />
          </div>
          <BasketIconHover />
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
    </div>
  );
};

export default UserShoppingCart;
