import Link from "next/link";
import React from "react";
import Facebook from "./../../../public/icons/facebook.svg";
import Instagram from "./../../../public/icons/instagram.svg";
import Youtube from "./../../../public/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <div className="lg:flex px-4 py-6 lg:place-content-between ">
        <div className="flex flex-col gap-3 place-items-center">
          <p className="text-lg not-italic font-semibold">Subscribe to our news letter</p>
          <div className="flex overflow-hidden justify-center rounded-[5px] bg-white w-[284px] ">
            <input placeholder="example@com.ua" className="w-full text-black p-2" type="text" />
            <button
              type="button"
              className="flex w-11 h-10 justify-center items-center gap-2.5 shrink-0 px-2.5 py-3 rounded-[5px] bg-subscribeBtn text-lg not-italic font-semibold leading-[normal]">
              OK
            </button>
          </div>
          <div className="flex">
            <input className="w-[22px] h-[18px] rounded-[5px]" type="checkbox" name="privacy policy" id="privacy policy" />
            <p className="text-base not-italic font-normal leading-[normal]">
              I agree with the{" "}
              <Link href={"/"} className="text-base not-italic font-normal leading-[normal] underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col place-items-center lg:flex lg:gap-16">
          <div className="flex flex-col place-items-center">
            <div className="bg-white mt-6 mb-4 h-[1px] w-[184px]" />
            <p className="uppercase">other</p>
            <Link href={"/about"}>About us</Link>
            <Link href={"/sale"}>Sale</Link>
            <Link href={"/about"}>OUR store</Link>
            <Link href={"/about"}>Public Offer</Link>
            <div className="bg-white my-4 h-[1px] w-[184px]" />
          </div>
          <div className="flex flex-col">
            <p className="uppercase">Follow us</p>
            <div className="hidden md:block">
              <div className="flex">
                <Instagram />
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  www.instagram.com/munkopop
                </a>
              </div>
              <div className="flex">
                <Youtube />
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                  www.youtube.com/munkopop
                </a>
              </div>
              <div className="flex">
                <Facebook />
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  www.facebook.com/munkopop
                </a>
              </div>
            </div>
            <div className="flex md:hidden">
              <div className="flex">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
              </div>
              <div className="flex">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                  <Youtube />
                </a>
              </div>
              <div className="flex">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        © 2023 <a href="https://github.com/petrenkodmytro/munko-front">Munko pop</a>
      </div>
    </footer>
  );
};

export default Footer;
