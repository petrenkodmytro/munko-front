'use client';

import PaymentMethod from '@/components/cart/paymentMethod';
import { useSession } from 'next-auth/react';
import React from 'react';

type Props = {};

const Payment = (props: Props) => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <section className="px-4 pt-6 pb-10 md:px-5 md:pb-[74px] xl:px-20 xl:pt-9">
      
      <h2 className="font-semibold">Choose a way to pay</h2>{' '}
      <PaymentMethod user={user} />
    </section>
  );
};

export default Payment;
