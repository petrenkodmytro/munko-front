import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import BtnSignUp from './btn-sign';
import BtnLogin from './btn-login';
import Link from 'next/link';
import InstagramImage from './../../../public/icons/instagram-login-icon.svg';
import GoogleImage from './../../../public/icons/google-login-icon.svg';
import ShowPasswordIcon from './../../../public/icons/show-password.svg';
import HidePassword from './../../../public/icons/hide-password.svg';
import { useState, useEffect } from 'react';

interface LoginForm {
  handleToogleChange: () => void;
}

const LoginForm: React.FC<LoginForm> = ({ handleToogleChange }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isValidForm, setIsValidFrom] = useState(false);
  const [values, setValuesObj] = useState({
    password: '',
    emailLogin: '',
  });

  const classList =
    'rounded font-semibold text-sm text-white w-[154px] py-2 duration-200 ease-linear';

  const LoginSchema = Yup.object().shape({
    emailLogin: Yup.string()
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
  });

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

  useEffect(() => {
    setIsValidFrom(LoginSchema.isValidSync(values));
  });

  return (
    <Formik
      initialValues={{ emailLogin: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      <Form onChange={handleChange}>
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
            <ErrorMessage
              className="self-start text-[8px] text-[#D63F3F] pl-2"
              component="div"
              name="emailLogin"
            />
          </div>
          <div className="flex flex-col overflow-hidden justify-center mb-5 relative">
            <Field
              type={isShowPassword ? 'text' : 'password'}
              className="w-full p-2 rounded border-grayBorder text-black/60 text-xs focus:outline-none border focus:placeholder:text-transparent"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              className="self-start text-[8px] text-[#D63F3F] pl-2"
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
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className={
              isValidForm ? classList + ' bg-footer' : classList + ' bg-grayBG'
            }
          >
            LOGIN
          </button>
          <Link
            href={'/'}
            className="underline font-semibold text-[9px] mx-3 hover:text-[#686868] duration-200 ease-linear"
          >
            Forgot your password?
          </Link>
        </div>
        <p className="font-medium text-[10px] text-center pb-3">
          or login with
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

export default LoginForm;
