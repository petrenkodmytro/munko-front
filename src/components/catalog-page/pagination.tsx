import React from 'react';
import { number } from 'yup';

interface IPaginationProps {
  paginationValue: {
    page: number;
    perPage: number;
    pageCount: number;
    totalCount: number;
  };
}

const SimplePagination = ({ paginationValue }: IPaginationProps) => {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active !== 1) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="ml-auto mr-auto flex items-center gap-8">
      <button onClick={prev} disabled={active===1} type="button">
        prev
      </button>
      <p>
        Page{' '}
        <strong className="text-gray-900">{active}</strong> of{' '}
        <strong className="text-gray-900">{paginationValue.pageCount}</strong>
      </p>
      <button
        onClick={next}
        disabled={paginationValue.page + 1 === paginationValue.pageCount}
        type="button"
      >
        next
      </button>
    </div>
  );
};
export default SimplePagination;
