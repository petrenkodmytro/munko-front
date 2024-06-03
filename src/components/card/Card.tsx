import { ICard } from '@/types/types';
import ImgPlaceholder from './../../../public/image/placeholder-png-image.jpg';
import Image from 'next/image';
import Link from 'next/link';

type CardCatalog = Pick<
  ICard,
  'id' | 'name' | 'images' | 'price' | 'productType'| 'amount'
>;

type CardProps = {
  card: CardCatalog;
};

const Card = ({ card }: CardProps) => {
  
  return (
    <div className="w-[242px] h-[384px] flex flex-wrap md:mr-0 px-3 py-6 rounded shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)] duration-200 ease-linear hover:scale-105 flex-shrink-0">
      <Link href={`/catalog/${card.id}`}>
        <div className="w-[173px] h-[153px] flex justify-center items-center bg-[#F5F5F5] m-auto">
          {card.images.length === 0 ? (
            <Image
              src={ImgPlaceholder}
              // src={icon}
              // width={150}
              // height={138}
              alt="card-picture"
            />
          ) : (
            <Image
              src={
                card.images[0].slice(0, 25) +
                'uc?id=' +
                card.images[0].slice(32, 65)
              }
              // src={icon}
              width={150}
              height={138}
              alt="card-picture"
            />
          )}
        </div>
        <div className="text-base leading-5 text-black mt-5">
          <span className="">{card.productType}</span>
          <p className="font-bold mb-5">{card.name}</p>
          <p className="font-bold">{card.price}$</p>
        </div>
      </Link>
      <button
        className={`self-end rounded text-base h-9 font-bold w-full text-white ${card.amount ? 'bg-subscribeBtn hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 duration-200 ease-linear' : 'bg-grayBG'}`}
      >
        ADD TO CART
      </button>
    </div>
  );
};
export default Card;
