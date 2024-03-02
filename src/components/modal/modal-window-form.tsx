'use client';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useState } from 'react';

const ModalWndForm = () => {
  const emailSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, 'Too Long! max 45')
      .email()
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/,
        'Must be a valid email'
      )
      .required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={emailSchema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.resetForm();
        }}
      >
        <Form className="flex flex-col shrink-0">
          <div className="flex mb-[30px]">
            <button className="text-center text-lg font-bold mr-6">
              LOGIN
            </button>
            <button className="text-center text-lg font-bold">SIGN UP</button>
          </div>
          <div>
            <div className="flex flex-col overflow-hidden justify-center rounded mb-[14px]">
              <Field
                className="w-full p-2 border-grayBorder text-black/60 text-xs focus:outline-none border"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                className="self-start text-xs text-[#D63F3F] font-medium pl-2"
                component="div"
                name="email"
              />
            </div>
            <div className="flex flex-col overflow-hidden justify-center rounded mb-5">
              <Field
                className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                className="self-start text-xs text-[#D63F3F] font-medium pl-2"
                component="div"
                name="password"
              />
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-header rounded font-semibold text-sm text-white w-[154px] py-2"
            >
              LOGIN
            </button>
            <Link
              href={'/'}
              className="underline font-semibold text-[9px] mx-3"
            >
              Forgot your password?
            </Link>
          </div>
          <p className="font-medium text-[10px] m-auto">or login with</p>
        </Form>
      </Formik>
    </>
  );
};

export default ModalWndForm;
