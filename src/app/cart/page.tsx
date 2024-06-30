import CartPage from '@/components/cart/cart';
import { Suspense } from 'react';

const Cart = () => {
  return (
    <Suspense>
      <CartPage />
    </Suspense>
  );
};

export default Cart;
