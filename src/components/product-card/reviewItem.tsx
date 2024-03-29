'use client';

import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import ReviewIcon from './../../../public/icons/reviews-icon.svg';
import IconStar from './../../../public/icons/rating-icon.svg';
import IconStarEmpty from './../../../public/icons/rating-empty-icon.svg';
import { IReview } from '@/types/types';

type Props = {
  reviwe: IReview;
};

const ReviewItem = ({ reviwe }: Props) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 rounded-[50%] bg-[#D9D9D9]">
        <ReviewIcon />{' '}
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-base font-semibold">{reviwe.username}</p>
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
            <p className="text-xs font-medium">{reviwe.review.slice(0, 230)}...</p>
          )}
          {isShowMore && <p className="text-xs font-medium">{reviwe.review}</p>}
          <button
            onClick={toggleReadMoreLess}
            className="underline text-xs font-semibold"
          >
            {isShowMore ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
