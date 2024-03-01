import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import BtnSignUp from './btn-sign';
import BtnLogin from './btn-login';
import Link from 'next/link';
import InstagramImage from './../../../public/icons/instagram-login-icon.svg';
import GoogleImage from './../../../public/icons/google-login-icon.svg';
import ShowPasswordIcon from './../../../public/icons/show-password.svg';
import HidePassword from './../../../public/icons/hide-password.svg';

interface SignForm {
  handleToogleChange: () => void;
}

const SignForm: React.FC<SignForm> = ({ handleToogleChange }) => {
  const [isChecked, setIsChecked] = useState(false);
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
    confirmPass: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords does not match'
    ),
    name: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, 'Too Long! max 45')
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Required'),
  });

  const showPassword = function (event: React.SyntheticEvent<EventTarget>) {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Formik
      initialValues={{ emailSign: '', name: '', password: '', confirmPass: '' }}
      validationSchema={SignUpSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      <Form>
        <div className="flex mb-[18px] items-start">
          <BtnLogin handleToogleChange={handleToogleChange} tooglelogin />
          <BtnSignUp />
        </div>
        <div>
          <div className="flex flex-col overflow-hidden justify-center mb-[14px]">
            <Field
              className="w-full p-2 border-grayBorder rounded text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
              id="name"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
              component="div"
              name="name"
            />
          </div>
          <div className="flex flex-col overflow-hidden justify-center mb-[14px]">
            <Field
              className="w-full p-2 border-grayBorder rounded text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
              id="emailSign"
              name="emailSign"
              placeholder="Email"
            />
            <ErrorMessage
              className="self-start text-[8px] text-[#D63F3F] font-medium pl-2"
              component="div"
              name="emailSign"
            />
          </div>
          <div className="flex flex-col relative overflow-hidden justify-center mb-5">
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
          <div className="flex flex-col relative overflow-hidden justify-center mb-5">
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
            <div className="absolute right-2 top-2 cursor-pointer" onClick={()=> setIsShowConfrimPassword(!isShowConfirmPassword)}>
            {isShowConfirmPassword ? <ShowPasswordIcon /> : <HidePassword />}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-footer rounded font-semibold text-sm text-white w-full py-2 hover:bg-grayBG duration-200 ease-linear"
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
                  className="text-[10px] not-italic font-normal leading-[normal] underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </label>
          </div>
        </div>
        <p className="font-medium text-center text-[8px] m-auto pb-3">
          or sign up with
        </p>
        <div className="mt-0.5 border border-blueBorder"></div>
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
