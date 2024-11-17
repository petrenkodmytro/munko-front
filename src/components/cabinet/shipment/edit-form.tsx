import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { User } from 'next-auth';
import { updateUserDataShipment } from '@/api/api';
import { IUserDataShipment } from '@/types/types';

type Props = {
  setIsEdit: (isEdit: boolean) => void;
  currentUser: User;
  token: string | undefined;
};

type FormValue = {
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  district: string;
  city: string;
  street: string;
  house: string;
  postalCode: string;
};
const EditForm = ({ setIsEdit, currentUser, token }: Props) => {
  const editSchema = Yup.object().shape({});

  console.log(currentUser);

  const handleSubmit = async (values: FormValue) => {
    // console.log(values);
    const userDataShipment: IUserDataShipment = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      address: {
        country: values.country,
        district: values.district,
        city: values.city,
        street: values.street,
        house: values.house,
        postalCode: values.postalCode,
      },
    };
    try {
      await updateUserDataShipment(
        token,
        userDataShipment,
        Number(currentUser.id)
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsEdit(false);
    }
  };

  // {
  //   "data": {
  //       "updateUser": {
  //           "id": 207,
  //           "firstName": "Bob",
  //           "lastName": "Mahoni",
  //           "email": "Bob@ukr.net",
  //           "phone": "+380994675845",
  //           "address": {
  //               "id": 603,
  //               "userId": 207,
  //               "country": "Ukraine",
  //               "district": null,
  //               "city": "Kharkiv",
  //               "street": null,
  //               "house": null,
  //               "postalCode": "63030"
  //           },
  //           "creditCard": []
  //       }
  //   }
  // }

  return (
    <Formik
      initialValues={{
        firstName: currentUser.firstName ?? '',
        lastName: currentUser.lastName ?? '',
        phone: currentUser.phone ?? '',
        country: currentUser.address?.country ?? '',
        district: currentUser.address?.district ?? '',
        city: currentUser.address?.city ?? '',
        street: currentUser.address?.street ?? '',
        house: currentUser.address?.house ?? '',
        postalCode: currentUser.address?.postalCode ?? '',
      }}
      validationSchema={editSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        handleSubmit(values);
      }}
    >
      <Form
        autoComplete="off"
        className="relative pt-7 flex flex-col gap-[14px] w-[286px]"
      >
        <Field
          name="firstName"
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
          id="house"
          name="house"
          placeholder="House"
          type="text"
        />
        <Field
          className="w-full text-black pl-2 outline outline-1 outline-[#B6BBC4] rounded  focus:outline-[#B1B1B1]"
          id="district"
          name="district"
          placeholder="District"
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
          id="postalCode"
          name="postalCode"
          placeholder="postalCode"
          type="text"
        />
        <button className="absolute top-0 right-0 text-[#2271F2] text-xs font-bold">
          Done
        </button>
      </Form>
    </Formik>
  );
};

export default EditForm;
