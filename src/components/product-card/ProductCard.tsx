'use client';

import React, { useEffect, useState } from 'react';
import CardImage from './cardImage';
import CardReviews from './reviewList';
import { getItem, getReviewsById } from '@/api/api';
import { useParams } from 'next/navigation';
import { ICard, IReview } from '@/types/types';
import Link from 'next/link';


const initialValue = {
  id: 0,
  name: '',
  images: [],
  price: 0,
  amount: 0,
  description: '',
  sale: false,
  collection: '',
  sublicense: '',
  series: '',
  category: '',
  productType: '',
  date: '',
};

type Params = {
  id: string;
};

const ProductCard = () => {
  const id = useParams<Params>().id; // item id

  // const [product, setProduct] = useState<{ [key: string]: any }>({}); // or set initialValue
  const [product, setProduct] = useState<ICard>(initialValue);
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const card = await getItem(id);
        const reviews = await getReviewsById(id);

        setProduct(card);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchProduct();
  }, [id]);
  

  return (
    <div className="md:px-5 md:pb-[72px] xl:px-20 xl:pb-[35px]">
      <div className="hidden md:block py-[25px] text-xs font-medium">
        <Link className="underline" href={'/catalog'}>
          Catalog
        </Link>
        /{product.category ?? 'Unknown'}/{product.collection ?? 'Unknown'}
      </div>
      <div className="xl:flex gap-6">
        <CardImage images={product.images} />
        <div className="px-[16px] py-[30px] md:px-0 md:pb-10">
          <h5 className="text-2xl font-bold mb-5 md:text-[32px]">
            {product.name}
          </h5>
          <p className="text-base font-semibold mb-5 md:text-2xl">
            {product.price}$
          </p>
          <div className="flex justify-between xl:flex-col gap-5">
            <button
              type="button"
              className={`uppercase px-[25px] py-[14px] rounded-[5px] border-2 border-current text-white text-base not-italic font-bold  md:px-[90px] xl:w-[302px] ${product.amount ? 'bg-[#31304D] lg:hover:text-[#31304D] lg:hover:bg-white duration-200 ease-linear' : 'bg-grayBG'}`}
            >
              add to cart
            </button>
            <button
              type="button"
              className="uppercase px-[25px] py-[14px] rounded-[5px] border-2 border-current text-[#31304D] bg-white text-base not-italic font-bold  lg:hover:text-white lg:hover:bg-[#31304D] duration-200 ease-linear md:px-[90px] xl:w-[302px]"
            >
              Fast order
            </button>
          </div>
          <ul className="hidden xl:flex flex-col gap-[2px] mt-[35px] text-base font-semibold">
            <li>
              Item number: <span className="font-medium">{product.id}</span>
            </li>
            <li>
              Category:{' '}
              <span className="font-medium">
                {product.category ?? 'Unknown'}
              </span>
            </li>
            <li>
              Colection:{' '}
              <span className="font-medium">
                {product.collection ?? 'Unknown'}
              </span>
            </li>
            <li>
              Sublicense:{' '}
              <span className="font-medium">
                {product.sublicense ?? 'Unknown'}
              </span>
            </li>
            <li>
              Product type:{' '}
              <span className="font-medium">
                {product.productType ?? 'Unknown'}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ---Description--- */}
      <div className="xl:flex gap-6 xl:pt-[35px]">
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
              <span className="font-medium">
                {product.category ?? 'Unknown'}
              </span>
            </li>
            <li>
              Colection:{' '}
              <span className="font-medium">
                {product.collection ?? 'Unknown'}
              </span>
            </li>
            <li>
              Sublicense:{' '}
              <span className="font-medium">
                {product.sublicense ?? 'Unknown'}
              </span>
            </li>
            <li>
              Product type:{' '}
              <span className="font-medium">
                {product.productType ?? 'Unknown'}
              </span>
            </li>
          </ul>
        </div>
        <CardReviews reviews={reviews} />
      </div>
    </div>
  );
};

export default ProductCard;
