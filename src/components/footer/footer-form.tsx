'use client';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useState } from 'react';

const FooterForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const emailSchema = Yup.object().shape({
    email: Yup.string()
      .min(3)
      .max(45)
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
          <label
            className="text-lg not-italic font-semibold mb-3 md:text-base"
            htmlFor="Email"
          >
            Subscribe to our newsletter
          </label>
          <div>
            <div className="flex overflow-hidden justify-center rounded-[5px] bg-white w-[284px] md:w-[226px] lg:w-[284px]">
              <Field
                className="w-full text-black pl-2 focus:outline-none invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                id="email"
                name="email"
                placeholder="example@com.ua"
                
              />
              
              <button
                type="submit"
                disabled={!isChecked}
                className="duration-200 ease-linear disabled:bg-[#B1B1B1] flex w-11 h-10 justify-center items-center shrink-0 px-2.5 py-3 rounded-[5px] bg-subscribeBtn text-lg not-italic font-semibold leading-[normal] md:w-8 md:h-[25px] lg:enabled:hover:bg-white lg:enabled:hover:text-subscribeBtn lg:enabled:hover:border-[3px] lg:hover:border-subscribeBtn lg:w-11 lg:h-10"
              >
                OK
              </button>
            </div>
            <ErrorMessage
              className="self-start text-xs text-[#D63F3F] font-medium pl-2"
              component="div"
              name="email"
            />
          </div>

          <div className="flex mt-3">
            <input
              className="appearance-none relative peer shrink-0 bg-white w-[22px] h-[18px] rounded-[5px] mr-1"
              type="checkbox"
              name="privacy policy"
              id="privacy policy"
              defaultChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
            />
            <svg
              className="absolute  hidden peer-checked:block pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
            >
              <rect y="0" width="22" height="18" rx="5" fill="white" />
              <path
                d="M17 7L9.4375 14L6 10.8182"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base not-italic font-normal leading-[normal] md:flex md:flex-col lg:block">
              I agree with the{' '}
              <Link
                href={'/privancy-policy'}
                className="text-base not-italic font-normal leading-[normal] underline duration-200 ease-linear lg:hover:text-[#C3C3C3]"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
         <input type='email' className='text-black "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "'/>
        </Form>
      </Formik>
    </>
  );
};

export default FooterForm;
