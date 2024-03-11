import Link from 'next/link';
import FooterForm from './footer-form';
import SocialLinks from './social-links';
import FooterNav from './footer-nav';

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <div className="flex flex-col items-center px-4 pt-6 md:flex-row-reverse md:items-start md:justify-between md:px-5 md:pt-8 lg:px-20 lg:pt-6">
        <FooterForm />
        <div className="flex flex-col place-items-center md:flex md:flex-row md:gap-5 md:place-items-start lg:gap-20">
          <FooterNav />
          <SocialLinks />
        </div>
      </div>
      <div className="text-center pt-6 pb-2 md:pt-2">
        © 2024{' '}
        <a
          className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
          href="https://github.com/petrenkodmytro/munko-front"
        >
          Munko Pop
        </a>
      </div>
    </footer>
  );
};

export default Footer;
