import React from 'react';
import Send from '../../../public/icons/send.svg';
import UserIcon from './../../../public/icons/user-icon.svg';

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5]">
      <h6>Reviews</h6>
      <div>
        <input type="text" />
        <button type="button" className="bg-subscribeBtn">
          <Send />
        </button>
      </div>
      <ul>
        <li>
          <div className="w-10 h-10 bg-[#D9D9D9]">
            <UserIcon />{' '}
          </div>
          <p>Alison</p>
          <p>Rating</p>
          <p>
            I absolutely adore my Funko Nick Wilde POP Disney figure! The
            attention to detail is fantastic, capturing Nick`s mischievous grin
            and personality perfectly. The colors are vibrant, and the size is
            just right for displaying on my shelf...
          </p>
        </li>
        <li>
          <div className="w-10 h-10 bg-[#D9D9D9]">
            <UserIcon />{' '}
          </div>
          <p>Chris</p>
          <p>Rating</p>
          <p>
            I bought the Funko Nick Wilde POP Disney figure as a gift for my
            friend who`s a huge Zootopia fan, and they absolutely loved it! The
            detail on the figure is incredible, and it`s clear that a lot of
            care went into designing it...
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
