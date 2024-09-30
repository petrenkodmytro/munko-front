'use client';

import React, { Suspense, useEffect } from 'react';
import logo from './../../../public/image/Logo.png';
import Link from 'next/link';
import UserShoppingCart from './user-shopping-cart';
import SearchForm from './search-form';
import Navigation from './header-nav';
import BurgerMenu from './burger-menu';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';
import { useSession, signOut } from 'next-auth/react';
import { jwtDecode } from 'jwt-decode';

const Header = () => {
  const { width } = useWindowSize();

  const { data: session } = useSession();

  // User logout when token time has expired
  useEffect(() => {
    if (session && session.token) {
      const { exp }: { exp: number } = jwtDecode(session.token);

      if (exp * 1000 < Date.now()) {
        signOut({ callbackUrl: `${window.location.origin}` });
      }
    }
  }, [session]);

  return (
    <>
      <header className="pt-4 pb-2 max-h-[117px] lg:max-h-[110px] md:max-h-[80px] px-4 md:px-5 lg:px-20 md:pb-4 md:pt-0 bg-darkGreen flex justify-between">
        {width < 1024 && <BurgerMenu />}
        <div className="md:mr-auto w-40 md:w-28 lg:w-48 md:pt-px">
          <Link href={'/'}>
            <Image
              src={logo.src}
              alt="Logo"
              width={160}
              height={93}
              className=" md:pl-2.5 lg:px-0"
            />
          </Link>
        </div>
        <nav className="lg:block hidden mt-5 bg-darkGreen mr-auto w-3/4 absolute top-52 self-center lg:w-auto lg:static">
          <Navigation />
        </nav>
        <SearchForm />
        <Suspense>
          <UserShoppingCart />
        </Suspense>
      </header>
    </>
  );
};

export default Header;
