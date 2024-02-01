import Image from "next/image";
import Link from "next/link";
import React from "react";
import Facebook from "./../../../public/icons/facebook.svg";
import Instagram from "./../../../public/icons/instagram.svg";
import Youtube from "./../../../public/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className=" bg-footer">
      <div className="flex px-5 pt-6 pb-10 place-content-between text-white">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <p>OTHER</p>
            <Link href={"/about"}>About us</Link>
            <Link href={"/sale"}>Sale</Link>
            <Link href={"/about"}>OUR store</Link>
            <Link href={"/about"}>Public Offer</Link>
          </div>
          <div className="flex flex-col">
            <p>FOLLOW US</p>
            <div className="flex">
              <Instagram />
              <Link href={"/"}>www.instagram.com/munkopop</Link>
            </div>
            <div className="flex">
              <Youtube />
              <Link href={"/"}>www.youtube.com/munkopop</Link>
            </div>
            <div className="flex">
              <Facebook />
              <Link href={"/"}>www.facebook.com/munkopop</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Subscribe to our news letter</p>
          <div className="flex">
            <input type="text" />
            <button type="button">OK</button>
          </div>
          <div className="flex">
            <input type="checkbox" name="privacy policy" id="privacy policy" />
            <p>I agree with the Privacy Policy</p>
          </div>
          <Link href={"/"}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
