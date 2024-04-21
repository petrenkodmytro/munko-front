import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SearchIcon from './../../../public/icons/search-icon.svg';

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
            className={`text-black placeholder:text-blackCustom rounded lg:w-44 xl:w-56 pl-2 pr-11 leading-[30px] font-bold outline-none focus:placeholder:text-transparent ${
              !errors.search
                ? ''
                : 'border h-[30px] border-redError text-redError placeholder:text-redError'
            }`}
          ></Field>
          <button
            type="submit"
            className="align-bottom right-0 top-0 bg-blueBorder rounded absolute"
          >
            <SearchIcon />
          </button>
          {errors.search ? (
            <div
              className={`absolute text-[10px] font-medium pl-2 ${
                errors ? 'text-redError' : null
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
