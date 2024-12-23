import Notification from '../notification-modal/notification';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { emailConfirm } from '@/api/api';
import { User } from 'next-auth';

type Props = {
  isModal: boolean;
  setIsModal: (modalState: boolean) => void;
  user: User | undefined;
};
export default function NewCard({ isModal, setIsModal, user }: Props) {
  const [inputValue, setInputValue] = useState('');

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, 'Too Long! max 45')
      //   .matches(
      //     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/,
      //     'Must be a valid email'
      //   )
      .required('Required'),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (event.target.name === 'email') {
      setInputValue(event.target.value);
    }
  };

  //   const handleSubmit = async () => {
  //     if (userId) {
  //       const response = await emailConfirm(Number(userId), inputValue);
  //       if (response) {
  //         handleOpenPopUp ? handleOpenPopUp() : null;
  //       } else {
  //         console.log('Error: something went wrong.');
  //       }
  //     }
  //   };

  return (
    <Notification notify={isModal} setNotify={setIsModal}>
      <div className="flex flex-col gap-2 items-start px-7 pb-10 pt-14 md:py-11 min-w-[342px] w-full">
        {' '}
        <h3 className="text-lg font-bold self-center">NEW CARD</h3>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            // await handleSubmit();
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {formik => (
            <Form className="w-full flex flex-col" onChange={handleInputChange}>
              <div className="relative overflow-hidden mb-5">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="number"
                  name="number"
                  type="number"
                  placeholder="Credit card"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="number"
                />
              </div>
              <div className="relative overflow-hidden mb-5">
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
              <div className="relative overflow-hidden mb-5">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="date"
                  name="date"
                  type="text"
                  placeholder="Expiration date"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="date"
                />
              </div>
              <div className="relative overflow-hidden mb-5">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="cvv"
                  name="cvv"
                  type="number"
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
