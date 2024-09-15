import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { emailConfirm } from '@/api/api';

export default function InputNewEmail({
  notifyCart,
  setNotifyCart,
  handleOpenPopUp,
  userId,
}: PopupProps) {
  const [inputValue, setInputValue] = useState('');

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, 'Too Long! max 45')
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/,
        'Must be a valid email'
      )
      .required('Required'),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (event.target.name === 'email') {
      setInputValue(event.target.value);
    }
  };

  const handleSubmit = async () => {
    if (userId) {
      const response = await emailConfirm(Number(userId), inputValue);
      if (response) {
        handleOpenPopUp ? handleOpenPopUp() : null;
      } else {
        console.log('Error: something went wrong.');
      }
    }
  };

  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col gap-2 items-start px-7 pb-10 pt-14 md:py-11 min-w-[342px] w-full">
        {' '}
        <h3 className="text-lg font-bold self-center">ENTER NEW EMAIL</h3>
        <Formik
          initialValues={{
            email: '',
            tenantKey: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            await handleSubmit();
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {formik => (
            <Form className="w-full flex flex-col" onChange={handleInputChange}>
              <div className="relative overflow-hidden mb-5">
                <Field
                  className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="email"
                />
              </div>
              <button
                type="submit"
                className={
                  'rounded self-center font-semibold text-sm text-white w-[154px] py-2 duration-200 ease-linear bg-footer'
                }
              >
                {formik.isSubmitting ? 'Please wait...' : 'SEND'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Notification>
  );
}
