import { delivery, discount, stepsOrder } from '@/constant/constant';
import { ICartCard } from '@/types/types';
import IconBack from './../../../public/icons/icon-back-cart-chevron-left.svg';
import NovaPost from '../delivery/novaPost';
import IconCreditCard from './../../../public/icons/icon-credit-card.svg';

type Props = {
  orders: ICartCard[];
  setOrderStep: (status: string) => void;
};

const CartOrder = ({ orders, setOrderStep }: Props) => {
  return (
    <div className="mt-10 xl:mt-0 xl:border-l-[1px] xl:border-black xl:pl-10 xl:pr-5 xl:w-[436px]">
      <h4 className="uppercase text-2xl font-semibold md:text-3xl">
        delivery method
      </h4>
      <div className="w-full h-[1px] bg-black my-5"></div>
      {!(orders.length > 0) && (
        <>
          <p className="flex justify-between  text-xs font-bold md:text-sm">
            Please checked your orders
          </p>
          <div className="w-full h-[1px] bg-black my-5"></div>
        </>
      )}

      <h6 className="font-bold">Country</h6>
      <input className="w-full border" type="text" />
      <h6 className="font-bold">City/Town</h6>
      <input className="w-full border" type="text" />
      <h6 className="font-bold">Delivery</h6>
      <form>
        <label>
          <input type="radio" name="deliveryMethod" value="nova-poshta" />
          Nova Poshta
        </label>
        <br />
        <NovaPost />
        <label>
          <input type="radio" name="deliveryMethod" value="ukrposhta" />
          Ukrposhta
        </label>
        <br />
        <label>
          <input type="radio" name="deliveryMethod" value="meest-express" />
          Meest Express
        </label>
      </form>

      <div className="w-full h-[1px] bg-black my-5"></div>
      <h6 className="font-bold">Payment method</h6>
      <form>
        <label className="flex justify-start gap-2">
          <input type="radio" name="paymentMethod" value="cod" />
          Cash on Delivery (COD)
        </label>
        <label className="flex justify-start gap-2">
          <input type="radio" name="paymentMethod" value="card" />
          <div className="flex justify-center items-center gap-2">
            {' '}
            <div className="flex justify-center items-center w-[30px] h-[18px] bg-[#1E1E1E] rounded">
              <IconCreditCard />
            </div>
            <p>5379 85****** 4784</p>
          </div>
        </label>
      </form>

      <div className="w-full h-[1px] bg-black my-5"></div>

      {/* Total price */}
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

      {/* button */}
      <div className="mt-9 flex items-center justify-between md:flex-row-reverse xl:flex-col xl:mt-14 xl:gap-6">
        <button
          onClick={() => {
            alert('congratilations!!!!!!');
          }}
          disabled={orders.length === 0}
          type="button"
          className="w-[170px] md:w-[331px] xl:w-full px-5 py-2 md:py-2.5 text-xs md:text-base font-bold uppercase rounded-[5px] border-2 border-current text-white bg-[#31304D] lg:enabled:hover:text-[#31304D] lg:enabled:hover:bg-white duration-200 ease-linear disabled:bg-[#B1B1B1]"
        >
          order
        </button>
        <button
          type="button"
          className="flex items-center uppercase text-xs font-bold md:text-base"
          onClick={() => {
            setOrderStep(stepsOrder.total);
          }}
        >
          <IconBack />
          order later and go back
        </button>
      </div>
    </div>
  );
};

export default CartOrder;
