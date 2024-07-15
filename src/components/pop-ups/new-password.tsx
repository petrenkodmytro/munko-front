import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import ShowPasswordIcon from './../../../public/icons/show-password.svg';
import HidePassword from './../../../public/icons/hide-password.svg';
import { resetPassword } from '@/api/api';
import { log } from 'console';

export default function InputNewPassword({
  notifyCart,
  setNotifyCart,
  handleOpenPopUp,
  resetToken,
}: PopupProps) {
  const [inputValue, setInputValue] = useState('');
  const [inputConfirmValue, setInputConfirmValue] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfrimPassword] = useState(false);

  const SignUpSchema = Yup.object().shape({
    emailSign: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, 'Too Long! max 45')
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/,
        'Must be a valid email'
      )
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short! min 6')
      .max(18, 'Too Long! max 18')
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Required'),
    confirmPass: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
    name: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, 'Too Long! max 45')
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Required'),
  });

  const showPassword = function () {
    setIsShowPassword(!isShowPassword);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (event.target.name === 'password') {
      setInputValue(event.target.value);
    } else {
      setInputConfirmValue(event.target.value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (resetToken && inputValue === inputConfirmValue) {
      const response = await resetPassword(resetToken, inputValue);
      if (response) {
        handleOpenPopUp ? handleOpenPopUp() : null;
      } else {
        console.log('Error: something went wrong.');
      }
    }
  };

  return (
    <Notification notify={notifyCart} setNotify={setNotifyCart}>
      <div className="flex flex-col gap-2 items-start px-16 py-11 min-w-[410px] w-full">
        {' '}
        <h3 className="text-lg font-bold">ENTER NEW PASSWORD</h3>
        <Formik
          initialValues={{
            password: '',
            confirmPass: '',
            tenantKey: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          <Form
            className="w-full flex flex-col"
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          >
            <div className="relative overflow-hidden mb-5">
              <Field
                type={isShowPassword ? 'text' : 'password'}
                className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                component="div"
                name="password"
              />
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={showPassword}
              >
                {isShowPassword ? <ShowPasswordIcon /> : <HidePassword />}
              </div>
            </div>
            <div className="relative overflow-hidden mb-5">
              <Field
                type={isShowConfirmPassword ? 'text' : 'password'}
                className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                id="confirmPass"
                name="confirmPass"
                placeholder="Confirm the password"
              />
              <ErrorMessage
                className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                component="div"
                name="confirmPass"
              />
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setIsShowConfrimPassword(!isShowConfirmPassword)}
              >
                {isShowConfirmPassword ? (
                  <ShowPasswordIcon />
                ) : (
                  <HidePassword />
                )}
              </div>
            </div>
            <button
              type="submit"
              className={
                'rounded self-center font-semibold text-sm text-white w-[154px] py-2 duration-200 ease-linear bg-footer'
              }
            >
              SEND
            </button>
          </Form>
        </Formik>
      </div>
    </Notification>
  );
}
