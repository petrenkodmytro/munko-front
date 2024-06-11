import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function RegSuccess({
  notifyCart,
  setNotifyCart,
}: PopupProps) {
  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col items-center px-12 py-10 min-w-[370px] md:min-w-[576px] w-full">
        {' '}
        <p className="text-sm md:text-base font-semibold">
          Registration was successful!
        </p>
        <p className="pt-2.5 text-xs md:text-sm font-medium">
          You can change or look for your personal information in your cabinet
        </p>
      </div>
    </Notification>
  );
}
