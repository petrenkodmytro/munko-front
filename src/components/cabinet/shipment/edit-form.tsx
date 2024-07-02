import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

type Props = {
  setIsEdit: (isEdit: boolean) => void;
};

const EditForm = ({ setIsEdit }: Props) => {
  const editSchema = Yup.object().shape({});

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={editSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
        setIsEdit(false);
      }}
    >
      <Form className="relative pt-7 flex flex-col gap-[14px] w-[286px]">
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            placeholder="Username"
            className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          />
          <label className="after:content[' '] pointer-events-none absolute left-0  -top-6 flex h-full w-full ">
            Username
          </label>
        </div>
        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-1 outline-[#B6BBC4] focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-700"
            placeholder=" "
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            Username
          </label>
        </div>
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="name"
          name="name"
          placeholder="Full name"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="phone"
          name="phone"
          placeholder="+38"
          type="number"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="street"
          name="street"
          placeholder="Street address"
          type="text"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="oblast"
          name="oblast"
          placeholder="Oblast"
          type="text"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="city"
          name="city"
          placeholder="City"
          type="text"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="country"
          name="country"
          placeholder="Country"
          type="text"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="zipcode"
          name="zipcode"
          placeholder="ZIP code"
          type="number"
        />
        <button className="absolute top-0 right-0 text-[#2271F2] text-xs font-bold">
          Done
        </button>
      </Form>
    </Formik>
  );
};

export default EditForm;
