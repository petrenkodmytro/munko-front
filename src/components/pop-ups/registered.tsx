import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function Registered({
  notifyCart,
  setNotifyCart,
}: PopupProps) {
  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col items-center px-12 py-10 min-w-[370px] md:min-w-[576px] w-full">
        {' '}
        <p className="text-sm md:text-base font-semibold">
        You are registered. You need to confirm your e-mail. We will sent you a letter with instructions on your e-mail.
        </p>
      </div>
    </Notification>
  );
}
