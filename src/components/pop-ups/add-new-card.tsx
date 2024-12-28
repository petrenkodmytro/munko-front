import Notification from '../notification-modal/notification';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { emailConfirm, updateCreditCard } from '@/api/api';
import { User } from 'next-auth';

type Props = {
  isModal: boolean;
  setIsModal: (modalState: boolean) => void;
  user: User | undefined;
};
export default function NewCard({ isModal, setIsModal, user }: Props) {
  // const [inputValue, setInputValue] = useState('');

  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .min(16, 'Must be exactly 16 digits')
      .max(16, 'Must be exactly 16 digits')
      .required('Required'),
    cardHolderName: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(20, 'Too Long! max 20')
      .required('Required'),
    expirationDate: Yup.string()
      .min(5, 'Example 01/24')
      .max(5, 'Example 01/24')
      .required('Required'),
    // cvv: Yup.string()
    //   .min(3, 'Must be exactly 3 digits')
    //   .max(3, 'Must be exactly 3 digits')
    //   .required('Required'),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.name);
    // if (event.target.name === 'cardNumber') {
    //   setInputValue(event.target.value);
    // }
    // if (event.target.name === 'cardHolderName') {
    //   setInputValue(event.target.value);
    // }
    // if (event.target.name === 'expirationDate') {
    //   setInputValue(event.target.value);
    // }
    // if (event.target.name === 'cvv') {
    //   setInputValue(event.target.value);
    // }
  };

  const handleSubmit = async (values: {
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    // cvv: string;
  }) => {
    const newCard = {
      userId: Number(user?.id),
      cardNumber: values.cardNumber,
      cardHolderName: values.cardHolderName,
      expirationDate: values.expirationDate,
      // cvv: values.cvv,
    };
    const newArrCards = user?.creditCard
      ? [...user.creditCard, newCard]
      : [newCard];
    console.log('newArrCards', newArrCards);
    try {
      if (user) {
        const res = await updateCreditCard(
          user?.token,
          newArrCards,
          Number(user?.id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Notification notify={isModal} setNotify={setIsModal}>
      <div className="flex flex-col gap-2 items-start px-7 pb-10 pt-14 md:py-11 min-w-[342px] w-full">
        {' '}
        <h3 className="text-lg font-bold self-center">NEW CARD</h3>
        <Formik
          initialValues={{
            cardNumber: '',
            cardHolderName: '',
            expirationDate: '',
            // cvv: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            // console.log(values);
            await handleSubmit(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {formik => (
            <Form className="w-full flex flex-col" onChange={handleInputChange}>
              <div className="relative overflow-hidden mb-2">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="Credit card"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="cardNumber"
                />
              </div>
              <div className="relative overflow-hidden mb-2">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="cardHolderName"
                  name="cardHolderName"
                  type="text"
                  placeholder="Name"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="cardHolderName"
                />
              </div>
              <div className="relative overflow-hidden mb-2">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="expirationDate"
                  name="expirationDate"
                  type="text"
                  placeholder="Expiration date (01/24)"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="expirationDate"
                />
              </div>
              {/* <div className="relative overflow-hidden mb-2">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="cvv"
                  name="cvv"
                  type="text"
                  placeholder="CVV"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="cvv"
                />
              </div> */}
              <button
                type="submit"
                className={
                  'rounded self-center font-semibold text-sm text-white w-[154px] py-2 duration-200 ease-linear bg-darkGreen'
                }
              >
                {formik.isSubmitting ? 'Please wait...' : 'Add new card'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Notification>
  );
}
