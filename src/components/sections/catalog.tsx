import React from 'react';
import Card from '../card/Card';

const Catalog = () => {
  return (
    <section className='mb-8'>
      <div className="text-2xl text-black font-extrabold px-4 mb-5 md:font-bold md:text-3xl md:text-center">
        CATALOG
      </div>
      <div className='mb-5 md:mb-9'>
        <Card />
      </div>
      <button className="mx-14 rounded px-8 text-xl h-11 font-semibold py-2.5 hover:py-2 bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 md:block md:m-auto">
        SEE MORE FIGURES
      </button>
    </section>
  );
};

export default Catalog;
