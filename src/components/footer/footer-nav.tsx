import Link from 'next/link';

type Props = {};

const FooterNav = (props: Props) => {
  return (
    <div className="flex flex-col place-items-center text-lg not-italic font-semibold leading-[normal] md:place-items-start md:text-base">
      <div className="bg-white mt-6 mb-4 h-[1px] w-[184px] md:hidden" />
      <p className="uppercase mb-2 text-lg not-italic font-normal leading-[normal]">
        other
      </p>
      <div className="flex flex-col place-items-center gap-2.5 md:place-items-start">
        <Link
          className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
          href={'/about'}
        >
          About us
        </Link>
        <Link
          className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
          href={'/sale'}
        >
          Sale
        </Link>
        <Link
          className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
          href={'/about'}
        >
          OUR store
        </Link>
        <Link
          className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
          href={'/public-offer'}
        >
          Public Offer
        </Link>
        <Link
          className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
          href={'/faq'}
        >
          FAQ
        </Link>
      </div>
      <div className="bg-white my-4 h-[1px] w-[184px] md:hidden" />
    </div>
  );
};

export default FooterNav;
