import { useState, useEffect } from 'react';
import Navigation from './header-nav';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BackDrop } from './back-drop';
import { useRouter } from 'next/navigation';

const BurgerMenu = () => {
  const router = useRouter();

  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, "You've reached the limit of the input")
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Too Short! min 3'),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({ display: 'none' });

  const handleMenu = () => {
    setIsOpen(() => !isOpen);
    if (isOpen) {
      setHideOrShow(() => {
        return { display: 'none' };
      });
    } else {
      setHideOrShow(() => {
        return { display: 'flex' };
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <div className="w-16 z-30 md:w-7 pb-5 self-end md:self-center md:pb-0 md:mt-4 lg:hidden">
        {isOpen ? (
          <button onClick={handleMenu} className="cursor-pointer z-40">
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <clipPath id="clip329_278">
                  <rect
                    id="x"
                    width="24.000000"
                    height="24.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="x"
                width="24.000000"
                height="24.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip329_278)">
                <path
                  id="Vector"
                  d="M18 6L6 18"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  id="Vector"
                  d="M6 6L18 18"
                  stroke="#FFFFFF"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </button>
        ) : (
          <button onClick={handleMenu} className="cursor-pointer">
            <svg
              className="hidden md:block"
              width="29.000000"
              height="14.000000"
              viewBox="0 0 29 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
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
        )}
      </div>
      {isOpen ? <BackDrop handleMenu={handleMenu} /> : null}
      <div
        style={hideOrShow}
        className="absolute md:rounded md:shadow-[5px_5px_20px_0px_rgb(124,157,150)] z-20 pt-24 md:pt-28 flex-col top-28 md:top-0 w-[390px] md:w-[353px] h-[616px] md:h-[461px] items-center -ml-4 md:-ml-5 bg-footer"
      >
        <Navigation handleMenu={handleMenu} />
        <Formik
          initialValues={{ search: '' }}
          validationSchema={searchSchema}
          onSubmit={(values, actions) => {
            router.push(`/catalog/?search=${values.search}`);
            actions.resetForm();
            setIsOpen(false);
            setHideOrShow({ display: 'none' });
          }}
        >
          {({ errors }) => (
            <Form className="relative font-semibold md:hidden text-xs self-center mt-14">
              <Field
                placeholder="Find the item you need"
                className="w-50 py-1 pl-2 pr-8 outline-none text-white bg-footer border-b placeholder:text-white placeholder:font-normal placeholder:opacity-60 focus:placeholder:text-transparent"
                id="search-burger"
                name="search"
              ></Field>
              <button
                type="submit"
                className="w-10 -right-3 -top-1 h-6 absolute"
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
      </div>
    </>
  );
};

export default BurgerMenu;
