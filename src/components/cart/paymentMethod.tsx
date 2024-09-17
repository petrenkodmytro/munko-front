import { useState } from 'react';
import IconCreditCard from './../../../public/icons/icon-credit-card.svg';
import IconGooglePay from './../../../public/icons/googlePay.svg';
import IconApplePay from './../../../public/icons/applePay.svg';



type Props = {};

const PaymentMethod = (props: Props) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleChange = (event: { target: { value: any } }) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <div>
      <h4 className="uppercase text-2xl font-semibold md:text-3xl">
        PAYMENT METHOD
      </h4>

      <p className="font-semibold py-8">Choose a way to pay</p>

      <button
        type="button"
        className="w-full h-[86px] border rounded shadow-[0px_0px_4px_0px_rgb(0,0,0,0.25)]"
      >
        Add new card
      </button>

      <div className="flex">
        <div>
          <label>
            <input
              type="radio"
              value="PrivatBank"
              checked={selectedPaymentMethod === 'PrivatBank'}
              onChange={handleChange}
            />
            PrivatBank
            <div className="flex justify-center items-center w-[30px] h-[18px] bg-[#1E1E1E] rounded">
              <IconCreditCard />
            </div>
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="gPay"
              checked={selectedPaymentMethod === 'gPay'}
              onChange={handleChange}
            />
            Google Pay (gPay)
            <div className="flex justify-center items-center w-[30px] h-[18px]  rounded">
              <IconGooglePay />
            </div>
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="ApplePay"
              checked={selectedPaymentMethod === 'ApplePay'}
              onChange={handleChange}
            />
            Apple Pay
            <div className="flex justify-center items-center w-[30px] h-[18px]  rounded">
              <IconApplePay />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
