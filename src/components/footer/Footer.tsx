import Link from "next/link";
import React from "react";
import Facebook from "./../../../public/icons/facebook.svg";
import Instagram from "./../../../public/icons/instagram.svg";
import Youtube from "./../../../public/icons/youtube.svg";
import FooterForm from "./footer-form";

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <div className="md:flex flex-row-reverse px-4 pt-6 md:place-content-between md:px-5 md:pt-8 lg:px-20">
        <FooterForm />

        <div className="flex flex-col place-items-center md:flex md:flex-row md:gap-5 md:place-items-start lg:gap-20">
          <div className="flex flex-col place-items-center text-lg not-italic font-semibold leading-[normal] md:place-items-start">
            <div className="bg-white mt-6 mb-4 h-[1px] w-[184px] md:hidden" />
            <p className="uppercase mb-2 text-lg not-italic font-normal leading-[normal]">other</p>
            <div className="flex flex-col place-items-center gap-2.5 md:place-items-start">
              <Link className="duration-200 ease-linear lg:hover:text-[#C3C3C3]" href={"/about"}>
                About us
              </Link>
              <Link className="duration-200 ease-linear lg:hover:text-[#C3C3C3]" href={"/sale"}>
                Sale
              </Link>
              <Link className="duration-200 ease-linear lg:hover:text-[#C3C3C3]" href={"/about"}>
                OUR store
              </Link>
              <Link className="duration-200 ease-linear lg:hover:text-[#C3C3C3]" href={"/about"}>
                Public Offer
              </Link>
            </div>
            <div className="bg-white my-4 h-[1px] w-[184px] md:hidden" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="uppercase text-lg not-italic font-normal leading-[normal]">Follow us</p>
            <div className="hidden md:flex flex-col gap-2">
              <div className="flex gap-2">
                <Instagram />
                <a
                  className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer">
                  www.instagram.com/munkopop
                </a>
              </div>
              <div className="flex gap-2">
                <Youtube />
                <a
                  className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer">
                  www.youtube.com/munkopop
                </a>
              </div>
              <div className="flex gap-2">
                <Facebook />
                <a
                  className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer">
                  www.facebook.com/munkopop
                </a>
              </div>
            </div>
            <div className="flex gap-2 md:hidden">
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
      <div className="duration-200 ease-linear lg:hover:text-[#C3C3C3] text-center pt-6 pb-2 md:pt-2">
        © 2023 <a href="https://github.com/petrenkodmytro/munko-front">Munko Pop</a>
      </div>
    </footer>
  );
};

export default Footer;
