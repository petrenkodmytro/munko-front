import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { User } from 'next-auth';
import { count } from 'console';

type Props = {
  setIsEdit: (isEdit: boolean) => void;
  currentUser: User;
};

const EditForm = ({ setIsEdit, currentUser }: Props) => {
  const editSchema = Yup.object().shape({});

// const handleSubmit = async (values) => {
//   console.log(values);
  
// }

  return (
    <Formik
      initialValues={{ 
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        phone: currentUser.phone,
        street: currentUser.address?.street,
        oblast: currentUser.address?.district,
        city: currentUser.address?.city,
        country: currentUser.address?.country,
        zipcode: currentUser.address?.postalCode,
      }}
      validationSchema={editSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
        setIsEdit(false);
        // handleSubmit(values);
      }}
    >
      <Form className="relative pt-7 flex flex-col gap-[14px] w-[286px]">
        <Field
          name='firstName'
          placeholder="First Name"
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="phone"
          name="phone"
          placeholder="Phone number"
          type="tel"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="street"
          name="street"
          placeholder="Street"
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
          placeholder='Country'
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
