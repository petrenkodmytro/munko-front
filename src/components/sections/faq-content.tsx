type Props = {
  element: {
    question: string;
    answer: string;
  };
};

export default function Questions({ element }: Props) {
  const handleClick = function (event: React.SyntheticEvent<HTMLElement>) {
    const parent = event.currentTarget.parentElement as Element;
    const elem = parent.nextSibling as Element;

    const buttonShow = parent.childNodes[1] as Element;
    const buttonHide = parent.childNodes[2] as Element;
    if (elem.className === 'hidden') {
      elem.className =
        'text-blackCustom pb-8 font-normal mt-[27px] leading-[25px] md:mt-[4px] md:leading-[35px]';
      buttonShow.className = 'hidden';
      buttonHide.className =
        'text-[65px] font-normal pb-2.5 absolute right-2 top-2/4 -translate-y-2/4';
    } else {
      elem.className = 'hidden';
      buttonShow.className =
        'text-[65px] font-normal absolute top-2/4 -translate-y-2/4 right-0';
      buttonHide.className = 'hidden';
    }
  };

  return (
    <>
      <article className="relative">
        <h4 className="max-w-[271px] leading-[20px] py-3 md:leading-[30px] md:max-w-[548px] lg:max-w-full md:h-full">
          {element.question}
        </h4>
        <button
          onClick={handleClick}
          className="text-[65px] font-normal absolute top-2/4 -translate-y-2/4 right-0"
        >
          +
        </button>
        <button onClick={handleClick} className="hidden">
          -
        </button>
      </article>
      <p className="hidden">{element.answer}</p>
    </>
  );
}
