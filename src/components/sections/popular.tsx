import React from 'react';
import icon from './../../../public/image/pinterest-marentorri.png'

const Popular = () => {

  return (
    <section>
      <div className="text-2xl text-black font-extrabold px-4 mb-5">HOT RIGHT NOW</div>
      <div>
        <div className="w-[242px] h-[384px] px-3 py-6 rounded shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)]">
          <div className='w-44 h-36 m-auto'>
            <img src={icon.src} alt="" />
          </div>
          <div className='text-base text-black my-5'>
            <span className=''>POP!</span>
            <p className='font-bold mb-5'>LOKI:AGENT OF ASGARD - MARVEL</p>
            <p className='font-bold'>12$</p>
          </div>
          <button className='m-auto rounded text-base font-bold py-1.5 hover:py-1 w-full bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2'>
            ADD TO CARD
          </button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
