'use client';

import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import ReviewIcon from './../../../public/icons/reviews-icon.svg';
import IconStar from './../../../public/icons/rating-icon.svg';
import IconStarEmpty from './../../../public/icons/rating-empty-icon.svg';
import IconDel from './../../../public/icons/icon-del.svg';
import { IReview } from '@/types/types';

type Props = {
  reviwe: IReview;
  userId: number;
  setIdRemoveReview: (id: number) => void;
};

const ReviewItem = ({ reviwe, userId, setIdRemoveReview }: Props) => {
  const [isShowMore, setIsShowMore] = useState(false);
  // console.log(reviwe);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 rounded-[50%] bg-[#D9D9D9]">
        <ReviewIcon />{' '}
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-base font-semibold">{reviwe.username}</p>
          {userId === reviwe.userId && (
            <button
              onClick={() => setIdRemoveReview(reviwe.id)}
              className="ml-2 mr-auto px-2 text-red-700"
              type="button"
            >
              <IconDel />
            </button>
          )}
          <Rating
            readOnly={true}
            name="rating-read"
            emptyIcon={<IconStarEmpty />}
            icon={<IconStar />}
            value={reviwe.star}
          />
        </div>
        <div className="">
          {!isShowMore && (
            <p className="text-xs font-medium break-all">
              {reviwe.review.slice(0, 150)}...
            </p>
          )}
          {isShowMore && (
            <p className="text-xs font-medium break-all">{reviwe.review}</p>
          )}
          {reviwe.review.length > 150 && (
            <button
              onClick={toggleReadMoreLess}
              className="underline text-xs font-semibold"
            >
              {isShowMore ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
