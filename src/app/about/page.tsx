import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img1 from '../../../public/image/about-img1.png';
import img2 from '../../../public/image/about-img2.png';

const About = () => {
  return (
    <section className="text-[#08080D] px-4 pt-6 pb-10 md:px-5 md:pb-[72px] xl:px-20 xl:pt-9">
      <p className="text-2xl font-semibold text-center mb-6 md:text-3xl">
        About us
      </p>
      <div className="mb-4 text-xs md:mb-6 md:text-base">
        <Link className="underline" href={'/'}>
          Home page
        </Link>
        / About us
      </div>
      <div className="">
        <div className="w-[300px] md:w-[500px] mb-7">
          <Image src={img1} alt="image munko" width={500} />
        </div>
        <p>
          Welcome to our unique store! We are a team of true geeks who simply
          love what they do. We want to share with you our passion for the
          iconic Funko Pop figures, as well as our unique story. Not so long
          ago, we were just like you - fans of this unique art of collection.
          Each of us, even as a child, dreamed of having our own army of
          favorite characters. And now we are here, opening this store, to share
          our passion with you. What makes us special? We are not only sellers,
          but also true supporters of the culture we represent. Each element of
          our assortment is chosen with love and care, because we believe that
          every fan deserves to have in his collection exactly what he really
          likes.
        </p>
      </div>
      <div>
        <div className="w-[300px] md:w-[500px] mb-7">
          <Image src={img2} alt="image munko" width={500} />
        </div>
        <p>
          We want to create not just a store, but a real community for everyone
          who, like us, is devoted to their favorite characters. Whether you are
          a beginner collector or a seasoned geek, we want to make your stay
          with us exciting and memorable. Join our community, where everyone can
          find their favorite hero and share their passion. We are sure that you
          will find here not only figurines, but also new friends and an
          inexhaustible source of inspiration. Welcome to our magical place
          where everyone can make their little world fantastic!
        </p>
      </div>
    </section>
  );
};

export default About;
