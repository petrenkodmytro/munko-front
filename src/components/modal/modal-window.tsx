import ModalWndForm from "./modal-window-form";


type ModalWndProps = {
  call: boolean;
  onDestroy: () => void;
  serverError?: string;
};

const ModalWnd: React.FC<ModalWndProps> = ({ call, onDestroy, serverError }) => {
  if (!call) {
    return null;
  }

  const closeWnd = (event: React.SyntheticEvent<EventTarget>): void => {
    if ((event.target as Element).id === 'modal') {
      onDestroy();
    }
  };

  return (
    <div
      id="modal"
      onClick={closeWnd}
      className="fixed z-50 top-0 left-0 w-full h-full bg-blackCustom/50"
    >
      <div className="fixed top-1/2 left-1/2 px-[62px] pt-11 pb-7 rounded max-w-[410px] w-full bg-white -translate-x-2/4 -translate-y-2/4">
        <button
          onClick={onDestroy}
          className="fixed top-5 left-5 cursor-pointer"
        >
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip329_278">
                <rect
                  id="x"
                  width="24.000000"
                  height="24.000000"
                  fill="black"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="x"
              width="24.000000"
              height="24.000000"
              fill="#000000"
              fillOpacity="0"
            />
            <g clipPath="url(#clip329_278)">
              <path
                id="Vector"
                d="M18 6L6 18"
                stroke="#000000"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                id="Vector"
                d="M6 6L18 18"
                stroke="#000000"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </button>
        <ModalWndForm onDestroy={onDestroy} serverError={serverError}/>
      </div>
    </div>
  );
};

export default ModalWnd;
