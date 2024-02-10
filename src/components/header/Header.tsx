'use client';

import React from 'react';
import logo from './../../../public/image/Logo.png';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { error } from 'console';

const Header = () => {
  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, "You've reached the limit of the input")
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers'),
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
        <div className="md:mr-auto w-40 lg:w-48 lg:ml-2.5 md:pt-px">
          <Link href="#">
            <img src={logo.src} alt="Logo" className=" md:px-1.5 lg:px-0" />
          </Link>
        </div>
        <nav className="hidden lg:block mt-5 mr-auto self-center">
          <ul className="text-base text-white font-bold flex justify-between">
            <li className="">
              <Link href="#">About us</Link>
            </li>
            <li className="lg:ml-6 xl:ml-12">
              <Link href="#">Catalog</Link>
            </li>
            <li className="lg:ml-6 xl:ml-12">
              <Link href="#">Coming soon</Link>
            </li>
            <li className="lg:ml-6 xl:ml-12">
              <Link href="#">Sale</Link>
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
          {({ errors, touched }) => (
            <Form className="hidden relative md:block text-xs self-center sm:mt-5 xl:ml-16">
              <Field
                className="rounded w-56 py-1 pl-2 pr-12 font-bold outline-none text-black placeholder:text-black"
                placeholder="SEARCH"
                id="search"
                name="search"
              />
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
        <div className="w-16 pb-6 pr-1 md:pr-0 md:ml-4 xl:ml-5 self-end md:w-auto md:self-center md:pb-0 sm:mt-5">
          <button>
            <svg
              className="inline-block md:hidden"
              width="29.000000"
              height="27.000000"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip294_2485">
                  <rect
                    id="user"
                    width="29.000000"
                    height="27.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="user"
                width="29.000000"
                height="27.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip294_2485)">
                <path
                  id="Vector"
                  d="M23.7949 22.7368L23.7949 20.6052C23.7949 19.4746 23.3052 18.3901 22.4336 17.5906C21.562 16.7913 20.3799 16.342 19.1475 16.342L9.85254 16.342C8.62012 16.342 7.43799 16.7913 6.56641 17.5906C5.69482 18.3901 5.20508 19.4746 5.20508 20.6052L5.20508 22.7368"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  id="Vector"
                  d="M14.8716 12.0791C12.4077 12.0791 10.4102 10.1704 10.4102 7.81592C10.4102 5.46143 12.4077 3.55273 14.8716 3.55273C17.3359 3.55273 19.333 5.46143 19.333 7.81592C19.333 10.1704 17.3359 12.0791 14.8716 12.0791Z"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <svg
              className="hidden md:inline-block"
              width="39.000000"
              height="38.000000"
              viewBox="0 0 39 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip305_559">
                  <rect
                    id="user"
                    width="39.000000"
                    height="38.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="user"
                width="39.000000"
                height="38.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip305_559)">
                <path
                  id="Vector"
                  d="M32 32L32 29C32 27.4087 31.3416 25.8826 30.1694 24.7573C28.9973 23.6321 27.4077 23 25.75 23L13.25 23C11.5923 23 10.0027 23.6321 8.83057 24.7573C7.65845 25.8826 7 27.4087 7 29L7 32"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  id="Vector"
                  d="M20 17C16.6863 17 14 14.3137 14 11C14 7.68628 16.6863 5 20 5C23.3137 5 26 7.68628 26 11C26 14.3137 23.3137 17 20 17Z"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <button className="ml-1.5 md:ml-4">
            <svg
              className="inline-block md:hidden"
              width="25.000000"
              height="25.000000"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip294_2486">
                  <rect
                    id="shopping-cart"
                    width="25.000000"
                    height="25.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="shopping-cart"
                width="25.000000"
                height="25.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip294_2486)">
                <path
                  id="Vector"
                  d="M9.375 22.9165C8.7998 22.9165 8.3335 22.4502 8.3335 21.875C8.3335 21.2996 8.7998 20.8333 9.375 20.8333C9.95068 20.8333 10.417 21.2996 10.417 21.875C10.417 22.4502 9.95068 22.9165 9.375 22.9165Z"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector"
                  d="M20.833 22.9165C20.2578 22.9165 19.7915 22.4502 19.7915 21.875C19.7915 21.2996 20.2578 20.8333 20.833 20.8333C21.4087 20.8333 21.875 21.2996 21.875 21.875C21.875 22.4502 21.4087 22.9165 20.833 22.9165Z"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="1.500000"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector"
                  d="M1.0415 1.04175L5.20801 1.04175L8 14.9897C8.09521 15.4692 8.35596 15.9001 8.73682 16.2065C9.11768 16.5132 9.59424 16.676 10.083 16.6667L20.208 16.6667C20.6973 16.676 21.1738 16.5132 21.5547 16.2065C21.9355 15.9001 22.1963 15.4692 22.2915 14.9897L23.958 6.25L6.25 6.25"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <svg
              className="hidden md:inline-block"
              width="34.000000"
              height="34.000000"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip305_560">
                  <rect
                    id="shopping-cart"
                    width="34.000000"
                    height="34.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="shopping-cart"
                width="34.000000"
                height="34.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip305_560)">
                <path
                  id="Vector"
                  d="M12.7502 31.1665C11.9678 31.1665 11.3335 30.5322 11.3335 29.75C11.3335 28.9675 11.9678 28.3333 12.7502 28.3333C13.5325 28.3333 14.1667 28.9675 14.1667 29.75C14.1667 30.5322 13.5325 31.1665 12.7502 31.1665Z"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector"
                  d="M28.3333 31.1665C27.5508 31.1665 26.9165 30.5322 26.9165 29.75C26.9165 28.9675 27.5508 28.3333 28.3333 28.3333C29.1155 28.3333 29.7498 28.9675 29.7498 29.75C29.7498 30.5322 29.1155 31.1665 28.3333 31.1665Z"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector"
                  d="M1.4165 1.41675L7.08325 1.41675L10.8799 20.386C11.0093 21.0381 11.3643 21.624 11.8821 22.041C12.4001 22.458 13.0483 22.6794 13.7131 22.6667L27.4832 22.6667C28.1479 22.6794 28.7961 22.458 29.3142 22.041C29.832 21.624 30.187 21.0381 30.3164 20.386L32.5833 8.5L8.49976 8.5"
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
      </header>
    </>
  );
};

export default Header;
