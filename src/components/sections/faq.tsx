import Link from "next/link"

type Props = {}

export default function FAQ(props:Props) {
    return(
        <section className="px-4 text-xl">
            <article>What is a Funko Pop figures?</article>
            <article>How can I pay for the purchase?</article>
            <article>What Delivery methods do you have?</article>
            <button className="mx-auto h-[46px] rounded px-8 text-xl font-semibold bg-subscribeBtn text-white hover:bg-white hover:text-subscribeBtn hover:border-subscribeBtn hover:border-2 md:block md:m-auto duration-200 ease-linear">
        <Link href={'/catalog'}>MORE QUESTIONS</Link>
      </button>
        </section>
    )
}