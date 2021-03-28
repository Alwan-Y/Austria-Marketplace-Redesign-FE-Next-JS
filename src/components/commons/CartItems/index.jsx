import {
  faMinusCircle,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/components/commons/Button';

const CartItems = ({
  nameItems,
  amountItems,
  quantity,
  onClickPlus,
  onClickMinus,
  onClickDelete,
  miniImg
}) => {
  return (
    <div className="row mb-4">
      <div className="col-2">
        <img src={miniImg}/>
      </div>
      <div className="col-4">
        <h5 className="m-0">{nameItems}</h5>
        <p className="m-0 cart__small">{amountItems}</p>
      </div>
      <div className="col-4">
        <Button size="sm" className="cart__minus" onClick={onClickMinus}>
          <FontAwesomeIcon icon={faMinusCircle} />
        </Button>
        <span className="mx-2">{quantity}</span>
        <Button size="sm" className="cart__plus" onClick={onClickPlus}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
      </div>
      <div className="col-2 text-right">
        <Button
          size="sm"
          type="danger"
          className="cart__delete"
          onClick={onClickDelete}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
      </div>
    </div>
  );
};

export default CartItems;
