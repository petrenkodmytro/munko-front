import Image from 'next/image';
import Link from 'next/link';
import { aboutUs } from '../../../public/images';

const [aboutBaner, about1, about2, about3, about4] = aboutUs;

const About = () => {
  return (
    <section className="text-[#08080D] px-4 pt-6 pb-10 md:px-5 md:pb-[72px] xl:px-20 xl:pt-9">
      <Image src={aboutBaner} alt="image munko" loading="lazy" />

      <div>
        <p className="text-2xl font-semibold text-center mb-6 md:text-3xl">
          About us
        </p>{' '}
        <p>
          Welcome to our unique store! We are a team of true geeks who simply
          love what they do. We want to share with you our passion for the
          iconic Funko Pop figures, as well as our unique story.
        </p>
        <p>
          Not so long ago, we were just like you - fans of this unique art of
          collection. Each of us, even as a child, dreamed of having our own
          army of favorite characters. And now we are here, opening this store,
          to share our passion with you.
        </p>
        <p>
          What makes us special? We are not only sellers, but also true
          supporters of the culture we represent. Each element of our assortment
          is chosen with love and care, because we believe that every fan
          deserves to have in his collection exactly what he really likes.
        </p>
      </div>

      <div>
        <div className="w-[300px] md:w-[500px] mb-7">
          <Image src={about1} alt="image munko" loading="lazy" />
        </div>
        <div>
          <Image src={about2} alt="image munko" loading="lazy" />
          <p>
            We want to create not just a store, but a real community for
            everyone who, like us, is devoted to their favorite characters.
            Whether you are a beginner collector or a seasoned geek, we want to
            make your stay with us exciting and memorable.
          </p>
        </div>
      </div>

      <div>
      <Image src={about3} alt="image munko" loading="lazy" />
      <p>Join our community, where everyone can find their favorite hero and share their passion. We are sure that you will find here not only figurines, but also new friends and an inexhaustible source of inspiration.</p>
      <p>Welcome to our magical place where everyone can make their little world fantastic!</p>
      <Image src={about4} alt="image munko" loading="lazy" />
      </div>
    </section>
  );
};

export default About;
