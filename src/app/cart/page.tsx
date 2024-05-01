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
        /
      </div>
      <h3>Your cart</h3>
      <div>
        {/* your cart */}
        <div>cards</div>
        <div>
          <p>Have a coupon? Enter your code.</p>
          <input type="text" />
          <button type="button">Apply</button>
        </div>
        {/* cart totals */}
        <div>
          <h4 className="uppercase">Cart totals</h4>
          <p>Total</p>
          <div>
            <Link className="" href={'/catalog'}>
              Continue shopping
            </Link>
            <button type="button">PROCEED TO CHACKOUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
