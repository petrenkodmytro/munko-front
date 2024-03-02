export interface ICard {
  id: number;
  name: string;
  images: string[];
  price: number;
  amount: number;
  description: string;
  sale: boolean;
  license: string | null;
  sublicense: string | null;
  series: string;
  category: string;
  productType: string;
  date: string;
}
