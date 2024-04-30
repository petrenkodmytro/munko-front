import Link from 'next/link';
import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Back to{' '}
        <Link href="/" className="italic text-indigo-500">
          HomePage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
