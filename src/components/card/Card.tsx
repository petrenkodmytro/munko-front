import { ICard } from '@/types/types';
import icon from './../../../public/image/pinterest-marentorri.png';
import Image from 'next/image';
import Link from 'next/link';

type CardCatalog = Pick<ICard, 'id' | 'name' | 'images' | 'price'>;
type CardProps = {
  card: CardCatalog;
};

const Card = ({ card }: CardProps) => {
  return (
    <div className="w-[242px] h-[384px] mr-8 md:mr-0 px-3 py-6 rounded shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)] duration-200 ease-linear hover:scale-105 flex-shrink-0">
      <Link href={`/catalog/${card.id}`}>
        <div className="w-44 h-36 m-auto">
          <Image
            // src={card.images[0]}
            src={icon}
            width={150}
            height={138}
            alt="card-picture"
          />
        </div>
        <div className="text-base text-black my-5">
          <span className="">POP!</span>
          <p className="font-bold mb-5">{card.name}</p>
          <p className="font-bold">{card.price}$</p>
        </div>
      </Link>
      <button className="m-auto rounded text-base h-9 font-bold w-full bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 duration-200 ease-linear">
        ADD TO CART
      </button>
    </div>
  );
};
export default Card;
