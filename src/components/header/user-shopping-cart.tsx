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
import Link from 'next/link';

const UserShoppingCart = () => {
  const [modalState, setModalState] = useState(false);
  const { data: session } = useSession();
  console.log(session);
  

  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalState]);

  return (
    <div className="w-16 pb-6 pr-1 md:pr-0 md:ml-4 xl:ml-5 self-end md:w-auto md:self-center md:pb-0 md:mt-5">
      <ModalWnd call={modalState} onDestroy={() => setModalState(false)} />
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
        <button onClick={() => setModalState(true)}>
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
      <Link href={'/cart'}>
        <div className="inline-block md:hidden align-bottom">
          <BasketIconMobile />
        </div>
        <div className="hidden md:inline-block">
          <div className="absolute duration-200 ease-linear hover:opacity-0">
            <BasketIcon />
          </div>
          <BasketIconHover />
        </div>
      </Link>
    </div>
  );
};

export default UserShoppingCart;
