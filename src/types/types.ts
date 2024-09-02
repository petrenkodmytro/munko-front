// import { User } from 'next-auth';

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

// export interface CustomUser extends User {
//   id: string;
//   firstName: string;
//   lastName?: string | null;
//   email: string;
//   phone?: number | null;
//   password: string;
//   address?: {
//     id: number;
//     userId: number;
//     locality: string;
//     postOffice: string;
//   } | null;
//   orders?: string[] | null;
//   role?: string;
//   token?: string;
// }

export interface CustomSvg {
  className?: string;
  stroke?: string;
  color?: string;
  width?: number;
  height?: number;
  fill?: string;
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
  star: number;
  review: string;
}

export interface IPropsFilter {
  priceFrom: string;
  priceTo: string;
  setPriceFrom: (priceFrom: string) => void;
  setPriceTo: (priceFrom: string) => void;
  stock: boolean | null;
  setStock: (stock: boolean | null) => void;
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
    name: string;
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

export interface ICartCard {
  id: number;
  amount: number;
  funkoPop: ICard;
}

export interface IUserOrders {
  id: number;
  status: string;
  orderItems: ICartCard[];
  userId: {
    id: number;
    firstName: string;
    lastName: string | null;
    email: string;
    phone: number | null;
  };
}

export interface PopupProps {
  notifyCart: boolean;
  setNotifyCart: (modalState: boolean) => void;
  handleOpenPopUp?: () => void;
  resetToken?: string;
}

// export interface CustomError extends Error {
//   response:{
//     errors:Array<{
//       extensions: {
//         classification: string
//       },
//       locations:{
//         line: number,
//         column: number,
//       }[],
//       message: string,
//       path:string[],
//     }>
//     data:null;
//   }
// }

export interface IOrder {
  id: number;
  status: string;
  orderItems: [{ id: number; amount: number; funkoPop: ICard }];
}

export interface IDataCatalog {
  getAllItems: {
    items: ICard[];
  };
}

export interface IDataItem {
  getItem: ICard;
}

export interface IDataReviewById {
  getFunkoReviews: IReview[];
}

export interface IDataCartItems {
  getOrderItems: ICartCard[];
}

export interface IDataFavoriteItems {
  getUserFavorite: ICard[];
}

export interface IDataOrders {
  getUserOrders: IOrder[];
}

// ------delivery
export interface IAddDelivery {
  areaName: string;
  cityName: string;
  cityFullName: string;
  cityRef: string;
  streetName: string;
  streetRef: string;
}

export interface IGetDelivery {
  id: number;
  areaName: string;
  cityName: string;
  cityFullName: string;
  cityRef: string;
  streetName: string;
  streetRef: string;
}

export interface ICity {
  Area: string;
  Present: string;
  DeliveryCity: string;
  MainDescription: string;
  Description: string;
  AreaDescription: string;
  Ref: string;
}

export interface ISetCity {
  Area: string;
  DeliveryCity: string;
  MainDescription: string;
  value: string;
  label: string;
}

export interface IStreet {
  Description: string;
  Ref: string;
  value: string;
}

export interface ISetStreet {
  Ref: string;
  value: string;
  label: string;
}

export interface ISetDeliveryMethod {
  value: string;
  label: string;
}
// -------delivery
