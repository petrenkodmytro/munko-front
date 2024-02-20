import React from 'react';
import { Rating } from "@material-tailwind/react";
import Send from '../../../public/icons/send.svg';
import ReviewIcon from './../../../public/icons/reviews-icon.svg';

type Props = {};

const CardReviews = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 px-[16px] py-5 rounded-[5px] bg-[#F5F5F5]">
      <h6 className="text-xl font-semibold">Reviews</h6>
      <div className="h-[1px] bg-[#B6BBC4]"></div>
      <div>
        <input type="text" />
        <button type="button" className="bg-subscribeBtn">
          <Send />
        </button>
      </div>
      <ul>
        <li className="flex gap-4">
          <div className="flex flex-shrink-0 justify-center items-center w-10 h-10 rounded-[50%] bg-[#D9D9D9]">
            <ReviewIcon />{' '}
          </div>
          <div>
            <div className="flex justify-between">
              <p>Alison</p>
              <Rating value={4} readonly placeholder={1} />
            </div>

            <p className="text-xs font-medium">
              I absolutely adore my Funko Nick Wilde POP Disney figure! The
              attention to detail is fantastic, capturing Nick`s mischievous
              grin and personality perfectly. The colors are vibrant, and the
              size is just right for displaying on my shelf...
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardReviews;
