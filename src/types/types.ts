import { AdapterUser } from 'next-auth/adapters';

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

export interface CustomUser extends AdapterUser {
  id: string;
  firstName: string;
  lastName?: string | null;
  email: string;
  phone?: number | null;
  password: string;
  address?: {
    id: number;
    userId: number;
    locality: string;
    postOffice: string;
  } | null;
  orders?: string[] | null;
  role?: string;
  token?: string;
}

export interface NewUser {
  firstName: string;
  email: string;
  password: string;
}

export interface IReview {
  id: number;
  username: string | null | undefined;
  funkoId: number;
  userId: number;
  star: number | null;
  review: string;
}

export interface IPropsFilter {
  priceFrom: string;
  priceTo: string;
  setPriceFrom: (priceFrom: string) => void;
  setPriceTo: (priceFrom: string) => void;
  stock: boolean;
  setStock: (stock: boolean) => void;
  stockShow: boolean;
  sale: boolean;
  setSale: (sale: boolean) => void;
  toggleSelectedFilter: (filterName: string, value: string) => void;
  colectionSearchParams: string[];
  seriesSearchParams: string[];
  categorySearchParams: string[];
  filterAttributes: {
    categories: string[];
    collections: string[];
    series: string[];
  };
  setPageCatalog: (arg: number) => void;
  resetFilter: () => void;
}

export interface IFilteredParams {
  searchCriteria: {
    category: string | null;
    collection: string | null;
    series: string | null;
    priceFrom: string | null;
    priceTo: string | null;
    sale: boolean | null;
    inStock: boolean | null;
  };
  orderBy: string;
  paging: { page: number; perPage: number };
}

export interface IFilterAttributes {
  getAllAttributes: {
    categories: string[];
    collections: string[];
    series: string[];
  };
}

export interface IDataFilteredCatalog {
  getAllItems: {
    items: ICard[];
    paging: {
      page: number;
      perPage: number;
      pageCount: number;
      totalCount: number;
    };
  };
}

export interface IPagination {
  page: number;
  perPage: number;
  pageCount: number;
  totalCount: number;
}

export interface ICartCard extends ICard {
  count: number;
}
