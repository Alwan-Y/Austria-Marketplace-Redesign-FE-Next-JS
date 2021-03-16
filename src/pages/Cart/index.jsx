import { connect } from 'react-redux';
import Action from '@/redux/action';
import Type from '@/redux/type';
import Heading3 from '@/components/commons/Heading3';
import Breadcrumb from '@/components/Breadcrumb';
import CartItems from '@/components/commons/CartItems';

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
              <CartItems nameItems="Jeans Papp" amountItems="IDR 200.000.000" />
              <CartItems nameItems="Jeans Papp" amountItems="IDR 200.000.000" />
              <CartItems nameItems="Jeans Papp" amountItems="IDR 200.000.000" />
            </div>
            <div className="col-lg-5">
              <div className=" rounded-0 cart__checkout__detail">
                <div className="card-body">
                  <Heading3 className="card-title cart__color">
                    Cost Information
                  </Heading3>
                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Woman shirt</h6>
                      <small className="cart__small">2 Items</small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        IDR 200.000
                      </h6>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Men's shirts</h6>
                      <small className="cart__small">2 Items</small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        IDR 200.000
                      </h6>
                    </div>
                  </div>

                  <hr />

                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Courier</h6>
                      <small className="cart__small">JNT Express</small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        IDR 20.000
                      </h6>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Tax</h6>
                      <small className="cart__small">Negara 20%</small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        IDR 42.000
                      </h6>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Total Price</h6>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-primary">
                        IDR 462.000
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

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
