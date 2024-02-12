'use client';

import React from 'react';
import logo from './../../../public/image/Logo.png';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserIconMobile from './../../../public/icons/user-icon-mobile.svg';
import BasketIconMobile from './../../../public/icons/basket-icon-mobile.svg';
import BasketIcon from './../../../public/icons/basket-icon.svg';
import UserIcon from './../../../public/icons/user-icon.svg';
import UserIconHover from './../../../public/icons/user-hover-icon.svg';
import BasketIconHover from './../../../public/icons/basket-hover-icon.svg';

const Header = () => {
  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, "You've reached the limit of the input")
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Too Short! min 3'),
  });

  return (
    <>
      <header className="pt-4 pb-2 px-4 md:px-5 lg:px-20 md:pb-5 md:pt-0 bg-header flex justify-between">
        <div className="w-16 md:w-auto pb-6 self-end md:self-center md:pb-0 md:mt-5">
          <button className="cursor-pointer lg:hidden">
            <svg
              className="hidden md:block"
              width="29.000000"
              height="14.000000"
              viewBox="0 0 29 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <line
                id="Line 1"
                x1="0.000000"
                y1="1.000000"
                x2="29.000000"
                y2="1.000000"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
              />
              <line
                id="Line 2"
                x1="0.000000"
                y1="7.000000"
                x2="27.000000"
                y2="7.000000"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
              />
              <line
                id="Line 3"
                x1="0.000000"
                y1="13.000000"
                x2="22.000000"
                y2="13.000000"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
              />
            </svg>
            <svg
              className="md:hidden"
              width="27.000000"
              height="20.000000"
              viewBox="0 0 27 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip294_2487">
                  <rect
                    id="Frame 94"
                    width="27.000000"
                    height="20.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#clip294_2487)">
                <path
                  id="Vector"
                  d="M4.99658 9.23682L21.0034 9.23682"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  id="Vector"
                  d="M5 3.15796L23 3.15796"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  id="Vector"
                  d="M4.98779 15.3948L18.0117 15.3948"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="md:mr-auto w-40 lg:w-48 md:pt-px">
          <Link href={'/'}>
            <img src={logo.src} alt="Logo" className=" md:px-1.5 lg:px-0" />
          </Link>
        </div>
        <nav className="hidden lg:block mt-5 mr-auto self-center">
          <ul className="text-base text-white font-bold flex justify-between">
            <li className="">
              <Link
                href={'/about'}
                className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
              >
                About us
              </Link>
            </li>
            <li className="lg:ml-6 xl:ml-12">
              <Link
                href={'/catalog'}
                className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
              >
                Catalog
              </Link>
            </li>
            <li className="lg:ml-6 xl:ml-12">
              <Link
                href={'/soon'}
                className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
              >
                Coming soon
              </Link>
            </li>
            <li className="lg:ml-6 xl:ml-12">
              <Link
                href={'/sale'}
                className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
              >
                Sale
              </Link>
            </li>
          </ul>
        </nav>
        <Formik
          initialValues={{ search: '' }}
          validationSchema={searchSchema}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
          }}
        >
          {({ errors }) => (
            <Form className="hidden relative md:block text-xs self-center sm:mt-5 xl:ml-16">
              <Field
                className="rounded lg:w-40 xl:w-56 py-1 pl-2 pr-11 font-bold outline-none text-black placeholder:text-black"
                placeholder="SEARCH"
                id="search"
                name="search"
              ></Field>
              <button
                type="submit"
                className="w-10 align-bottom right-0 top-0 h-6 bg-black rounded absolute"
              >
                <svg
                  className="py-0.5 px-2"
                  width="40"
                  height="24"
                  viewBox="0 0 23.938 23.5703"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip2_283">
                      <rect
                        id="search icon"
                        rx="5.000000"
                        width="23.937984"
                        height="23.570248"
                        fill="white"
                        fillOpacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="search icon"
                    rx="5.000000"
                    width="23.937984"
                    height="23.570248"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <g clipPath="url(#clip2_283)">
                    <path
                      id="Vector"
                      d="M10.9714 18.6597C6.5647 18.6597 2.99219 15.1421 2.99219 10.803C2.99219 6.46387 6.5647 2.94629 10.9714 2.94629C15.3784 2.94629 18.9509 6.46387 18.9509 10.803C18.9509 15.1421 15.3784 18.6597 10.9714 18.6597Z"
                      stroke="#FFFFFF"
                      strokeOpacity="1.000000"
                      strokeWidth="2.000000"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector"
                      d="M20.9458 20.624L16.6069 16.3518"
                      stroke="#FFFFFF"
                      strokeOpacity="1.000000"
                      strokeWidth="2.000000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </button>
              {errors.search === "You've reached the limit of the input" ? (
                <ErrorMessage
                  className="absolute text-xs text-black font-medium pl-2"
                  component="div"
                  name="search"
                />
              ) : (
                <ErrorMessage
                  className="absolute text-xs text-[#D63F3F] font-medium pl-2"
                  component="div"
                  name="search"
                />
              )}
            </Form>
          )}
        </Formik>
        <div className="w-16 pb-6 pr-1 md:pr-0 md:ml-2 xl:ml-5 self-end md:w-auto md:self-center md:pb-0 sm:mt-5">
          <button>
            <div className="inline-block md:hidden align-bottom">
              <UserIconMobile />
            </div>
            <div className="hidden md:inline-block">
              <div className="absolute duration-200 ease-linear hover:opacity-0">
                <UserIcon />
              </div>
              <UserIconHover />
            </div>
          </button>
          <button className="ml-1.5 md:ml-2 xl:ml-4">
            <div className="inline-block md:hidden align-bottom">
              <BasketIconMobile />
            </div>
            <div className="hidden md:inline-block">
              <div className="absolute duration-200 ease-linear hover:opacity-0">
                <BasketIcon />
              </div>
              <BasketIconHover />
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
