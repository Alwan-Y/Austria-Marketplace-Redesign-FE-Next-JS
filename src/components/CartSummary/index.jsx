import Heading3 from '@/components/commons/Heading3';
import CartCardItems from '../CartTotalItems';
import CartItems from '../commons/CartItems';
import { useState } from 'react';

const CartSummary = ({ courier, nameCourier, items, totalAmount }) => {
  const [amount, setAmount] = useState(0);
  let totalharga = 0;

  let newCourier = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(courier);

  const findTotalAmount = () => {
    totalAmount.forEach((val) => {
      totalharga = totalharga + val;
    });
    setAmount(totalharga + courier);
  };

  let newAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);

  return (
    <div className=" rounded-0 cart__checkout__detail">
      <div className="card-body">
        <Heading3 className="card-title cart__color">Cost Information</Heading3>
        {items.map((item, idx) => {
          let newAmount = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
          }).format(item.price * item.quantity);

          return (
            <CartCardItems
              name={item.name}
              informationItem={item.quantity}
              amount={newAmount}
              key={idx}
            />
          );
        })}
        <hr />

        <CartCardItems
          name="Courier"
          informationItem={nameCourier}
          amount={newCourier}
        />
        <CartCardItems
          name="Total Price"
          amount={newAmount}
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
