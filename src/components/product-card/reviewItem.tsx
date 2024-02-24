'use client';

import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import ReviewIcon from './../../../public/icons/reviews-icon.svg';
import IconStar from './../../../public/icons/rating-icon.svg';
import IconStarEmpty from './../../../public/icons/rating-empty-icon.svg';

type Props = {
  item: string;
};

const ReviewItem = ({ item }: Props) => {
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
          <p className="text-base font-semibold">Alison</p>
          <Rating
            readOnly={true}
            name="rating-read"
            emptyIcon={<IconStarEmpty />}
            icon={<IconStar />}
            value={3}
          />
        </div>
        <div className="w-[284px]">
          {!isShowMore && (
            <p className="text-xs font-medium">{item.slice(0, 230)}...</p>
          )}
          {isShowMore && <p className="text-xs font-medium">{item}</p>}
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
