import UserIconMobile from './../../../public/icons/user-icon-mobile.svg';
import BasketIconMobile from './../../../public/icons/basket-icon-mobile.svg';
import BasketIcon from './../../../public/icons/basket-icon.svg';
import UserIcon from './../../../public/icons/user-icon.svg';
import UserIconHover from './../../../public/icons/user-hover-icon.svg';
import BasketIconHover from './../../../public/icons/basket-hover-icon.svg';

const UserShoppingCart = () => {
  return (
    <div className="w-16 pb-6 pr-1 md:pr-0 md:ml-2 xl:ml-5 self-end md:w-auto md:self-center md:pb-0 md:mt-5">
      <button>
        <div className="inline-block md:hidden align-bottom">
          <UserIconMobile />
        </div>
        <div className="hidden md:inline-block">
          <div className="absolute duration-200 ease-linear hover:opacity-0">
            <UserIcon />
          </div>
          <UserIconHover />
        </div>
      </button>
      <button className="ml-1.5 md:ml-2 xl:ml-4">
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
    </div>
  );
};

export default UserShoppingCart;
