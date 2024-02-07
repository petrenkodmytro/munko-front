import React from "react";
import logo from "./../../../public/image/LogoMobile.png";

const Header = () => {
  return (
    <>
      <header className="min-w-390 h-auto bg-header flex justify-between">
        <div className="w-16 ml-4 pb-9 self-end">
          <div className="pl-1 cursor-pointer">
            <svg
              className="w-6 h-5 pl-0"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h20M4 12h16M4 18h12"></path>
            </svg>
          </div>
          <nav className="hidden">
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">Coming soon</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="pt-6 pb-4 h{78}">
          <img src={logo.src} alt="Logo" width="163px" className="h-{78}"/>
        </div>
        <div className="w-16 mr-4 pb-8 self-end">
          <span className="inline-block align-bottom">
            <svg
              width="29.000000"
              height="27.000000"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip302_3838">
                  <rect
                    id="user"
                    width="29.000000"
                    height="27.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="user"
                width="29.000000"
                height="27.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip302_3838)">
                <path
                  id="Vector"
                  d="M23.7949 22.7368L23.7949 20.6052C23.7949 19.4745 23.3057 18.3901 22.4336 17.5907C21.5625 16.7911 20.3799 16.342 19.1475 16.342L9.85254 16.342C8.62012 16.342 7.4375 16.7911 6.56641 17.5907C5.69434 18.3901 5.20508 19.4745 5.20508 20.6052L5.20508 22.7368"
                  stroke="#FFFFFF"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M14.8721 12.079C12.4072 12.079 10.4102 10.1703 10.4102 7.8158C10.4102 5.4613 12.4072 3.55261 14.8721 3.55261C17.3359 3.55261 19.333 5.4613 19.333 7.8158C19.333 10.1703 17.3359 12.079 14.8721 12.079Z"
                  stroke="#FFFFFF"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </span>
          <span className="inline-block pl-1.5 align-bottom">
            <svg
              width="25.000000"
              height="25.000000"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip302_3839">
                  <rect
                    id="shopping-cart"
                    width="25.000000"
                    height="25.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="shopping-cart"
                width="25.000000"
                height="25.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip302_3839)">
                <path
                  id="Vector"
                  d="M9.375 22.9167C8.7998 22.9167 8.33301 22.4503 8.33301 21.875C8.33301 21.2998 8.7998 20.8334 9.375 20.8334C9.9502 20.8334 10.416 21.2998 10.416 21.875C10.416 22.4503 9.9502 22.9167 9.375 22.9167Z"
                  stroke="#FFFFFF"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M20.834 22.9167C20.2588 22.9167 19.792 22.4503 19.792 21.875C19.792 21.2998 20.2588 20.8334 20.834 20.8334C21.4092 20.8334 21.875 21.2998 21.875 21.875C21.875 22.4503 21.4092 22.9167 20.834 22.9167Z"
                  stroke="#FFFFFF"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M1.04199 1.04163L5.20898 1.04163L8 14.9895C8.0957 15.4691 8.35645 15.8999 8.7373 16.2065C9.11816 16.5132 9.59473 16.676 10.084 16.6666L20.209 16.6666C20.6973 16.676 21.1738 16.5132 21.5547 16.2065C21.9355 15.8999 22.1963 15.4691 22.292 14.9895L23.959 6.25L6.25 6.25"
                  stroke="#FFFFFF"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
