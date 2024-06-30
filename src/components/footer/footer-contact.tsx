import IconMail from '../../../public/icons/contact-mail.svg';
import IconMap from '../../../public/icons/contact-map-pin.svg';
import IconPhone from '../../../public/icons/contact-phone.svg';

type Props = {};

const FooterContact = (props: Props) => {
  return (
    <div>
      <p>CONTACT US</p>
      <ul className='flex flex-col gap-[14px]'>
        <li className='flex gap-2'>
            <IconPhone/>
          <a href="tel:+380970987887">+380970987887</a>
        </li>
        <li className='flex gap-2'>
            <IconMail/>
          <a href="mailto:munkopop@gmail.com">munkopop@gmail.com</a>
        </li>
        <li className='flex gap-2'>
            <IconMap/>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D0%B0+%D0%A7%D1%83%D0%BF%D1%80%D1%8B%D0%BD%D0%BA%D0%B8,+114,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8256288,24.0010723,18z/data=!4m6!3m5!1s0x473ae7817222679f:0xc58e229016fab26!8m2!3d49.8255959!4d24.0013459!16s%2Fg%2F11bw3yc9_7?entry=ttu"
          >
            Generala Chuprynky 114, Lviv, Ukraine
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
