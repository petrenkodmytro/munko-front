import CartPage from '@/components/cart/cart';
import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <section className="">
      
      {/* <CartPage /> */}
      {children}
    </section>
  );
};

export default layout;
