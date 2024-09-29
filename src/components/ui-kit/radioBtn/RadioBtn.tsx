
interface IRadioBtn {
    label: string;
    id: string;
    name: string;
    checked: boolean;
    onChange: () => void;
  }
  
  const RadioBtn = (props: IRadioBtn) => {
    const { label, id, name, checked, onChange } = props;
  
    return (
      <div className="inline-flex ">
        <span><input type="radio" id={id} name={name} checked={checked} onChange={onChange} /></span>
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }
  
  export default RadioBtn;
  