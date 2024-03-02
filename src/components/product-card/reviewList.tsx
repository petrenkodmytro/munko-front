'use client';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Send from '../../../public/icons/send.svg';
import ReviewItem from './reviewItem';
import Rating from '@mui/material/Rating';
import IconStar from './../../../public/icons/rating-icon.svg';
import IconStarEmpty from './../../../public/icons/rating-empty-icon.svg';

type Props = {};

const reviews = [
  `I absolutely adore my Funko Nick Wilde POP Disney figure! The
attention to detail is fantastic, capturing Nick's mischievous
grin and personality perfectly. The colors are vibrant, and the
size is just right for displaying on my shelf I absolutely adore
my Funko Nick Wilde POP Disney figure! The attention to detail
is fantastic, capturing Nick's mischievous grin and personality
perfectly. The colors are vibrant, and the size is just right
for displaying on my shelf`,
  `I absolutely adore my Funko Nick Wilde POP Disney figure! The
attention to detail is fantastic, capturing Nick's mischievous
grin and personality perfectly. The colors are vibrant, and the
size is just right for displaying on my shelf I absolutely adore
my Funko Nick Wilde POP Disney figure! The attention to detail
is fantastic, capturing Nick's mischievous grin and personality
perfectly. The colors are vibrant, and the size is just right
for displaying on my shelf`,
];

const CardReviews = (props: Props) => {
  const [ratingValue, setRatingValue] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-5 px-[16px] py-5 rounded-[5px] bg-[#F5F5F5] md:pl-8 md:pr-[84px] md:py-[22px] xl:w-[627px] xl:px-8">
      <h6 className="text-xl font-semibold md:text-[26px]">Reviews</h6>
      <div className="h-[1px] bg-[#B6BBC4]"></div>
      <Formik
        initialValues={{
          rating: ratingValue,
          feedbacText: '',
        }}
        validationSchema={Yup.object({
          rating: Yup.number().required(),
          feedbacText: Yup.string()
            .max(300, 'Must be 300 characters or less')
            .required('Field review is required'),
        })}
        onSubmit={(values, actions) => {
          const review = { rating: ratingValue, review: values.feedbacText };
          alert(JSON.stringify(review, null, 2));
          setRatingValue(0);
          actions.resetForm();
        }}
      >
        <Form className="flex justify-center items-center gap-3 bg-white">
          <Field
            className="w-full text-black pl-3 py-[5px] focus:outline-none font-semibold text-[10px]"
            id="feedbacText"
            name="feedbacText"
            placeholder="Write a review or rate your purchase  "
          />
          <Rating
            name="rating"
            emptyIcon={<IconStarEmpty />}
            icon={<IconStar />}
            value={ratingValue}
            onChange={(_, newValue) => {
              setRatingValue(newValue);
            }}
          />
          <button
            type="submit"
            className="flex justify-center items-center rounded-[5px] text-white bg-subscribeBtn duration-200 ease-linear w-10 h-8 px-1 py-2 shrink-0  lg:hover:bg-white lg:hover:text-subscribeBtn lg:hover:border-[3px] lg:hover:border-subscribeBtn "
          >
            <Send />
          </button>
        </Form>
      </Formik>

      <div className="h-[292px] custom overflow-y-scroll xl:h-[200px]">
        <ul className="flex flex-col gap-5 pr-3 md:pr-5">
          {reviews.map((item, index) => (
            <li key={index} className="flex gap-4">
              <ReviewItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardReviews;
