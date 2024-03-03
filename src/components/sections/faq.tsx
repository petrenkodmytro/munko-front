import Link from "next/link"

type Props = {}

export default function FAQ(props:Props) {
    return(
        <section className="flex flex-col px-4 mt-8 text-xl font-semibold">
            <div className="flex p-4 mb-5 justify-between shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)]">
            <article>What is a Funko Pop figures?</article>
            <button className="text-[65px] font-normal">+</button>
            </div>
            <div className="flex p-4 mb-5 justify-between shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)]">
            <article>How can I pay for the purchase?</article>
            <button className="text-[65px] font-normal">+</button>
            </div>
            <div className="flex p-4 justify-between shadow-[0px_0px_20px_0px_rgb(0,0,0,0.15)]">
            <article>What Delivery methods do you have?</article>
            <button className="text-[65px] font-normal">+</button>
            </div>
            <button className="mx-auto mt-[30px] mb-[40px] h-[46px] rounded px-8 text-xl font-semibold bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 md:block duration-200 ease-linear">
        <Link href={'/catalog'}>MORE QUESTIONS</Link>
      </button>
        </section>
    )
}