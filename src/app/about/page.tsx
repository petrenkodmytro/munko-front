import Image from 'next/image';
import Link from 'next/link';
import { aboutUs } from '../../../public/images';

const [aboutBaner, about1, about2, about3, about4] = aboutUs;

const About = () => {
  return (
    <section className="text-[#08080D] pb-10  md:pb-[72px] text-base md:text-xl font-medium">
      <div
        // className="w-full h-[152px] md:h-[278px] lg:h-[420px] xl:h-[556px] bg-contain bg-no-repeat "
         className="bg-contain bg-no-repeat min-h-[152px] md:min-h-[278px] lg:min-h-[496px] xl:min-h-[557px] object-cover object-center "
        style={{
          backgroundImage: `url('./image/about-banner.png')`,
        }}
      ></div>

      <div className="relative max-w-[358px] md:max-w-[680px] lg:w-auto lg:max-w-[980px] xl:max-w-[1280px] lg:py-[60px] lg:px-[84px] mx-auto mt-[-20px] lg:mt-[-50px] rounded-md p-5 bg-lightGrey shadow-[0px_0px_30px_0px_rgb(0,0,0,0.15)]">
        <p className="text-2xl font-semibold text-center mb-5 lg:mb-10 md:text-4xl">
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
        <p className="pt-4">
          What makes us special? We are not only sellers, but also true
          supporters of the culture we represent. Each element of our assortment
          is chosen with love and care, because we believe that every fan
          deserves to have in his collection exactly what he really likes.
        </p>
      </div>

      <div className="overflow-hidden flex gap-3 md:gap-10 pb-7 mt-[-10px]">
        <div className="ml-[-35px] md:ml-[-15px] shrink-0">
          <Image
            src={about1}
            alt="image munko"
            loading="lazy"
            className="h-[295px] md:h-[336px] w-auto rounded"
          />
        </div>
        <div className="">
          <Image
            src={about2}
            alt="image munko"
            loading="lazy"
            className="w-[221px] md:w-[470px] md:ml-auto rounded-l"
          />
          <p className="pt-4 md:pt-10 pr-4 md:pr-5 leading-5 md:leading-7">
            We want to create not just a store, but a real community for
            everyone who, like us, is devoted to their favorite characters.
            Whether you are a beginner collector or a seasoned geek, we want to
            make your stay with us exciting and memorable.
          </p>
        </div>
      </div>

      <div className="relative py-2 md:py-5 bg-lightGrey shadow-[0px_0px_27px_0px_rgb(0,0,0,0.15)]">
        <div className="w-[150px] md:w-[236px] [clip-path:circle(100.0%_at_0_50%)]">
          <Image src={about3} alt="image munko" loading="lazy" />
        </div>
        <div className="px-5 py-2 md:pt-5 md:absolute top-0 left-[230px]">
          <p className="mb-3">
            Join our community, where everyone can find their favorite hero and
            share their passion. We are sure that you will find here not only
            figurines, but also new friends and an inexhaustible source of
            inspiration.
          </p>
          <p className="">
            Welcome to our magical place where everyone can make their little
            world fantastic!
          </p>
        </div>

        <div className="w-[150px] md:w-[236px] ml-auto [clip-path:circle(100%_at_100%_50%)]">
          <Image src={about4} alt="image munko" loading="lazy" />
        </div>

        <Link
          href={'/catalog'}
          className="inline-block absolute bottom-12 md:bottom-24 left-10 md:left-52 rounded px-8 py-2 text-xl font-semibold bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 md:block md:m-auto duration-200 ease-linear"
        >
          CATALOG
        </Link>
      </div>
    </section>
  );
};

export default About;
