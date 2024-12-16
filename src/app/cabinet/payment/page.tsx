import React from 'react';

type Props = {};

const Payment = (props: Props) => {
  return (
    <div>
      <h4 className="uppercase text-2xl font-semibold md:text-3xl">
        PAYMENT METHOD
      </h4>{' '}
      <p className="font-semibold py-8">Choose a way to pay</p>{' '}
    </div>
  );
};

export default Payment;
