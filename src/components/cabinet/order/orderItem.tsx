import { ICard } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import ImgPlaceholder from './../../../../public/image/placeholder-png-image.jpg';

type Props = {
  order: [{ id: number; amount: number; funkoPop: ICard }];
};

const OrderItem = ({ order }: Props) => {
  return (
    <ul className="flex  gap-4">
      {order.map(ord => (
        <li key={ord.id} className="relative flex">
          <Link
            href={`/catalog/${ord.funkoPop.id}`}
            className="md:hover:scale-105 duration-200 ease-linear md:hover:shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)]"
          >
            <div className="w-[70px] h-[70px]  flex justify-center items-center bg-[#F5F5F5] rounded flex-shrink-0 md:w-[98px] md:h-[91px]">
              {ord.funkoPop.images.length === 0 ? (
                <Image src={ImgPlaceholder} alt="card-picture" />
              ) : (
                <Image
                  src={
                    ord.funkoPop.images[0].slice(0, 25) +
                    'uc?id=' +
                    ord.funkoPop.images[0].slice(32, 65)
                  }
                  // src={icon}
                  width={150}
                  height={138}
                  alt="card-picture"
                />
              )}
            </div>{' '}
          </Link>
          {/* <div className="ml-6">
            <p className="text-xs font-bold md:text-base xl:w-[400px]">
              {ord.funkoPop.name}
            </p>
            <p className="text-xs font-bold md:text-base">
              {ord.amount}
            </p>
          </div> */}
        </li>
      ))}
    </ul>
  );
};

export default OrderItem;
