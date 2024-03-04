'use client';

import Link from 'next/link';
import { useState } from 'react';

type Props = {};

export default function FAQ(props: Props) {

  const handleClick = function (event: React.SyntheticEvent<HTMLElement>) {
    const elem = event.currentTarget.parentElement?.childNodes[1] as Element;

    const buttonShow = event.currentTarget.parentElement
      ?.childNodes[2] as Element;
    const buttonHide = event.currentTarget.parentElement
      ?.childNodes[3] as Element;
    if (elem.className === 'hidden') {
      elem.className = 'text-blackCustom font-normal mt-[43px] leading-[35px]';
      buttonShow.className = 'hidden';
      buttonHide.className =
        'text-[65px] font-normal absolute top-7 right-10';
    } else {
      elem.className = 'hidden';
      buttonShow.className =
        'text-[65px] font-normal absolute top-8 right-8';
      buttonHide.className = 'hidden';
    }
  };

  return (
    <section className="flex flex-col px-4 mt-8 text-xl text-blackCustom font-semibold md:px-5 md:text-2xl">
      <h3 className="hidden text-center text-[40px] mt-[46px] mb-[56px] md:block">
        FAQ
      </h3>
      <div className="flex items-center p-4 mb-5 justify-between relative shadow-[0px_4px_20px_0px_rgb(0,0,0,0.15)] md:min-h-[99px] md:mb-6 md:py-2.5 md:px-[30px]">
        <article>
          <h4 className="max-w-[249px] leading-[20px] h-[47px] md:max-w-full md:leading-[79px] md:h-full">
            What is a Funko Pop figures?
          </h4>
          <p className="hidden">
            The payment methods for purchasing Funko Pop figures in our store
            are as follows: Credit/Debit Cards: Most online and physical stores
            accept major credit cards (Visa, MasterCard, American Express) and
            debit cards. PayPal: Many online stores offer PayPal as a payment
            method. This provides a secure way to make purchases without
            directly sharing your financial information. Bank Transfers: Some
            online platforms may allow you to make payments via direct bank
            transfers. This method may not be as common for smaller transactions
          </p>
          <button
            onClick={handleClick}
            className="text-[65px] font-normal absolute top-8 right-8"
          >
            +
          </button>
          <button onClick={handleClick} className="hidden">
            -
          </button>
        </article>
      </div>
      <div className="flex items-center p-4 mb-5 justify-between relative shadow-[0px_4px_20px_0px_rgb(0,0,0,0.15)] md:min-h-[99px] md:mb-6 md:py-2.5 md:px-[30px]">
        <article>
          <h4 className="max-w-[249px] leading-[20px] h-[47px] md:max-w-full md:leading-[79px] md:h-full">
            How can I pay for the purchase?
          </h4>
          <p className="hidden">
            The payment methods for purchasing Funko Pop figures in our store
            are as follows: Credit/Debit Cards: Most online and physical stores
            accept major credit cards (Visa, MasterCard, American Express) and
            debit cards. PayPal: Many online stores offer PayPal as a payment
            method. This provides a secure way to make purchases without
            directly sharing your financial information. Bank Transfers: Some
            online platforms may allow you to make payments via direct bank
            transfers. This method may not be as common for smaller
            transactions. Digital Wallets: Depending on the platform, you may be
            able to use digital wallets such as Apple Pay, Google Pay, or other
            similar services.
          </p>
          <button
            onClick={handleClick}
            className="text-[65px] font-normal absolute top-8 right-8"
          >
            +
          </button>
          <button onClick={handleClick} className="hidden">
            -
          </button>
        </article>
      </div>
      <div className="flex items-center p-4 justify-between relative shadow-[0px_4px_20px_0px_rgb(0,0,0,0.15)] md:min-h-[99px] md:py-2.5 md:px-[30px]">
        <article>
          <h4 className="max-w-[249px] leading-[20px] h-[47px] md:max-w-full md:leading-[79px] md:h-full">
            What Delivery methods do you have?
          </h4>
        <p className="hidden">
          We have next Delivery methods: Standard Shipping: This is the regular
          shipping option, and it often takes a few business days to deliver the
          product. The cost and delivery time may vary depending on your
          location. Express Shipping: For a faster delivery option, express
          shipping is available at an additional cost. This method is ideal for
          those who want to receive their Funko Pop figures quickly.
          International Shipping: If you are purchasing from a store located in
          a different country, they may offer international shipping. Be aware
          of potential customs duties or taxes associated with international
          deliveries. In-Store Pickup: If your physical locations allow you to
          pick up the items at a nearby store. This option can save on shipping
          costs and time.
        </p>
        <button
            onClick={handleClick}
            className="text-[65px] font-normal absolute top-8 right-8"
          >
            +
          </button>
          <button onClick={handleClick} className="hidden">
            -
          </button>
        </article>
      </div>
      <button className="mx-auto mt-[30px] mb-[40px] h-[46px] rounded px-8 text-xl bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 duration-200 ease-linear md:mt-[53px] md:mb-[72px]">
        <Link href={'/faq'}>MORE QUESTIONS</Link>
      </button>
    </section>
  );
}
