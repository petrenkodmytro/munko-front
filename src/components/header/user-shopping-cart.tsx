import { useState, useEffect } from 'react';
import ModalWnd from '../modal/modal-window';
import UserIconMobile from './../../../public/icons/user-icon-mobile.svg';
import BasketIconMobile from './../../../public/icons/basket-icon-mobile.svg';
import BasketIcon from './../../../public/icons/basket-icon.svg';
import UserIcon from './../../../public/icons/user-icon.svg';
import UserIconHover from './../../../public/icons/user-hover-icon.svg';
import LogoutMobile from './../../../public/icons/logout_icon_mobile.svg';
import LogoutIcon from './../../../public/icons/logout_icon.svg';
import LogoutIconHover from './../../../public/icons/logout_icon hover.svg';
import BasketIconHover from './../../../public/icons/basket-hover-icon.svg';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import NotLogin from '../pop-ups/not-login';
import ForgetPassword from '../pop-ups/forget-password';
import InputNewPassword from '../pop-ups/new-password';
import Instructions from '../pop-ups/instructions';
import NewPassConfirm from '../pop-ups/new-pass-confirm';

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

  const searchParams = useSearchParams();
  const search = searchParams.get('error');

  // console.log(session);
  
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
    <div className="w-16 pb-6 pr-1 md:pr-0 md:ml-4 xl:ml-5 self-end md:w-auto md:self-center md:pb-0 md:mt-5">
      <ModalWnd
        call={modalState}
        serverError={serverError}
        onDestroy={() => setModalState(false)}
        handleForgetOpen={handleForgetOpen}
      />
      {session ? (
        <button
          onClick={() => signOut()}
          // className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase"
        >
          <div className="inline-block mr-1.5 md:hidden align-bottom">
            <UserIconMobile />
          </div>
          <div className="hidden md:inline-block md:mr-4">
            <div className="absolute duration-200 ease-linear hover:opacity-20">
              <UserIcon />
            </div>
            <UserIconHover />
          </div>
        </button>
      ) : (
        <button onClick={() => (setModalState(true), setServerError(''))}>
          <div className="mr-2.5 inline-block md:hidden align-bottom">
            <LogoutMobile />
          </div>
          <div className="hidden md:inline-block md:mr-6">
            <div className="absolute duration-200 ease-linear hover:opacity-20">
              <LogoutIcon />
            </div>
            <LogoutIconHover />
          </div>
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          if (session === null) {
            setNotifyCart(true);
          } else {
            router.push('/cart');
          }
        }}
      >
        <div className="inline-block md:hidden align-bottom">
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
