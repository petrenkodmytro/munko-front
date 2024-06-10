'use client';

import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

type Props = {};

export default function Spinner({}: Props) {
  return (
    <div className="flex justify-center items-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#7C9D96"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}
