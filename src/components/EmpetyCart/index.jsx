import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EmpetyCart = () => {
  return (
    <div className="group d-flex flex-column cart__martop_empety">
      <div
        className="d-flex px-5 py-5 flex flex-column justify-content-center align-items-center"
        style={{ height: '80vh' }}
      >
        <span className="border border-dashed border-success d-flex align-items-center justify-content-center p-5 rounded-lg">
          <FontAwesomeIcon icon={faCartPlus} />
        </span>
        <h2 className="pt-4 font-bold text-center">Your Cart is empty</h2>
      </div>
    </div>
  );
};

export default EmpetyCart;
