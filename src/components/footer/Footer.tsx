import Link from "next/link";
import FooterForm from "./footer-form";
import SocialLinks from "./social-links";
import FooterNav from "./footer-nav";

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <div className="md:flex flex-row-reverse px-4 pt-6 md:place-content-between md:px-5 md:pt-8 lg:px-20">
        <FooterForm />

        <div className="flex flex-col place-items-center md:flex md:flex-row md:gap-5 md:place-items-start lg:gap-20">
          <FooterNav />
          <SocialLinks />
        </div>
      </div>

      <div className="duration-200 ease-linear lg:hover:text-[#C3C3C3] text-center pt-6 pb-2 md:pt-2">
        © 2023 <a href="https://github.com/petrenkodmytro/munko-front">Munko Pop</a>
      </div>
    </footer>
  );
};

export default Footer;
