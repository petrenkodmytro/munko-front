import React from 'react';
import Reviews from '../reviews/Reviews';
import CardImage from './cardImage';

type Props = {};

const ProductCard = (props: Props) => {
  //fetch
  return (
    <>
      <div>
        <CardImage/>
        <h5>Funko Nick Wilde POP Disney: Zootopia Figure</h5>
        <p>29,88$</p>
        <div>
          <button type='button' className='uppercase px-[49px] py-[6px] rounded-[5px] border-2 border-current text-white bg-[#31304D] text-base not-italic font-bold  lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear'>add to cart</button>
          <button type='button' className='uppercase px-[49px] py-[6px] rounded-[5px] border-2 border-current text-[#31304D] bg-white text-base not-italic font-bold  lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear'>Fast order</button>
        </div>
      </div>
      <div>
        <h6>Description</h6>
        <p>
          The Funko Nick Wilde POP Disney: Zootopia Figure is a 3.75-inch vinyl
          collectible that perfectly captures the witty charm of Nick Wilde from
          the beloved animated film. With vibrant colors and intricate
          detailing, this figure is a must-have for fans of Zootopia and Funko
          POP collectors alike. Display it proudly on shelves or desks to
          showcase your love for this iconic character and the world of
          Zootopia.
        </p>
        <ul>
          <li>
            Item number: <span>243</span>
          </li>
          <li>
            Category: <span>Cartoons</span>
          </li>
          <li>
            License: <span>Disney</span>
          </li>
          <li>
            Sublicense: <span>Zootropia</span>
          </li>
          <li>
            Product type: <span>Pop!</span>
          </li>
        </ul>
      </div>
      <Reviews />
     
    </>
  );
};

export default ProductCard;
