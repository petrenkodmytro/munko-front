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
  setPriceFrom: (priceFrom: string) => void;
  priceTo: string;
  setPriceTo: (priceFrom: string) => void;
  stock: boolean;
  setStock: (stock: boolean) => void;
  sale: boolean;
  setSale: (sale: boolean) => void;
  toggleSelectedFilter: (filterName: string, value: string) => void;
  colectionSearchParams: string[];
  seriesSearchParams: string[];
  categorySearchParams: string[];
}

export interface IFilteredParams {
  category: string | null;
  collection: string | null;
  series: string | null;
  priceFrom: string | null;
  priceTo: string | null;
  sale: boolean | null;
  inStock: boolean | null;
}
