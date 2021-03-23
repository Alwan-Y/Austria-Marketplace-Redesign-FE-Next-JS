import { connect } from 'react-redux';
import Action from '@/redux/action';
import Type from '@/redux/type';
import Heading3 from '@/components/commons/Heading3';
import Breadcrumb from '@/components/Breadcrumb';
import CartItems from '@/components/commons/CartItems';
import Courier from '@/components/Courier';
import CartSummary from '@/components/CartSummary';
import Button from '@/components/commons/Button';
import { useState } from 'react';
import EmpetyCart from '@/components/EmpetyCart';

const Cart = ({ items, addIncrement, removeIncrement, removeItem }) => {
  const [courier, setCourier] = useState(0);
  const [courireName, setCourierName] = useState('');
  const [tax, setTax] = useState(0);
  const [amountTotal, setAmountTotal] = useState(0);

  return (
    <div>
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
          {!items.length ? (
            <EmpetyCart />
          ) : (
            <div className="row justify-content-between cart__margin">
              <div className="col-lg-6">
                <Heading3 className="mb-4 cart__color">Your Items</Heading3>
                {items.map((val, idx) => {
                  return (
                    <CartItems
                      nameItems={val.name}
                      amountItems={val.price}
                      quantity={val.quantity}
                      key={idx}
                      onClickPlus={() => {
                        addIncrement(val);
                      }}
                      onClickMinus={() => {
                        removeIncrement(val);
                      }}
                      onClickDelete={() => {
                        removeItem(val);
                      }}
                    />
                  );
                })}
                <Heading3 className="mt-5 mb-4 cart__color">Courier</Heading3>
                <Courier
                  onClickJNE={() => {
                    setCourier(14000);
                    setCourierName('JNE');
                  }}
                  onClickJNT={() => {
                    setCourier(12000);
                    setCourierName('JNT');
                  }}
                />
              </div>
              <div className="col-lg-5">
                <CartSummary
                  courier={courier}
                  nameCourier={courireName}
                  items={items}
                />
                <div className="row mt-3">
                  <div className="col">
                    <Button
                      type="button"
                      className="btn btn-secondary btn-block text-white"
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// const totalAmount = (cart) => {
//   const {items} = cart
//   items.map()
//   console.log(items)
// }

const mapStateToProps = (state) => {
  const { cart } = state;

  return cart;
};

const mapDispatchToProps = (dispatch) => ({
  addIncrement: (payload) => dispatch(Action(Type.ADD_TO_CART, payload)),
  removeIncrement: (payload) =>
    dispatch(Action(Type.REMOVE_INCREMENT, payload)),
  removeItem: (payload) => dispatch(Action(Type.REMOVE_FROM_CART, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
