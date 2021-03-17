import classNames from "classnames";

const CartCardItems = ({
  name,
  informationItem,
  amount,
  className
}) => {
  return (
    <div className="row mb-3">
      <div className="col">
        <h6 className="m-0">{name}</h6>
        <small className="cart__small">{informationItem}</small>
      </div>
      <div className="col d-flex justify-content-end">
        <h6 className={classNames('m-0 align-self-center', className)}>{amount}</h6>
      </div>
    </div>
  );
};

export default CartCardItems;
