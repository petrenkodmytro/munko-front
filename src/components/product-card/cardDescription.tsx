import { ICard } from '@/types/types';
import React from 'react';

type Props = {
  product: ICard;
};

const CardDescription = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-5 md:gap-[25px]  px-4 py-5 mb-5 rounded-[5px] bg-[#F5F5F5] md:pl-8 md:pr-[84px] md:py-[22px] xl:w-[628px] xl:mb-0 xl:px-8">
      <h6 className="text-xl font-semibold md:text-[26px]">Description</h6>
      <div className="h-[1px] bg-[#B6BBC4]"></div>
      <p className="text-xs font-medium text-justify md:text-sm">
        {product.description}
      </p>
      <ul className="flex flex-col gap-[2px] text-sm font-semibold">
        <li>
          Item number: <span className="font-medium">{product.id}</span>
        </li>
        <li>
          Category:{' '}
          <span className="font-medium">{product.category ?? 'Unknown'}</span>
        </li>
        <li>
          Colection:{' '}
          <span className="font-medium">{product.collection ?? 'Unknown'}</span>
        </li>
        <li>
          Sublicense:{' '}
          <span className="font-medium">{product.sublicense ?? 'Unknown'}</span>
        </li>
        <li>
          Product type:{' '}
          <span className="font-medium">
            {product.productType ?? 'Unknown'}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CardDescription;
