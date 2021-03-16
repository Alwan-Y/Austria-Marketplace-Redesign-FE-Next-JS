import Heading3 from '@/components/commons/Heading3';
import CartTotalItems from '../CartTotalItems';

const CartSummary = () => {
  return (
    <div className=" rounded-0 cart__checkout__detail">
      <div className="card-body">
        <Heading3 className="card-title cart__color">Cost Information</Heading3>
        <CartTotalItems />
        <CartTotalItems />
        <CartTotalItems />

        <hr />

        <div className="row mb-3">
          <div className="col">
            <h6 className="m-0">Courier</h6>
            <small className="cart__small">JNT Express</small>
          </div>
          <div className="col d-flex justify-content-end">
            <h6 className="m-0 align-self-center text-success">IDR 20.000</h6>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <h6 className="m-0">Tax</h6>
            <small className="cart__small">Negara 20%</small>
          </div>
          <div className="col d-flex justify-content-end">
            <h6 className="m-0 align-self-center text-success">IDR 42.000</h6>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <h6 className="m-0">Total Price</h6>
          </div>
          <div className="col d-flex justify-content-end">
            <h6 className="m-0 align-self-center text-primary">IDR 462.000</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
