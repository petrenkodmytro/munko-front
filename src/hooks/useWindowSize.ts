'use client';
import { useState } from 'react';
import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';

interface WindowSize {
  width: number;
  height: number;
  preMobSize: boolean;
  mobileSize: boolean;
  preTabletSize: boolean;
  smallTabletSize: boolean;
  tablet: boolean;
  bigTablet: boolean;
  predesktop: boolean;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    preMobSize: false,
    mobileSize: false,
    preTabletSize: false,
    smallTabletSize: false,
    tablet: false,
    bigTablet: false,
    predesktop: false,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      preMobSize: window.innerWidth < 417,
      mobileSize: window.innerWidth < 550,
      preTabletSize: window.innerWidth < 660,
      smallTabletSize: window.innerWidth < 843,
      tablet: window.innerWidth < 990,
      bigTablet: window.innerWidth < 1101,
      predesktop: window.innerWidth < 1561,
    });
  };

  useEventListener('resize', handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    return () => {
      window.removeEventListener('resize', handleSize);
    };
    // console.log('Using isomorphic layout effect');
  }, []);

  return windowSize;
}

export default useWindowSize;

// import { useIsomorphicLayoutEffect } from 'usehooks-ts'

// export default function Component() {
//   useIsomorphicLayoutEffect(() => {
//     console.log(
//       "In the browser, I'm an `useLayoutEffect`, but in SSR, I'm an `useEffect`.",
//     )
//   }, [])
//   // console.log('Using isomorphic layout effect');
//   // return <p>Hello, world</p>
// }



// import { useState, useEffect } from "react";

// export default function WindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       function handleResize() {
//         setWindowSize({
//           width: window.innerWidth
//         });
//       }
//       window.addEventListener("resize", handleResize);
//       handleResize();
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []);
//   return windowSize;
// }
