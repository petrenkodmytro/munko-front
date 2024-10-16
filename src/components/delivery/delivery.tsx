import MeestExpress from '../delivery/meestExpress';
import NovaPost from '../delivery/novaPost';
import RadioBtn from '../ui-kit/radioBtn/RadioBtn';
import UkrPost from './ukrPost';

type Props = {
  deliveryMethod: string;
  setDeliveryMethod: (deliveryMethod: string) => void;
};

const Delivery = ({ deliveryMethod, setDeliveryMethod }: Props) => {
  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod(e.target.value);
  };
  return (
    <div>
      <RadioBtn
        label="Nova Poshta"
        id="nova-poshta"
        name="deliveryMethod"
        value="nova-poshta"
        onChange={handleDeliveryChange}
      />
      {deliveryMethod === 'nova-poshta' && <NovaPost />}
      <RadioBtn
        label="Ukrposhta"
        id="ukrposhta"
        name="deliveryMethod"
        value="ukrposhta"
        onChange={handleDeliveryChange}
      />
      {deliveryMethod === 'ukrposhta' && <UkrPost />}
      <RadioBtn
        label="Meest Express"
        id="meest-express"
        name="deliveryMethod"
        value="meest-express"
        onChange={handleDeliveryChange}
      />
      {deliveryMethod === 'meest-express' && <MeestExpress />}
    </div>
  );
};

export default Delivery;
