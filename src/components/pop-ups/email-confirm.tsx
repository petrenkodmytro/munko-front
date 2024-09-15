import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function EmailConfirm({
  notifyCart,
  setNotifyCart,
}: PopupProps) {
  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col justify-center items-center px-12 py-10 min-h-[129px] min-w-[370px] md:min-w-[576px] w-full">
        {' '}
        <p className="text-sm md:text-base font-semibold">
        Your e-mail is confirmed.
        </p>
      </div>
    </Notification>
  );
}
