interface BtnLogin {
  handleToogleChange?: () => void;
  tooglelogin?: boolean;
}

const BtnLogin: React.FC<BtnLogin> = ({ handleToogleChange, tooglelogin }) => {
  const classList1 = 'text-center text-lg font-bold mr-6 pb-3';
  const classList2 = classList1 + ' border-b border-blueBorder';

  return (
    <button
      type="button"
      onClick={handleToogleChange}
      className={tooglelogin ? classList1 : classList2}
    >
      LOGIN
    </button>
  );
};

export default BtnLogin;
