import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function NewPassConfirm({
  notifyCart,
  setNotifyCart,
}: PopupProps) {
  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col text-center items-center px-4 py-12 md:px-12 md:py-10 md:w-[480px] w-[358px]">
        {' '}
        <p className="text-base md:text-lg font-bold">
          Your password has been changed
        </p>
        <p className="pt-2.5 text-xs md:text-sm font-semibold">
          Your password has been changed. Go to your account or go to your home
          page.
        </p>
      </div>
    </Notification>
  );
}
