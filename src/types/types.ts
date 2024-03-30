import { SetStateAction } from 'react';

export interface ICard {
  id: number;
  name: string;
  images: string[];
  price: number;
  amount: number;
  description: string;
  sale: boolean;
  collection: string | null;
  sublicense: string | null;
  series: string;
  category: string;
  productType: string;
  date: string;
}

export interface IReview {
  id: number;
  username: string;
  funkoId: number;
  userId: number;
  star: number;
  review: string;
}

export interface IPropsFilter {
  priceFrom: string;
  handleSetPriceFrom: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  priceTo: string;
  handleSetPriceTo: (event: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
}
