import IconMail from '../../../public/icons/contact-mail.svg';
import IconMap from '../../../public/icons/contact-map-pin.svg';
import IconPhone from '../../../public/icons/contact-phone.svg';

type Props = {};

const FooterContact = (props: Props) => {
  return (
    <div className='flex flex-col place-items-center md:place-items-start'>
      <p className='mb-2 text-lg md:text-base xl:text-lg not-italic font-normal leading-[normal]'>CONTACT US</p>
      <ul className='flex flex-col gap-2 xl:gap-[14px] pl-14 md:pl-0 md:text-xs xl:text-base'>
        <li className='flex items-center gap-2'>
            <IconPhone/>
          <a className='duration-200 ease-linear lg:hover:text-[#C3C3C3]' href="tel:+380970987887">+380970987887</a>
        </li>
        <li className='flex items-center gap-2'>
            <IconMail/>
          <a className='duration-200 ease-linear lg:hover:text-[#C3C3C3]' href="mailto:munkopop@gmail.com">munkopop@gmail.com</a>
        </li>
        <li className='flex items-center gap-2'>
            <IconMap/>
          <a className='duration-200 ease-linear lg:hover:text-[#C3C3C3] md:w-[146px] xl:w-[220px]'
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D0%B0+%D0%A7%D1%83%D0%BF%D1%80%D1%8B%D0%BD%D0%BA%D0%B8,+114,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8256288,24.0010723,18z/data=!4m6!3m5!1s0x473ae7817222679f:0xc58e229016fab26!8m2!3d49.8255959!4d24.0013459!16s%2Fg%2F11bw3yc9_7?entry=ttu"
          >
            Generala Chuprynky 114, Lviv, Ukraine
          </a>
        </li>
      </ul>
      <div className="bg-white mt-6 mb-4 h-[1px] w-[184px] md:hidden" />
    </div>
  );
};

export default FooterContact;
