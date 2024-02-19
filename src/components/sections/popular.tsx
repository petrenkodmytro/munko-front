import React from 'react';
import Card from '../card/Card';

const Popular = () => {
  return (
    <section className='mb-8 md:mb-12'>
      <div className="text-2xl text-black font-extrabold px-4 mb-5 md:font-bold md:text-3xl">
        HOT RIGHT NOW
      </div>
      <div>
        <Card />
      </div>
    </section>
  );
};

export default Popular;
