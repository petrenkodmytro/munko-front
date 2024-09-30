import { Children } from "react";

interface IRadioBtn {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const RadioBtn = (props: IRadioBtn) => {
  const { label, id,  name, value, onChange, children } = props;

  return (
    <div className="flex items-center">
      <span className="relative w-4 h-4 inline-flex items-center justify-center has-[:checked]:after:content-[''] has-[:checked]:after:w-1.5 has-[:checked]:after:h-1.5 has-[:checked]:after:bg-darkGreen  has-[:checked]:after:rounded-full before:content-[''] before:absolute rounded-full border-2 border-darkGreen">
        <input
          className="absolute w-5 h-5 opacity-0 m-0"
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </span>
      <label className="ml-2" htmlFor={id}>{label} {children}</label>
    </div>
  );
};

export default RadioBtn;
