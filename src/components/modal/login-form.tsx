import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import BtnSignUp from './btn-sign';
import BtnLogin from './btn-login';
import Link from 'next/link';
import InstagramImage from './../../../public/icons/instagram-login-icon.svg';
import GoogleImage from './../../../public/icons/google-login-icon.svg';

interface LoginForm {
    handleToogleChange: () => void;
    toogleLogin: boolean;
  }

const LoginForm:React.FC<LoginForm> = ({handleToogleChange, toogleLogin}) => {

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
          <Form className="flex-col shrink-0">
            <div className="flex mb-[18px] items-start">
              <BtnLogin />
              <BtnSignUp handleToogleChange={handleToogleChange} toogleLogin />
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
                className="bg-footer rounded font-semibold text-sm text-white w-[154px] py-2 hover:bg-grayBG transition-colors duration-200 ease-linear"
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
    )
}

export default LoginForm;