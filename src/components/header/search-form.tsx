import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SearchForm = () => {
  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, "You've reached the limit of the input")
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Too Short! min 3'),
  });

  return (
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
            placeholder="SEARCH"
            id="search"
            name="search"
            className={`rounded lg:w-44 xl:w-56 py-1 pl-2 pr-11 font-bold outline-none ${
              !errors.search
                ? 'border-none text-black placeholder:text-blackCustom'
                : errors.search === "You've reached the limit of the input"
                  ? ''
                  : 'border border-red-500 leading-none text-red-500 placeholder:text-red-500'
            }`}
          ></Field>
          <button
            type="submit"
            className="w-10 align-bottom right-0 top-0 h-6 bg-subscribeBtn rounded absolute"
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
          {errors.search ? (
            <div
              className={`absolute text-xs font-medium pl-2 ${
                errors.search === "You've reached the limit of the input"
                  ? 'text-black'
                  : 'text-[#D63F3F]'
              }`}
            >
              {errors.search}
            </div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;

// !errors.search
//   ? 'rounded border-none lg:w-40 xl:w-56 py-1 pl-2 pr-11 font-bold outline-none text-black placeholder:text-black'
//   : 'rounded border border-red-500 leading-none lg:w-40 xl:w-56 py-1 pl-2 pr-11 font-bold outline-none text-red-500 placeholder:text-red-500';
