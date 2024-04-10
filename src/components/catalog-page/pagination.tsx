import React from 'react';

export function SimplePagination() {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="ml-auto mr-auto flex items-center gap-8">
      <button onClick={prev} disabled={active === 1} type="button">
      prev
      </button>
      <p>
        Page <strong className="text-gray-900">{active}</strong> of{' '}
        <strong className="text-gray-900">10</strong>
      </p>
      <button onClick={next} disabled={active === 10} type="button">
        next
      </button>
    </div>
  );
}
