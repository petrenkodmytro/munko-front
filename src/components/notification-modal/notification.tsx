import IconClose from './../../../public/icons/icon-x-cart.svg';

type Props = {
  notify: boolean;
  setNotify: (modalState: boolean) => void;
  children: React.ReactNode;
};

const Notification = ({ notify, setNotify, children }: Props) => {
  if (!notify) {
    return null;
  }

  const closeNotify = (event: React.SyntheticEvent<EventTarget>): void => {
    if ((event.target as Element).id === 'modal') {
      setNotify(false);
    }
  };

  return (
    <div
      id="modal"
      onClick={closeNotify}
      className="fixed z-50 top-0 left-0 w-full h-full bg-blackCustom/50"
    >
      <div className="fixed top-1/2 left-1/2 px-12 py-10 rounded max-w-[370px] md:max-w-[576px] w-full bg-white -translate-x-2/4 -translate-y-2/4">
        <button
          onClick={() => setNotify(false)}
          className="fixed top-5 left-5 cursor-pointer"
        >
          <IconClose/>
        </button>
        {children}
      </div>
    </div>
  );
};
export default Notification;
