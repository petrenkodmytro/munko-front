import Image from 'next/image';
import CartImage from './../../../public/image/free-icon-shopping-cart.png';
import Link from 'next/link';

type Props = {};

const EmptyCart = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[150px] md:w-[342px]">
        <Image
          src={CartImage}
          alt="empty cart"
          width={342}
          height={342}
          // sizes="100vw"
          // style={{
          //   width: '100%',
          //   height: 'auto',
          // }}
        />
      </div>
      <p className="text-sm font-medium md:text-lg">
        Your cart is empty. Let’s go to{' '}
        <Link href={`/catalog`} className="p-1  font-semibold">
          Catalog
        </Link>
      </p>
    </div>
  );
};

export default EmptyCart;
