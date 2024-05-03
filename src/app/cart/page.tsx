import Image from 'next/image';
import Link from 'next/link';
import ImgPlaceholder from './../../../public/image/placeholder-png-image.jpg';

const orders = [
  {
    id: 9,
    name: 'Deluxe Albus Dumbledore and Magic Albus Dumbledore',
    images: [
      'https://drive.google.com/file/d/1yDwPmF30DZYaKOoDrkz9o4GhIeOJ0Ows/view',
      'https://drive.google.com/file/d/1LDdW-IBK3bLTYBu4oES7CYg60Dd1AdKu/view',
      'https://drive.google.com/file/d/1LDdW-IBK3bLTYBu4oES7CYg60Dd1AdKu/view',
    ],
    price: 22,
    amount: 34,
    description: "Pop! Deluxe Albus Dumbledore with Hog's Head Inn",
    sale: false,
    collection: 'Harry Potter',
    sublicense: null,
    series: "Harry Potter and the Philosopher's Stone ",
    category: 'Movies',
    productType: 'Pop!',
    date: '14.04.24',
  },
  {
    id: 20,
    name: 'Harley Quinn',
    images: [
      'https://drive.google.com/file/d/1x6BVSZWwC485D3I0bI_9ib5RIEQsilJS/view',
      'https://drive.google.com/file/d/1Ot4cWKkghuOON1hDqr5mp-WAoGRTTl5W/view',
    ],
    price: 28,
    amount: 52,
    description: 'Pop! Harley Quinn with Bat',
    sale: true,
    collection: 'Marvel',
    sublicense: null,
    series: 'Suicide Squad',
    category: 'Comics',
    productType: 'Pop!',
    date: '01.01.24',
  },
  {
    id: 30,
    name: 'Remus Lupin',
    images: [
      'https://drive.google.com/file/d/11bZN2iwJXmqWtnIHflVuiHKN9inBQae8/view',
      'https://drive.google.com/file/d/1-khIfuzZMMFfwi9174d0TC6PDEYlciwt/view',
    ],
    price: 21,
    amount: 35,
    description: 'Pop! Remus Lupin with Map',
    sale: false,
    collection: 'Harry Potter',
    sublicense: null,
    series: 'Harry Potter and the Prisoner of Azkaban',
    category: 'Movies',
    productType: 'Pop!',
    date: '02.02.24',
  },
  {
    id: 41,
    name: 'Homer Simpson',
    images: [],
    price: 23,
    amount: 0,
    description: 'Homer Pop!',
    sale: false,
    collection: 'The Simpsons',
    sublicense: null,
    series: 'Spiderman',
    category: 'Anime',
    productType: 'Pop!',
    date: '02.03.24',
  },
  {
    id: 45,
    name: 'Yang',
    images: [],
    price: 21,
    amount: 12,
    description: 'Yang Pop!',
    sale: false,
    collection: 'Avatar',
    sublicense: null,
    series: 'Maleficent',
    category: 'Anime',
    productType: 'Pop!',
    date: '02.03.24',
  },
];
type Props = {};

const Cart = (props: Props) => {
  return (
    <section className='px-4 pt-6 pb-10'>
      <div className="mb-4 text-xs font-medium md:mb-6 md:text-base">
        <Link className="underline" href={'/'}>
          Home page
        </Link>
        /
      </div>
      <h3 className='mb-4 uppercase text-2xl font-bold'>Your cart</h3>
      <div>
        {/* your cart */}
        <ul className='flex flex-col gap-4'>
          {orders.map((card, index) => (
            <li key={index} className='flex gap-6'>
              <input type="checkbox" name={card.name} id={card.name} />
              <div className="w-[86px] h-[80px] flex justify-center items-center bg-[#F5F5F5] rounded flex-shrink-0">
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
              <div className='grow'>
                <p className='mb-[6px] text-xs font-bold'>{card.name}</p>
                <div>
                  <div className='flex justify-between'>
                  <p className='text-xs font-semibold'>{card.price}$</p>
                    <div className='flex items-center gap-[10px] mb-[6px]'>
                      <button type="button" className='flex justify-center items-center w-5 h-5 rounded-full bg-[#F5F5F5] text-[17px] font-bold'>-</button>
                      <p className='text-xs font-bold'>1</p>
                      <button type="button" className='flex justify-center items-center w-5 h-5 rounded-full bg-[#F5F5F5] text-[17px] font-bold'>+</button>
                    </div>
                  </div>
                </div>
                {card.amount > 0 ? (
                  <p className="text-xs font-bold text-[#34A853]">In stock</p>
                ) : (
                  <p className="text-xs font-bold text-[#B1B1B1]">Out of stock</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className='mt-7'>
          <p className='text-xs font-semibold'>Have a coupon? Enter your code.</p>
          <input type="text" placeholder='Coupon code' className='border-b-2'/>
          <button type="button" className='w-[128px] h-10 ml-6 uppercase border rounded'>Apply</button>
        </div>
        {/* cart totals */}
        <div>
          <h4 className="uppercase">Cart totals</h4>
          <p>Total</p>
          <div>
            <Link className="" href={'/catalog'}>
              Continue shopping
            </Link>
            <button type="button">PROCEED TO CHACKOUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
