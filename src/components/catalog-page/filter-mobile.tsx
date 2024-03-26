'use cluent';

import { useState, useEffect } from 'react';
import { BackDrop } from '../header/back-drop';
import FilterIcon from './../../../public/icons/filter-icon.svg';
import Filter from './filter';

const FilterMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({ display: 'none' });

  const handleMenu = () => {
    setIsOpen(() => !isOpen);
    if (isOpen) {
      setHideOrShow(() => {
        return { display: 'none' };
      });
    } else {
      setHideOrShow(() => {
        return { display: 'flex' };
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleMenu}
        className="xl:hidden inline-flex gap-[10px] justify-center items-center text-lg font-medium "
      >
        <FilterIcon />
        Filter
      </button>

      {isOpen ? <BackDrop handleMenu={handleMenu} /> : null}
      <div
        style={hideOrShow}
        className="absolute md:rounded md:shadow-[5px_5px_20px_0px_rgb(124,157,150)] z-20 pt-24 md:pt-28 flex-col top-0 w-[390px] md:w-[353px] h-[616px] md:h-[461px] items-center -ml-4 md:-ml-5 bg-footer"
      >
        <button onClick={handleMenu} className="cursor-pointer z-40">
          close
        </button>
        {/* <Filter/> */}
      </div>
    </div>
  );
};

export default FilterMobile;
