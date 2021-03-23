import Heading3 from '@/components/commons/Heading3';
import CartCardItems from '../CartTotalItems';
import CartItems from '../commons/CartItems';
import { useState } from 'react';

const CartSummary = ({ courier, nameCourier, items, totalAmount }) => {
  const [amount, setAmount] = useState(0);
  let totalharga = 0;

  const findTotalAmount = () => {
    totalAmount.forEach((val) => {
      totalharga = totalharga + val;
    });
    setAmount(totalharga + courier);
  };

  return (
    <div className=" rounded-0 cart__checkout__detail">
      <div className="card-body">
        <Heading3 className="card-title cart__color">Cost Information</Heading3>
        {items.map((item, idx) => {
          return (
            <CartCardItems
              name={item.name}
              informationItem={item.quantity}
              amount={item.price * item.quantity}
              key={idx}
            />
          );
        })}
        <hr />

        <CartCardItems
          name="Courier"
          informationItem={nameCourier}
          amount={courier}
        />
        <CartCardItems
          name="Total Price"
          amount={amount}
          className="text-primary"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            findTotalAmount();
          }}
        >
          {' '}
          check{' '}
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
