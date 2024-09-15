import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function Instructions({
  notifyCart,
  setNotifyCart,
}: PopupProps) {
  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col justify-center text-center items-center px-4 py-14 md:px-12 md:py-10 min-h-[129px] md:w-[480px] w-[358px]">
        {' '}
        <p className="text-base md:text-lg font-bold">
            A letter with instructions was sent to your mail.
        </p>
      </div>
    </Notification>
  );
}
