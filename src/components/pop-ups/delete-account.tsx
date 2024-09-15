import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';

export default function DeleteAccountPopup({
  notifyCart,
  setNotifyCart,
  showCloseButton,
  handleOpenPopUp
}: PopupProps) {
  return (
    <Notification
      notify={notifyCart}
      setNotify={setNotifyCart}
      showCloseButton={showCloseButton}
    >
      <div className="flex flex-col justify-center text-center items-center px-10 py-4 md:px-12 min-h-[129px] min-w-[358px] w-full">
        {' '}
        <p className="text-xs font-semibold mb-2">
          The account will be deleted permanently with its data
        </p>
        <p className="text-xs text-[#696969] mb-2">Still delete the account?</p>
        <button
          onClick={() => handleOpenPopUp ? handleOpenPopUp() : null}
          className="h-[38px] text-sm font-semibold"
        >
          Delete
        </button>
        <button
          onClick={() => setNotifyCart(false)}
          className="h-[38px] text-[#D63F3F] text-sm font-semibold"
        >
          Cancel
        </button>
      </div>
    </Notification>
  );
}
