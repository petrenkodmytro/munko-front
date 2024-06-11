import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function NotLogin({
  notifyCart,
  setNotifyCart,
  handleOpenPopUp,
}: PopupProps) {
  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
        <div className="flex flex-col gap-7 items-center px-12 py-10 min-w-[370px] md:min-w-[576px] w-full">
          {' '}
          <p className="pt-5 text-sm md:text-base font-semibold">
            You are not logged in. If you want to buy the product, you must log
            in
          </p>
          <button
            onClick={() => {
              handleOpenPopUp ? handleOpenPopUp() : null;
              setNotifyCart(false);
            }}
            type="button"
            className="w-[137px] uppercase px-8 py-2 rounded-[5px] border-2 border-current text-white text-xl not-italic font-semibold  bg-[#31304D] lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear"
          >
            login
          </button>
        </div>
    </Notification>
  );
}
