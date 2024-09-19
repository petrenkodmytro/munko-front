'use client';

import {
  addToCart,
  updateFavorite,
  getUserCart,
  GetUserFavorite,
  removeFromCart,
} from '@/api/api';
import { ICard, ICartCard } from '@/types/types';
import { useSession } from 'next-auth/react';
import { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();
export const Context = createContext<{
  ordersCtx: ICartCard[];
  cartItemsCtx: number;
  favoriteItemsCtx: number[];
  addCardToCartCtx: (
    funkoId: number,
    token: string | undefined
  ) => Promise<void>;
  removeItemFromCartCtx: (card: ICartCard) => Promise<void>;
  toggleFavoriteCtx: (
    userId: number,
    funkoId: number,
    token: string | undefined
  ) => Promise<void>;
}>({
  ordersCtx: [],
  cartItemsCtx: 0,
  favoriteItemsCtx: [],
  addCardToCartCtx: async () => {},
  removeItemFromCartCtx: async () => {},
  toggleFavoriteCtx: async () => {},
});

type Props = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: Props) => {
  const { data: session } = useSession();
  const [cartItemsCtx, setCartItemsCtx] = useState(0);
  const [ordersCtx, setOrdersCtx] = useState<ICartCard[]>([]);
  const [favoriteItemsCtx, setFavoritItemsCtx] = useState<number[]>([]);

  useEffect(() => {
    if (session === null) {
      return;
    }
    async function fetchData() {
      try {
        const allOrders: ICartCard[] = await getUserCart(session?.token);
        // console.log(allOrders);
        setOrdersCtx(allOrders);
        setCartItemsCtx(allOrders.length);
        const allFavorite: ICard[] = await GetUserFavorite(session?.token);
        let favoriteId = allFavorite.map(favorite => favorite.id);
        setFavoritItemsCtx(favoriteId);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [session]);

  const addCardToCartCtx = async (
    funkoId: number,
    token: string | undefined
  ) => {
    try {
      await addToCart(funkoId, token);
      const allOrders: ICartCard[] = await getUserCart(session?.token);
      setCartItemsCtx(allOrders.length);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItemFromCartCtx = async (card: ICartCard) => {
    try {
      await removeFromCart(card.id, session?.token);
      const allOrders: ICartCard[] = await getUserCart(session?.token);
      setCartItemsCtx(allOrders.length);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFavoriteCtx = async (
    userId: number,
    funkoId: number,
    token: string | undefined
  ) => {
    let newFavoriteArr;
    if (favoriteItemsCtx.includes(funkoId)) {
      newFavoriteArr = favoriteItemsCtx.filter(item => item !== funkoId);
    } else {
      newFavoriteArr = [...favoriteItemsCtx, funkoId];
    }
    try {
      await updateFavorite(userId, newFavoriteArr, token);
      const allFavorite: ICard[] = await GetUserFavorite(session?.token);
      let favoriteId = allFavorite.map(favorite => favorite.id);
      setFavoritItemsCtx(favoriteId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Context.Provider
      value={{
        ordersCtx,
        cartItemsCtx,
        favoriteItemsCtx,
        addCardToCartCtx,
        removeItemFromCartCtx,
        toggleFavoriteCtx,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
