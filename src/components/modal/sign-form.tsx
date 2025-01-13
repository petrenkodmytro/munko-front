import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signIn } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import BtnSignUp from './btn-sign';
import BtnLogin from './btn-login';
import Link from 'next/link';
import InstagramImage from './../../../public/icons/instagram-login-icon.svg';
import GoogleImage from './../../../public/icons/google-login-icon.svg';
import ShowPasswordIcon from './../../../public/icons/show-password.svg';
import HidePassword from './../../../public/icons/hide-password.svg';
import { useRouter } from 'next/navigation';
import { createNewUser, emailConfirm } from '@/api/api';
import Registered from '../pop-ups/registered';
import RegUnsuccess from '../pop-ups/reg-unsuccess';

interface SignForm {
  handleToogleChange: () => void;
  onDestroy: () => void;
}

const SignForm: React.FC<SignForm> = ({ handleToogleChange, onDestroy }) => {
  const router = useRouter();
  // const [modalState, setModalState] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [regUnsuccess, setRegUnsuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfrimPassword] = useState(false);
  const [isValidForm, setIsValidFrom] = useState(false);
  const [values, setValuesObj] = useState({
    name: '',
    emailSign: '',
    password: '',
    confirmPass: '',
  });
  const [newUser, setNewUser] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const classList =
    'rounded font-semibold text-sm text-white w-full py-2 duration-200 ease-linear';

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

  const handleChange = function (event: React.FormEvent<HTMLElement>) {
    let elem = event.target as HTMLInputElement;

    setValuesObj(prevState => {
      let prevName = { ...prevState };
      if (elem.name === 'name') {
        prevName.name = elem.value;
      } else if (elem.name === 'emailSign') {
        prevName.emailSign = elem.value;
      } else if (elem.name === 'password') {
        prevName.password = elem.value;
      } else if (elem.name === 'confirmPass') {
        prevName.confirmPass = elem.value;
      }
      return prevName;
    });
    setNewUser({
      firstName: values.name,
      email: values.emailSign,
      password: values.password,
    });
  };

  useEffect(() => {
    setIsValidFrom(SignUpSchema.isValidSync(values) && isChecked);
  }, [SignUpSchema, values, isChecked]);

  return (
    <Formik
      initialValues={{
        emailSign: '',
        name: '',
        password: '',
        confirmPass: '',
        tenantKey: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, actions) => {
        const res:any = await createNewUser(newUser);
        if (res) {
          // onDestroy();
          console.log(res);
          await emailConfirm(res.registration.id)
          setRegSuccess(true);
        } else {
          setError(true);
          setRegUnsuccess(true);
        }
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {formik => (
        <Form onChange={handleChange}>
          <div className="flex mb-[18px] items-start">
            <BtnLogin handleToogleChange={handleToogleChange} tooglelogin />
            <BtnSignUp />
          </div>
          <div>
            {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
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
          </div>
          <div className="mb-4">
            <button
              disabled={!isChecked}
              type="submit"
              className={
                isValidForm
                  ? classList + ' bg-darkGreen'
                  : classList + ' bg-grayBG'
              }
            >
              {formik.isSubmitting ? 'Please wait...' : 'SIGN UP'}
            </button>
            <div className="flex mt-3">
              <input
                className="appearance-none border-grayBorder border relative peer shrink-0 bg-white w-[14px] h-[12px] rounded-[5px] mr-1"
                type="checkbox"
                name="privacy policy sign"
                id="privacy policy sign"
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
              <label htmlFor={'privacy policy sign'}>
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
          <p className="font-medium text-center text-[10px] m-auto pb-3">
            or sign in with
          </p>
          <div className="mt-0.5 border border-blueBorder"></div>
          <div className="mt-3 flex justify-center items-center gap-[18px]">
            <button onClick={() => signIn('google')}>
              <GoogleImage />
            </button>
            {/* <Link href={'/'} className="h-[34px]">
              <InstagramImage />
            </Link> */}
          </div>
          <Registered notifyCart={regSuccess} setNotifyCart={setRegSuccess} />
          <RegUnsuccess
            notifyCart={regUnsuccess}
            setNotifyCart={setRegUnsuccess}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SignForm;
