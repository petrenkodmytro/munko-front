import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import BtnSignUp from './btn-sign';
import BtnLogin from './btn-login';
import Link from 'next/link';
import InstagramImage from './../../../public/icons/instagram-login-icon.svg';
import GoogleImage from './../../../public/icons/google-login-icon.svg';

interface SignForm {
  handleToogleChange: () => void;
  toogleLogin: boolean;
}

const SignForm: React.FC<SignForm> = ({ handleToogleChange, toogleLogin }) => {
  const [isChecked, setIsChecked] = useState(false);

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
    <Formik
      initialValues={{ email: '' }}
      validationSchema={emailSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      <Form className="flex flex-col shrink-0">
        <div className="flex mb-[18px] items-start">
          <BtnLogin handleToogleChange={handleToogleChange} tooglelogin/>
          <BtnSignUp />
        </div>
        <div>
          <div className="flex flex-col overflow-hidden justify-center rounded mb-[14px]">
            <Field
              className="w-full p-2 border-grayBorder text-black/60 text-xs focus:outline-none border"
              id="name"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              className="self-start text-xs text-[#D63F3F] font-medium pl-2"
              component="div"
              name="name"
            />
          </div>
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
          <div className="flex flex-col overflow-hidden justify-center rounded mb-5">
            <Field
              className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border"
              id="password"
              name="password"
              placeholder="Confirm the password"
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
            className="bg-footer rounded font-semibold text-sm text-white w-full py-2 hover:bg-grayBG transition-colors duration-200 ease-linear"
          >
            SIGN UP
          </button>
          <div className="flex mt-3">
            <input
              className="appearance-none border-grayBorder border relative peer shrink-0 bg-white w-[14px] h-[12px] rounded-[5px] mr-1"
              type="checkbox"
              name="privacy policy"
              id="privacy policy"
              defaultChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
            />
            <svg
              className="absolute  hidden peer-checked:block pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
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
            <label htmlFor={'privacy policy'}>
              <p className="not-italic text-black text-[10px] font-normal leading-[normal]">
                I agree with the{' '}
                <Link
                  href={'/'}
                  className="text-[10px] not-italic font-normal leading-[normal] underline duration-200 ease-linear"
                >
                  Privacy Policy
                </Link>
              </p>
            </label>
          </div>
        </div>
        <p className="font-medium text-[8px] m-auto pb-3">or sign up with</p>
        <div className="mt-0.5 border border-[#31304D]"></div>
        <div className="mt-3 flex justify-center items-center gap-[18px]">
          <Link href={'/'}>
            <GoogleImage />
          </Link>
          <Link href={'/'} className="h-[34px]">
            <InstagramImage />
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default SignForm;
