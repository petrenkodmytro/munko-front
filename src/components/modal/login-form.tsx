'use client';

import { Formik, Field, Form } from 'formik';
import BtnSignUp from './btn-sign';
import BtnLogin from './btn-login';
import Link from 'next/link';
import InstagramImage from './../../../public/icons/instagram-login-icon.svg';
import GoogleImage from './../../../public/icons/google-login-icon.svg';
import ShowPasswordIcon from './../../../public/icons/show-password.svg';
import HidePassword from './../../../public/icons/hide-password.svg';
import { useEffect, useState } from 'react';
import { getCsrfToken, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';

interface LoginForm {
  handleToogleChange: () => void;
  onDestroy: () => void;
  csrfToken?: string;
  serverError?: string;
  handleForgetOpen: () => void;
}

const LoginForm: React.FC<LoginForm> = ({
  handleToogleChange,
  onDestroy,
  csrfToken,
  serverError,
  handleForgetOpen
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValuesObj] = useState({
    password: '',
    emailLogin: '',
  });

  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const showPassword = function (event: React.SyntheticEvent<EventTarget>) {
    setIsShowPassword(!isShowPassword);
  };

  const handleChange = function (event: React.FormEvent<HTMLElement>) {
    let elem = event.target as HTMLInputElement;

    setValuesObj(prevState => {
      let prevName = { ...prevState };
      if (elem.name === 'password') {
        prevName.password = elem.value;
      } else if (elem.name === 'emailLogin') {
        prevName.emailLogin = elem.value;
      }
      return prevName;
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email: values.emailLogin,
      password: values.password,
      callbackUrl: `${window.location.origin}`,
    });

    if (res?.error) {
      setError(true);
      setErrorText('Login or password is invalid');
    } else {
      onDestroy();
    }
  };

  useEffect(() => {
    if (serverError) {
      setError(true);
      setErrorText('Server side error. Try again later.');
    }
  }, [serverError, error]);

  return (
    <Formik
      initialValues={{ emailLogin: '', password: '' }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {formik => (
        <Form onChange={handleChange} onSubmit={handleSubmit}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="flex mb-[18px] items-start">
            <BtnLogin />
            <BtnSignUp handleToogleChange={handleToogleChange} toogleLogin />
          </div>
          <div>
            <div className="flex flex-col font-medium overflow-hidden justify-center mb-[14px]">
              <Field
                className="w-full p-2 border-grayBorder rounded text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                id="emailLogin"
                name="emailLogin"
                placeholder="Email"
              />
              {error && (
                <div className="self-start text-[8px] text-[#D63F3F] pl-2">
                  <span>{errorText}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col overflow-hidden justify-center mb-5 relative">
              <Field
                type={isShowPassword ? 'text' : 'password'}
                className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
                id="password"
                name="password"
                placeholder="Password"
              />
              {error && (
                <div className="self-start text-[8px] text-[#D63F3F] pl-2">
                  <span>{errorText}</span>
                </div>
              )}
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={showPassword}
              >
                {isShowPassword ? <ShowPasswordIcon /> : <HidePassword />}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className={
                'rounded font-semibold text-sm text-white w-[154px] py-2 duration-200 ease-linear bg-footer'
              }
            >
              {formik.isSubmitting ? 'Please wait...' : 'LOGIN'}
            </button>
            <button
              onClick={handleForgetOpen}
              className="underline font-semibold text-[9px] mx-3 hover:text-[#686868] duration-200 ease-linear"
            >
              Forgot your password?
            </button>
          </div>
          <p className="font-medium text-[10px] text-center pb-3">
            or login with
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
        </Form>
      )}
    </Formik>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};

export default LoginForm;
