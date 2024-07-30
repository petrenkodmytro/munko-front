'use client';

import { addToCart, getUserCart, removeFromCart } from '@/api/api';
import { ICartCard } from '@/types/types';
import { useSession } from 'next-auth/react';
import { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();
export const CartContext = createContext<{
  cartItemsCtx: number;
  addCardToCartCtx: (
    funkoId: number,
    token: string | undefined
  ) => Promise<void>;
  removeItemCtx: (card: ICartCard) => Promise<void>;
}>({
  cartItemsCtx: 0,
  addCardToCartCtx: async () => {},
  removeItemCtx: async () => {},
});

type Props = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: Props) => {
  const { data: session } = useSession();
  const [cartItemsCtx, setCartItemsCtx] = useState(0);

  useEffect(() => {
    if (session === null) {
      return;
    }
    async function fetchOrders() {
      try {
        const allOrders: ICartCard[] = await getUserCart(session?.token);
        setCartItemsCtx(allOrders.length);
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrders();
  }, [session]);

  const addCardToCartCtx = async (
    funkoId: number,
    token: string | undefined
  ) => {
    try {
      console.log('add card');
      await addToCart(funkoId, token);
      const allOrders: ICartCard[] = await getUserCart(session?.token);
      setCartItemsCtx(allOrders.length);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItemCtx = async (card: ICartCard) => {
    try {
      console.log('remove card');
      await removeFromCart(card.id, session?.token);
      const allOrders: ICartCard[] = await getUserCart(session?.token);
      setCartItemsCtx(allOrders.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItemsCtx,
        addCardToCartCtx,
        removeItemCtx,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
