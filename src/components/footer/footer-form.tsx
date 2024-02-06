"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";

const FooterForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const emailSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short! min 3")
      .max(45, "Too Long! max 45")
      .email()
      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/, "Must be a valid email")
      .required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={emailSchema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.resetForm();
        }}>
        <Form className="flex flex-col place-items-center md:place-items-start">
          <label className="text-lg not-italic font-semibold mb-3" htmlFor="Email">
            Subscribe to our news letter
          </label>
          <div className="flex overflow-hidden justify-center rounded-[5px] bg-white w-[284px]">
            <Field
              className="w-full text-black p-2 focus:outline-none"
              id="email"
              name="email"
              placeholder="example@com.ua"
            />
            <button
              type="submit"
              disabled={!isChecked}
              className="duration-200 ease-linear disabled:bg-[#B1B1B1] flex w-11 h-10 justify-center items-center gap-2.5 shrink-0 px-2.5 py-3 rounded-[5px] bg-subscribeBtn text-lg not-italic font-semibold leading-[normal] lg:enabled:hover:bg-white lg:enabled:hover:text-subscribeBtn lg:enabled:hover:border-[3px] lg:hover:border-subscribeBtn">
              OK
            </button>
          </div>
          <ErrorMessage className="self-start text-xs text-pink-900" component="div" name="email" />
          <div className="flex mt-3">
            <input
              className="w-[22px] h-[18px] rounded-[5px] mr-1"
              type="checkbox"
              name="privacy policy"
              id="privacy policy"
              defaultChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
            />
            <p className="text-base not-italic font-normal leading-[normal]">
              I agree with the{" "}
              <Link
                href={"/"}
                className="text-base not-italic font-normal leading-[normal] underline duration-200 ease-linear lg:hover:text-[#C3C3C3]">
                Privacy Policy
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FooterForm;
