import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';
import { useState } from 'react';
import { forgotPassword } from '@/api/api';

export default function ForgetPassword({
  notifyCart,
  setNotifyCart,
  handleOpenPopUp,
}: PopupProps) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await forgotPassword(inputValue);
    
    if (response === 'Email address not found.') {
      setError(response);
    } else {
      handleOpenPopUp ? handleOpenPopUp() : null;
    }
  };

  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <form
        action="/submit"
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-start px-16 py-11 min-w-[410px] w-full"
      >
        {' '}
        <h3 className="text-lg font-bold">RECOVER PASSWORD</h3>
        <label htmlFor="email_for_recover" className='mb-2.5'>Enter your email:
        <input
          id="email_for_recover"
          className="w-full p-2 mt-2 border-grayBorder rounded text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
          type="email"
          placeholder="Email"
          name="email_for_recover"
          onChange={handleInputChange}
        ></input>
        {error && (
          <div className="text-[8px] text-[#D63F3F]">
            <span>{error}</span>
          </div>
        )}
        </label>
        <button
          type="submit"
          className={
            'rounded self-center font-semibold text-sm text-white w-[154px] py-2 duration-200 ease-linear bg-footer'
          }
        >
          RECOVER
        </button>
      </form>
    </Notification>
  );
}
