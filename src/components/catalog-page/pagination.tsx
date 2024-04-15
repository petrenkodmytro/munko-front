import IconArrowLeft from '../../../public/icons/arrow-left-pagination.svg';
import IconArrowRight from '../../../public/icons/arrow-right-pagination.svg';

interface IPaginationProps {
  paginationValue: {
    page: number;
    perPage: number;
    pageCount: number;
    totalCount: number;
  };
  setPageCatalog: (arg: number) => void;
}

const SimplePagination = ({
  paginationValue,
  setPageCatalog,
}: IPaginationProps) => {
  const next = () => {
    if (paginationValue.page + 1 === paginationValue.pageCount) return;
    setPageCatalog(paginationValue.page + 1);
  };

  const prev = () => {
    if (paginationValue.page + 1 === 1) return;
    setPageCatalog(paginationValue.page - 1);
  };

  return (
    <div className="ml-auto mr-auto flex items-center gap-8">
      <button
        onClick={prev}
        disabled={paginationValue.page + 1 === 1}
        type="button"
        className="flex justify-center items-center rounded-[5px] disabled:bg-[#B1B1B1] text-white bg-subscribeBtn duration-200 ease-linear w-10 h-8 px-1 py-2 shrink-0 lg:enabled:hover:bg-white lg:enabled:hover:text-subscribeBtn lg:enabled:hover:border-[3px] lg:hover:border-subscribeBtn"
      >
        <IconArrowLeft />
      </button>

      <p>
        Page{' '}
        <strong className="text-gray-900">{paginationValue.page + 1}</strong> of{' '}
        <strong className="text-gray-900">{paginationValue.pageCount}</strong>
      </p>
      <button
        onClick={next}
        disabled={paginationValue.page + 1 === paginationValue.pageCount}
        type="button"
        className="flex justify-center items-center rounded-[5px] disabled:bg-[#B1B1B1] text-white bg-subscribeBtn duration-200 ease-linear w-10 h-8 px-1 py-2 shrink-0 lg:enabled:hover:bg-white lg:enabled:hover:text-subscribeBtn lg:enabled:hover:border-[3px] lg:hover:border-subscribeBtn"
      >
        <IconArrowRight />
      </button>
    </div>
  );
};
export default SimplePagination;
