'use client';

import { ReactNode, useState } from 'react';
import AvatarCamera from './../../../../public/icons/cabinet-avatar-camera.svg';
import EditForm from '@/components/cabinet/shipment/edit-form';

type Props = {};

let list: ReactNode[] = [];
for (let i = 0; i < 17; i++) {
  list.push(
    <li
      className="w-4 h-2 skew-x-[-38deg] bg-[#3B37AD] odd:bg-red-600"
      key={i}
    />
  );
}

const Shipment = (props: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex gap-4 p-11">
      <div className="flex justify-center items-center w-[54px] h-[54px] bg-[#B1B1B1] rounded-full">
        <AvatarCamera />
      </div>

      {isEdit ? (
        <EditForm setIsEdit={setIsEdit}/>
      ) : (
        <div className="relative overflow-hidden px-[38px] pt-6 pb-5 bg-[#F5F5F5] rounded shadow-[0px_0px_4px_0px_rgb(0,0,0,0.25)]">
          <ul className="absolute flex gap-1 top-1 left-1 ">{list}</ul>
          <div className="flex gap-3 mb-[14px]">
            <p>Emma Jackson</p>
            <p>+380970982345</p>
          </div>
          <p>Chernihivska 51</p>
          <div className="flex gap-1 mb-[14px]">
            <p>Kyiv</p>
            <p>Kyiv</p>
            <p>Ukaraine</p>
            <p>02002</p>
          </div>
          <button
            onClick={() => {
              setIsEdit(true);
            }}
            type="button"
            className="text-xs font-semibold text-[#D63F3F]"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Shipment;
