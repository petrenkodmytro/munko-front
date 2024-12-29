'use client';
import { useEffect, useState } from 'react';
import IconCreditCard from './../../../public/icons/mastercard 1.svg';
import IconPrivat from './../../../public/icons/icon-credit-card.svg';
import IconGooglePay from './../../../public/icons/googlePay.svg';
import IconApplePay from './../../../public/icons/applePay.svg';
import RadioBtn from '../ui-kit/radioBtn/RadioBtn';
import { User } from 'next-auth';
import NewCard from '../pop-ups/add-new-card';
import { getCurrentUser, updateCreditCard } from '@/api/api';
import { notifyRemoveCreditCard } from '../notification-modal/toast-notify';
import { ICreditCard } from '@/types/types';
import { useSession } from 'next-auth/react';
import Spinner from '../loading/loading';

type Props = {
  // user: User | undefined;
};

const PaymentMethod = (props: Props) => {
  const { data: session } = useSession();
  // const user = session?.user;
  const [currentUser, setCurrentUser] = useState<User>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [arrCards, setArrCards] = useState(currentUser?.creditCard);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(arrCards);

  useEffect(() => {
    const handleGetCurrentUser = async () => {
      try {
        if (session && session.token) {
          const data = await getCurrentUser(session.token);
          setCurrentUser(data);
          setArrCards(data?.creditCard);
          // console.log(data?.creditCard);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleGetCurrentUser();
  }, [session, isModal]);

  const handleChangePaymentMethod = (event: { target: { value: any } }) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const openModal = () => {
    setIsModal(!isModal);
  };

  const deleteCreditCard = async (id: number | undefined) => {
    console.log(id);
    try {
      let newCards = arrCards?.filter(card => card.id !== id);
      const newArrCreditCard = await updateCreditCard(
        session?.token,
        newCards,
        Number(currentUser?.id)
      );
      // console.log(newArrCreditCard.creditCard);
      setArrCards(newArrCreditCard.creditCard);
      notifyRemoveCreditCard();
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(selectedPaymentMethod);
  // console.log(isModal);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <div>
          <div>
            {arrCards && arrCards?.length > 0 && (
              <ul className="flex gap-4 py-2">
                {arrCards.map(card => (
                  <li
                    key={card.id}
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
                        onChange={handleChangePaymentMethod}
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
                      onClick={() => deleteCreditCard(card.id)}
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
                  onChange={handleChangePaymentMethod}
                />
                <div className="flex justify-center items-center w-[30px] h-[18px] bg-[#1E1E1E] rounded">
                  <IconPrivat />
                </div>
              </label>
            </div>
            <div
              className={`flex justify-center items-center rounded border w-[65px] h-[38px] shadow-[0px_0px_2px_0px_rgb(0,0,0,0.45)] ${
                selectedPaymentMethod === 'gPay'
                  ? 'border-2 border-darkGreen'
                  : ''
              }`}
            >
              <label>
                <input
                  className="absolute invisible"
                  type="radio"
                  value="gPay"
                  checked={selectedPaymentMethod === 'gPay'}
                  onChange={handleChangePaymentMethod}
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
                  onChange={handleChangePaymentMethod}
                />

                <div className="flex justify-center items-center w-full h-[18px]  rounded">
                  <IconApplePay />
                </div>
              </label>
            </div>
            {/* <RadioBtn/> */}
          </div>
          <NewCard
            isModal={isModal}
            setIsModal={setIsModal}
            user={currentUser}
            token={session?.token}
          />
        </div>
      )}
    </>
  );
};

export default PaymentMethod;
