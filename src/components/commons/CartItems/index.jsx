import {
  faMinusCircle,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/components/commons/Button';

const CartItems = ({ nameItems, amountItems }) => {
  return (
    <div className="row mb-4">
      <div className="col-2">
        <img src="img/item1.png" />
      </div>
      <div className="col-4">
        <h5 className="m-0">{nameItems}</h5>
        <p className="m-0 cart__small">{amountItems}</p>
      </div>
      <div className="col-4">
        <Button size="sm" className="cart__minus">
          <FontAwesomeIcon icon={faMinusCircle} />
        </Button>
        <span className="mx-2">20</span>
        <Button size="sm" className="cart__plus">
          <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
      </div>
      <div className="col-2 text-right">
        <Button size="sm" type="danger" className="cart__delete">
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
      </div>
    </div>
  );
};

export default CartItems;
