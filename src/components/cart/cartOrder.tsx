import { delivery, discount, stepsOrder } from '@/constant/constant';
import { ICartCard } from '@/types/types';
import IconBack from './../../../public/icons/icon-back-cart-chevron-left.svg';
import IconCreditCard from './../../../public/icons/mastercard 1.svg';
import { useState } from 'react';
import Delivery from '../delivery/delivery';
import RadioBtn from '../ui-kit/radioBtn/RadioBtn';
import PaymentMethod from './paymentMethod';
import { User } from 'next-auth';

type Props = {
  orders: ICartCard[];
  setOrderStep: (status: string) => void;
  user: User | undefined;
};

const CartOrder = ({ orders, setOrderStep, user }: Props) => {
  const [setCreditCard, setSetCreditCard] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [payMethod, setPayMethod] = useState('');

  const handlePayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayMethod(e.target.value);
  };

  return (
    <div className="mt-10 xl:mt-0 xl:border-l-[1px] xl:border-black xl:pl-10 xl:pr-5 xl:w-[436px]">
      <h4 className="uppercase text-2xl font-semibold md:text-3xl">
        delivery method
      </h4>
      <div className="w-full h-[1px] bg-black my-5"></div>
      {!(orders.length > 0) && (
        <>
          <p className="flex justify-between  text-xs font-bold md:text-sm">
            Please checked your orders
          </p>
          <div className="w-full h-[1px] bg-black my-5"></div>
        </>
      )}

      <h6 className="font-bold">Delivery</h6>
      <Delivery
        deliveryMethod={deliveryMethod}
        setDeliveryMethod={setDeliveryMethod}
      />

      <div className="w-full h-[1px] bg-black my-5"></div>
      <h6 className="font-bold">Payment method</h6>
      <form>
        <RadioBtn
          label="Cash on Delivery (COD)"
          id="cod"
          name="paymentMethod"
          value="cod"
          onChange={handlePayChange}
        />
        {payMethod === 'cod' && (
          <p>
            An additional 2% of the declared purchase amount is paid by post.
          </p>
        )}

        <div className="flex justify-between">
          <RadioBtn
            label=""
            id="card"
            name="paymentMethod"
            value="card"
            onChange={handlePayChange}
          >
            <div className="flex justify-center items-center gap-2">
              {Array.isArray(user?.creditCard) &&
              user?.creditCard[0]?.cardNumber ? (
                <>
                  <div className="flex justify-center items-center w-[30px] h-[18px] bg-[#1E1E1E] rounded">
                    <IconCreditCard />
                  </div>
                  <p>
                    {user.creditCard[0].cardNumber.slice(0, 4)} **** ****
                    {user.creditCard[0].cardNumber.slice(-4)}
                  </p>
                </>
              ) : (
                <p>No credit card available</p>
              )}
            </div>
          </RadioBtn>
          {payMethod === 'card' && (
            <button
              onClick={() => {
                setSetCreditCard(!setCreditCard);
              }}
              type="button"
              className="rotate-180 flex justify-center items-center px-2 bg-lightGrey lg:enabled:hover:bg-grayBG duration-200 ease-linear"
            >
              <IconBack />
            </button>
          )}
        </div>
        {setCreditCard && <PaymentMethod isBtnAddNewCard={false} />}
      </form>

      <div className="w-full h-[1px] bg-black my-5"></div>

      {/* Total price */}
      {orders.length > 0 && (
        <p className="flex justify-between text-lg font-bold md:text-xl">
          Total
          <span>
            {[...orders].reduce((total, order) => {
              let price: number;
              if (order.funkoPop.sale) {
                price = (order.funkoPop.price / 100) * discount;
              } else {
                price = order.funkoPop.price / 100;
              }
              return Number((total + price * order.amount).toFixed(2));
            }, delivery)}
            $
          </span>
        </p>
      )}

      {/* button */}
      <div className="mt-9 flex items-center justify-between md:flex-row-reverse xl:flex-col xl:mt-14 xl:gap-6">
        <button
          onClick={() => {
            alert('congratilations!!!!!!');
          }}
          disabled={orders.length === 0}
          type="button"
          className="w-[170px] md:w-[331px] xl:w-full px-5 py-2 md:py-2.5 text-xs md:text-base font-bold uppercase rounded-[5px] border-2 border-current text-white bg-[#31304D] lg:enabled:hover:text-[#31304D] lg:enabled:hover:bg-white duration-200 ease-linear disabled:bg-[#B1B1B1]"
        >
          order
        </button>
        <button
          type="button"
          className="flex items-center uppercase text-xs font-bold md:text-base"
          onClick={() => {
            setOrderStep(stepsOrder.total);
          }}
        >
          <IconBack />
          order later and go back
        </button>
      </div>
    </div>
  );
};

export default CartOrder;
