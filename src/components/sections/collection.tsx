import Link from "next/link";
import Image from "next/image";
import imgMain from "./../../../public/image/collection-main.png";

type Props = {};

const Collection = (props: Props) => {
  return (
    <section>
      <div className="px-4 flex justify-center  bg-[#D63F3F]">
        <div>
          <p className="uppercase">marvel loki president</p>
          <Link className="block uppercase w-[226px] h-[42px] px-8 py-3 rounded-[5px] bg-white" href={"/"}>
            shop collection
          </Link>
        </div>
        <div className="w-[130px]">
          <Image
            src={imgMain}
            alt="main collection"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div>Slider</div>
    </section>
  );
};

export default Collection;
