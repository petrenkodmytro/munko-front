import React from 'react';
import CardImage from './cardImage';
import CardReviews from './cardReviews';

type Props = {};

const ProductCard = (props: Props) => {
  //fetch
  return (
    <>
      <CardImage />
      <div className="px-[16px] py-[30px]">
        <h5 className="text-2xl font-bold mb-5">
          Funko Nick Wilde POP Disney: Zootopia Figure
        </h5>
        <p className="text-base font-semibold mb-5">29,88$</p>
        <div className="flex justify-between">
          <button
            type="button"
            className="uppercase px-[25px] py-[14px] rounded-[5px] border-2 border-current text-white bg-[#31304D] text-base not-italic font-bold  lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear"
          >
            add to cart
          </button>
          <button
            type="button"
            className="uppercase px-[25px] py-[14px] rounded-[5px] border-2 border-current text-[#31304D] bg-white text-base not-italic font-bold  lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear"
          >
            Fast order
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5  px-[16px] py-5 mb-5 rounded-[5px] bg-[#F5F5F5]">
        <h6 className="text-xl font-semibold">Description</h6>
        <div className="h-[1px] bg-[#B6BBC4]"></div>
        <p className="text-xs font-medium text-justify">
          The Funko Nick Wilde POP Disney: Zootopia Figure is a 3.75-inch vinyl
          collectible that perfectly captures the witty charm of Nick Wilde from
          the beloved animated film. With vibrant colors and intricate
          detailing, this figure is a must-have for fans of Zootopia and Funko
          POP collectors alike. Display it proudly on shelves or desks to
          showcase your love for this iconic character and the world of
          Zootopia.
        </p>
        <ul className="flex flex-col gap-[2px] text-sm font-semibold">
          <li>
            Item number: <span className="font-medium">243</span>
          </li>
          <li>
            Category: <span className="font-medium">Cartoons</span>
          </li>
          <li>
            License: <span className="font-medium">Disney</span>
          </li>
          <li>
            Sublicense: <span className="font-medium">Zootropia</span>
          </li>
          <li>
            Product type: <span className="font-medium">Pop!</span>
          </li>
        </ul>
      </div>
      <CardReviews />
    </>
  );
};

export default ProductCard;
