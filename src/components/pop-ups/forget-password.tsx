import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function ForgetPassword({
  notifyCart,
  setNotifyCart,
  handleOpenPopUp
}: PopupProps) {
  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col gap-2 items-start px-16 py-11 min-w-[410px] w-full">
        {' '}
        <h3 className="text-lg font-bold">RECOVER PASSWORD</h3>
        <p>Enter your email:</p>
        <input
          className="w-full p-2 mb-2.5 border-grayBorder rounded text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
          type="email"
          placeholder="Email"
        ></input>
        <button
          onClick={handleOpenPopUp}
          type="button"
          className={
            'rounded self-center font-semibold text-sm text-white w-[154px] py-2 duration-200 ease-linear bg-footer'
          }
        >
          RECOVER
        </button>
      </div>
    </Notification>
  );
}
