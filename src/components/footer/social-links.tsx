import Facebook from "./../../../public/icons/facebook.svg";
import Instagram from "./../../../public/icons/instagram.svg";
import Youtube from "./../../../public/icons/youtube.svg";

type Props = {};

const SocialLinks = (props: Props) => {
  return (
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
  );
};

export default SocialLinks;
