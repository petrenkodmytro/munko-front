'use client';

import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Send from '../../../public/icons/send.svg';
import ReviewItem from './reviewItem';
import Rating from '@mui/material/Rating';
import IconStar from './../../../public/icons/rating-icon.svg';
import IconStarEmpty from './../../../public/icons/rating-empty-icon.svg';
import { IReview } from '@/types/types';
import { useSession } from 'next-auth/react';
import { addReview, deleteReview, getReviewsById } from '@/api/api';
import Notification from '../notification-modal/notification';

type Props = {
  cardId: string;
};

type Review = {
  rating: number | null;
  review: string;
};

const CardReviews = ({ cardId }: Props) => {
  const [notify, setNotify] = useState(false);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const [newReview, setNewReview] = useState<Omit<IReview, 'id'> | null>(null);
  const [idRemoveReview, setIdRemoveReview] = useState<number | null>(null);

  const { data: session } = useSession();
  const token: string = session?.user?.token;
  console.log(session?.user);

  useEffect(() => {
    // console.log('useEffect 1');
    async function fetchReviewsById() {
      try {
        if (newReview === null) {
          const reviews = await getReviewsById(cardId);
          setReviews(reviews);
        } else {
          await addReview(newReview, token);
          const reviews = await getReviewsById(cardId);
          setReviews(reviews);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviewsById();
  }, [cardId, newReview, token]);

  useEffect(() => {
    // console.log('useEffect 2');
    async function delReviewsById() {
      try {
        if (idRemoveReview === null) {
          return;
        } else {
          await deleteReview(idRemoveReview, token);
          const reviews = await getReviewsById(cardId);
          setReviews(reviews);
        }
      } catch (error) {
        console.log(error);
      }
    }
    delReviewsById();
  }, [cardId, idRemoveReview, token]);

  const isUserReview = reviews
    .map(review => review.userId)
    .includes(session?.user?.id);
  // console.log(isUserReview);

  const createReview = (review: Review) => {
    if (session === null) {
      setNotify(true);
      return;
    }
    const newReview = {
      userId: session?.user?.id,
      funkoId: Number(cardId),
      review: review.review,
      star: ratingValue,
      username: session.user?.firstName,
    };
    // console.log(newReview);
    setNewReview(newReview);
  };

 
  return (
    <div className="flex flex-col gap-5 px-[16px] py-5 rounded-[5px] bg-[#F5F5F5] md:pl-8 md:pr-[84px] md:py-[22px] xl:w-[627px] xl:px-8">
      <h6 className="text-xl font-semibold md:text-[26px]">Reviews</h6>
      <div className="h-[1px] bg-[#B6BBC4]"></div>
      {!isUserReview && (
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
            createReview(review);
            setRatingValue(0);
            actions.resetForm();
          }}
        >
          <Form className="relative flex justify-center items-center gap-3 bg-white">
            <Field
              className="w-full text-black pl-3 py-[5px] focus:outline-none font-semibold text-[10px]"
              id="feedbacText"
              name="feedbacText"
              placeholder="Write a review or rate your purchase"
            />
            <ErrorMessage
              className="absolute top-8 left-0 text-[8px] text-[#D63F3F] font-medium pl-2"
              component="div"
              name="feedbacText"
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
      )}

      <div className="max-h-[292px] custom overflow-y-scroll md:h-[200px]">
        <ul className="flex flex-col gap-5 pr-3 md:pr-5">
          {reviews.map((reviwe, index) => (
            <li key={index} className="flex gap-4">
              <ReviewItem
                reviwe={reviwe}
                userId={session?.user?.id}
                setIdRemoveReview={setIdRemoveReview}
              />
            </li>
          ))}
        </ul>
      </div>
      <Notification notify={notify} setNotify={setNotify}>
        <p>Notify</p>
      </Notification>
    </div>
  );
};

export default CardReviews;
