import Notification from '../notification-modal/notification';
import { PopupProps } from '@/types/types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import ShowPasswordIcon from './../../../public/icons/show-password.svg';
import HidePassword from './../../../public/icons/hide-password.svg';
import { changePassword } from '@/api/api';

export default function ChangePassword({
  notifyCart,
  setNotifyCart,
  handleOpenPopUp,
  resetToken,
}: PopupProps) {
  const [inputValue, setInputValue] = useState('');
  const [inputConfirmValue, setInputConfirmValue] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [error, setError] = useState(false);

  const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Too Short! min 6')
      .max(18, 'Too Long! max 18')
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Required'),
    confirmPass: Yup.string()
      .min(6, 'Too Short! min 6')
      .max(18, 'Too Long! max 18')
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Required'),
  });

  const showPassword = function () {
    setIsShowPassword(!isShowPassword);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (event.target.name === 'password') {
      setInputValue(event.target.value);
      setError(false);
    } else {
      setInputConfirmValue(event.target.value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (resetToken) {
      const response = await changePassword(
        resetToken,
        inputConfirmValue,
        inputValue
      );
      if (response) {
        handleOpenPopUp ? handleOpenPopUp() : null;
      } else {
        setError(true);
      }
    }
  };

  const handelSetNotifyCart = (modalState:boolean)=>{
    setNotifyCart(modalState);
    setError(false);
  }

  return (
    <Notification notify={notifyCart} setNotify={handelSetNotifyCart}>
      <div className="flex flex-col gap-2 items-start px-7 pt-11 pb-5 min-w-[342px] w-full">
        {' '}
        <h3 className="text-base font-semibold self-center">
          CHANGE THE PASSWORD
        </h3>
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
            <div className="relative overflow-hidden mb-2.5">
              <Field
                type={isShowPassword ? 'text' : 'password'}
                className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                id="password"
                name="password"
                placeholder="Previous password"
              />
              <ErrorMessage
                className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                component="div"
                name="password"
              />
              {error ? (
                <div
                  className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                  // name="password"
                >
                  Password doesn&apos;t correct
                </div>
              ) : null}
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={showPassword}
              >
                {isShowPassword ? <ShowPasswordIcon /> : <HidePassword />}
              </div>
            </div>
            <div className="relative overflow-hidden mb-4">
              <Field
                type={isShowNewPassword ? 'text' : 'password'}
                className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                id="confirmPass"
                name="confirmPass"
                placeholder="New password"
              />
              <ErrorMessage
                className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
                component="div"
                name="confirmPass"
              />
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setIsShowNewPassword(!isShowNewPassword)}
              >
                {isShowNewPassword ? <ShowPasswordIcon /> : <HidePassword />}
              </div>
            </div>
            <button
              type="submit"
              className={
                'rounded self-center font-semibold text-sm text-white mb-2 w-[154px] py-2 duration-200 ease-linear bg-darkGreen'
              }
            >
              SAVE
            </button>
            <button
              onClick={handleOpenPopUp}
              className="underline font-semibold text-[9px] mx-3 hover:text-[#686868] duration-200 ease-linear"
            >
              Forgot your password?
            </button>
          </Form>
        </Formik>
      </div>
    </Notification>
  );
}
