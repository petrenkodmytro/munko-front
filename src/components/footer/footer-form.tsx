"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const FooterForm = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col gap-3 place-items-center md:place-items-start">
      <p className="text-lg not-italic font-semibold">Subscribe to our news letter</p>
      <div className="flex overflow-hidden justify-center rounded-[5px] bg-white w-[284px] ">
        <input placeholder="example@com.ua" className="w-full text-black p-2 invalid:border-red-500 focus:outline-none" type="email" />
        <button
          type="submit"
          onClick={() => console.log("submit")}
          disabled={!isChecked}
          className="duration-200 ease-linear disabled:bg-[#B1B1B1] flex w-11 h-10 justify-center items-center gap-2.5 shrink-0 px-2.5 py-3 rounded-[5px] bg-subscribeBtn text-lg not-italic font-semibold leading-[normal] lg:enabled:hover:bg-white lg:enabled:hover:text-subscribeBtn lg:enabled:hover:border-[3px] lg:hover:border-subscribeBtn">
          OK
        </button>
      </div>
      <div className="flex">
        <input
          className="w-[22px] h-[18px] rounded-[5px] mr-1"
          type="checkbox"
          name="privacy policy"
          id="privacy policy"
          defaultChecked={isChecked}
          onClick={() => {
            setIsChecked(!isChecked);
            console.log(isChecked);
          }}
        />
        <p className="text-base not-italic font-normal leading-[normal]">
          I agree with the{" "}
          <Link href={"/"} className="text-base not-italic font-normal leading-[normal] underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
    // <div>
    //   <input
    //     type="checkbox"
    //     defaultChecked={isChecked}
    //     onClick={() => {
    //       setIsChecked(!isChecked);
    //       console.log(isChecked);
    //     }}
    //   />
    //   {isChecked ? "text is shown" : "text should be hidden"}
    //   <button className="bg-green-200" type="submit" disabled={isChecked}>ok</button>
    // </div>
  );
};

export default FooterForm;
