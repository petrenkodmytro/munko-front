interface BtnSignUp {
  handleToogleChange?: () => void;
  toogleLogin?: boolean;
}

const BtnSignUp: React.FC<BtnSignUp> = ({
  handleToogleChange,
  toogleLogin,
}) => {
  const classList1 = 'text-center text-lg font-bold pb-3';
  const classList2 = classList1 + ' border-b border-black';

  return (
    <button
      type="button"
      onClick={handleToogleChange}
      className={toogleLogin ? classList1 : classList2}
    >
      SIGN UP
    </button>
  );
};

export default BtnSignUp;
