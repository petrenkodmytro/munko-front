import { useState } from 'react';
import IconCreditCard from './../../../public/icons/mastercard 1.svg';
import IconPrivat from './../../../public/icons/icon-credit-card.svg';
import IconGooglePay from './../../../public/icons/googlePay.svg';
import IconApplePay from './../../../public/icons/applePay.svg';
import RadioBtn from '../ui-kit/radioBtn/RadioBtn';
import { User } from 'next-auth';
import NewCard from '../pop-ups/add-new-card';

type Props = {
  user: User | undefined;
};

const PaymentMethod = ({ user }: Props) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isModal, setIsModal] = useState(false);

  const handleChange = (event: { target: { value: any } }) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const openModal = () => {
    setIsModal(!isModal);
  };

  console.log(selectedPaymentMethod);
  console.log(isModal);


  return (
    <div>
      <div>
        {user?.creditCard && user?.creditCard?.length > 0 && (
          <ul className="flex gap-4 py-2">
            {user.creditCard.map(card => (
              <li
                key={card.cardNumber}
                className={`relative flex p-1 text-xs rounded border w-[125px] h-[60px] shadow-[0px_0px_2px_0px_rgb(0,0,0,0.45)] ${
                  selectedPaymentMethod === card.cardNumber
                    ? 'border-2 border-darkGreen'
                    : ''
                }`}
              >
                <label>
                  <input
                    className="absolute invisible"
                    type="radio"
                    value={card.cardNumber}
                    checked={selectedPaymentMethod === card.cardNumber}
                    onChange={handleChange}
                  />
                  <div className="flex flex-col">
                    <p>{card.cardHolderName}</p>
                    <p>{card.cardNumber}</p>
                    <p>{card.expirationDate}</p>
                  </div>
                  <div className="absolute top-1 right-1 flex justify-center items-center w-[30px] h-[18px] bg-[#1E1E1E] rounded">
                    <IconCreditCard />
                  </div>
                </label>
                <button
                  className="absolute bottom-1 right-1 text-red-600"
                  type="button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex justify-center gap-2 mt-5 text-xs">
        <button
          onClick={openModal}
          type="button"
          className="px-1 border rounded shadow-[0px_0px_4px_0px_rgb(0,0,0,0.25)]"
          // className="w-full h-[86px] border rounded shadow-[0px_0px_4px_0px_rgb(0,0,0,0.25)]"
        >
          Add new card
        </button>
        <div
          className={`flex justify-center items-center rounded border w-[65px] h-[38px] shadow-[0px_0px_2px_0px_rgb(0,0,0,0.45)] ${
            selectedPaymentMethod === 'PrivatBank'
              ? 'border-2 border-darkGreen'
              : ''
          }`}
        >
          <label>
            <input
              className="absolute invisible"
              type="radio"
              value="PrivatBank"
              checked={selectedPaymentMethod === 'PrivatBank'}
              onChange={handleChange}
            />
            <div className="flex justify-center items-center w-[30px] h-[18px] bg-[#1E1E1E] rounded">
              <IconPrivat />
            </div>
          </label>
        </div>
        <div
          className={`flex justify-center items-center rounded border w-[65px] h-[38px] shadow-[0px_0px_2px_0px_rgb(0,0,0,0.45)] ${
            selectedPaymentMethod === 'gPay' ? 'border-2 border-darkGreen' : ''
          }`}
        >
          <label>
            <input
              className="absolute invisible"
              type="radio"
              value="gPay"
              checked={selectedPaymentMethod === 'gPay'}
              onChange={handleChange}
            />

            <div className="flex justify-center items-center w-full h-[18px]  rounded">
              <IconGooglePay />
            </div>
          </label>
        </div>
        <div
          className={`flex justify-center items-center rounded border w-[65px] h-[38px] shadow-[0px_0px_2px_0px_rgb(0,0,0,0.45)] ${
            selectedPaymentMethod === 'ApplePay'
              ? 'border-2 border-darkGreen'
              : ''
          }`}
        >
          <label>
            <input
              className="absolute invisible"
              type="radio"
              value="ApplePay"
              checked={selectedPaymentMethod === 'ApplePay'}
              onChange={handleChange}
            />

            <div className="flex justify-center items-center w-full h-[18px]  rounded">
              <IconApplePay />
            </div>
          </label>
        </div>
        {/* <RadioBtn/> */}
      </div>
      <NewCard isModal={isModal} setIsModal={setIsModal} user={user}/>
    </div>
  );
};

export default PaymentMethod;
