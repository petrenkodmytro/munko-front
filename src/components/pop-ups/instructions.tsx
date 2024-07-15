import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function Instructions({
  notifyCart,
  setNotifyCart,
}: PopupProps) {
  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col text-center items-center px-12 py-10 min-w-[370px] md:min-w-[480px] w-full">
        {' '}
        <p className="text-base md:text-lg font-bold">
            A letter with instructions was sent to your mail.
        </p>
      </div>
    </Notification>
  );
}
