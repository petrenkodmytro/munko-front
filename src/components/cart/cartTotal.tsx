import { delivery, discount, stepsOrder } from '@/constant/constant';
import { ICartCard } from '@/types/types';
// import { useRouter } from 'next/navigation';
import IconBack from './../../../public/icons/icon-back-cart-chevron-left.svg';
import Link from 'next/link';

type Props = {
  orders: ICartCard[];
  setOrderStep: (status: string) => void;
};

const CartTotal = ({ orders, setOrderStep }: Props) => {
  //   const router = useRouter();
  return (
    <div className="mt-10 xl:mt-0 xl:border-l-[1px] xl:border-black xl:pl-10 xl:pr-5 xl:w-[436px]">
      <h4 className="uppercase text-2xl font-semibold md:text-3xl">
        Cart totals
      </h4>
      <div className="w-full h-[1px] bg-black my-5"></div>
      <ul className="flex flex-col gap-3 xl:pr-2 xl:max-h-[280px]  xl:overflow-y-scroll custom">
        {orders.map(card => (
          <li key={card.id} className="flex justify-between">
            <p className="text-xs font-bold md:text-sm">{card.funkoPop.name}</p>
            {card.amount > 1 && (
              <p className="ml-auto text-xs font-semibold md:text-sm">
                {card.amount}
                <span className="px-2">x</span>
              </p>
            )}
            <p className="text-xs font-semibold md:text-sm">
              {card.funkoPop.sale
                ? (card.funkoPop.price * discount).toFixed(2)
                : card.funkoPop.price}
              $
            </p>
          </li>
        ))}
      </ul>
      {orders.length > 0 ? (
        <p className="flex justify-between mt-4 text-xs font-bold md:text-sm">
          Delivery<span>{delivery}$</span>
        </p>
      ) : (
        <p className="flex justify-between  text-xs font-bold md:text-sm">
          Please checked your orders
        </p>
      )}
      <div className="w-full h-[1px] bg-black my-5"></div>
      {orders.length > 0 && (
        <p className="flex justify-between text-lg font-bold md:text-xl">
          Total
          <span>
            {[...orders].reduce((total, order) => {
              let price: number;
              if (order.funkoPop.sale) {
                price = order.funkoPop.price * discount;
              } else {
                price = order.funkoPop.price;
              }
              return Number((total + price * order.amount).toFixed(2));
            }, delivery)}
            $
          </span>
        </p>
      )}
      <div className="mt-9 flex items-center justify-between md:flex-row-reverse xl:flex-col xl:mt-14 xl:gap-6">
        <button
          onClick={() => {
            setOrderStep(stepsOrder.checkout);
            // let res = orders.map(order => order.funkoPop.name);
            // console.log(res);
            // alert(JSON.stringify(res));
            // router.push('/cart/checkout');
          }}
          disabled={orders.length === 0}
          type="button"
          className="w-[170px] md:w-[331px] xl:w-full px-5 py-2 md:py-2.5 text-xs md:text-base font-bold uppercase rounded-[5px] border-2 border-current text-white bg-[#31304D] lg:enabled:hover:text-[#31304D] lg:enabled:hover:bg-white duration-200 ease-linear disabled:bg-[#B1B1B1]"
        >
          Proceed to checkout
        </button>
        <Link
          className="flex items-center uppercase text-xs font-bold md:text-base"
          href={'/catalog'}
        >
          <IconBack />
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
