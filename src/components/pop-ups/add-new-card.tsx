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
    number: Yup.string()
      .min(16, 'Must be exactly 16 digits')
      .max(16, 'Must be exactly 16 digits')
      .required('Required'),
    name: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(20, 'Too Long! max 20')
      .required('Required'),
    date: Yup.string()
      .min(5, 'Example 01/24')
      .max(5, 'Example 01/24')
      .required('Required'),
    cvv: Yup.string()
      .min(3, 'Must be exactly 3 digits')
      .max(3, 'Must be exactly 3 digits')
      .required('Required'),
  });

  // const handleInputChange = (event: React.ChangeEvent<HTMLFormElement>) => {
  //   if (event.target.name === 'number') {
  //     setInputValue(event.target.value);
  //   }
  //   if (event.target.name === 'name') {
  //     setInputValue(event.target.value);
  //   }
  //   if (event.target.name === 'date') {
  //     setInputValue(event.target.value);
  //   }
  //   if (event.target.name === 'cvv') {
  //     setInputValue(event.target.value);
  //   }
  // };

  const handleSubmit = async values => {
    try {
      if (user) {
        const res = await updateCreditCard(user?.token, newCards, user?.id);
      }
    } catch (error) {}
  };

  return (
    <Notification notify={isModal} setNotify={setIsModal}>
      <div className="flex flex-col gap-2 items-start px-7 pb-10 pt-14 md:py-11 min-w-[342px] w-full">
        {' '}
        <h3 className="text-lg font-bold self-center">NEW CARD</h3>
        <Formik
          initialValues={{
            number: '',
            name: '',
            date: '',
            cvv: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            console.log(values);
            // await handleSubmit(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {formik => (
            <Form className="w-full flex flex-col" onChange={handleInputChange}>
              <div className="relative overflow-hidden mb-2">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="number"
                  name="number"
                  type="text"
                  placeholder="Credit card"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="number"
                />
              </div>
              <div className="relative overflow-hidden mb-2">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="name"
                />
              </div>
              <div className="relative overflow-hidden mb-2">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="date"
                  name="date"
                  type="text"
                  placeholder="Expiration date (01/24)"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="date"
                />
              </div>
              <div className="relative overflow-hidden mb-2">
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
              </div>
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
