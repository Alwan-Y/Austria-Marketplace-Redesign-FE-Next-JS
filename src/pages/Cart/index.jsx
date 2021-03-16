import { connect } from 'react-redux';
import Action from '@/redux/action';
import Type from '@/redux/type';
import Heading3 from '@/components/commons/Heading3';
import Breadcrumb from '@/components/Breadcrumb';
import CartItems from '@/components/commons/CartItems';
import Courier from '@/components/Courier';
import CartSummary from '@/components/CartSummary';

const Cart = (state, remove) => {
  return (
    <div>
      {console.log(state)}
      <div className="container cart-header cart__margin__2">
        <div className="mt-5 pt-4">
          <Breadcrumb name="Cart Checkout" />
        </div>
        <div className="row text-center mb-5 mt-5">
          <div className="col">
            <Heading3>Your Cart</Heading3>
            <p>Make sure your goods are paid off in full</p>
          </div>
        </div>
      </div>

      <div className="checkout">
        <div className="container">
          <div className="row justify-content-between cart__margin">
            <div className="col-lg-6">
              <Heading3 className="mb-4 cart__color">Your Items</Heading3>
              <CartItems nameItems="Jeans Papp" amountItems="IDR 200.000.000" />
              <hr />
              <CartItems nameItems="Jeans Papp" amountItems="IDR 200.000.000" />
              <hr />
              <CartItems nameItems="Jeans Papp" amountItems="IDR 200.000.000" />
              <hr />
              <CartItems nameItems="Jeans Papp" amountItems="IDR 200.000.000" />
              <hr />
              <Heading3 className="mt-5 mb-4 cart__color">Courier</Heading3>
              <Courier />
            </div>
            <div className="col-lg-5">
              <CartSummary />
              <div className="row mt-3">
                <div className="col">
                  <button type="button" className="btn btn-block black">
                    Cancel
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-warning btn-block text-white"
                    data-toggle="modal"
                    data-target="#checkoutModal"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (payload) => console.log(payload),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
