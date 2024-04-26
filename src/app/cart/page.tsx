import Link from 'next/link';
import React from 'react';

type Props = {};

const Cart = (props: Props) => {
  return (
    <section>
      <div className="mb-4 text-xs md:mb-6 md:text-base">
        <Link className="underline" href={'/'}>
          Home page
        </Link>
        / Public Offer
      </div>
      <p>Your cart</p>
    </section>
  );
};

export default Cart;
