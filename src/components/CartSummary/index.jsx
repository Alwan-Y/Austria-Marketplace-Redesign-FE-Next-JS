import Heading3 from '@/components/commons/Heading3';
import CartCardItems from '../CartTotalItems';
import CartItems from '../commons/CartItems';
import { useState } from 'react';

const CartSummary = ({ courier, nameCourier, items }) => {
  return (
    <div className=" rounded-0 cart__checkout__detail">
      <div className="card-body">
        <Heading3 className="card-title cart__color">Cost Information</Heading3>
        {console.log(items)}
        {items.map((item) => {
          return (
            <CartCardItems
              name={item.name}
              informationItem={item.quantity}
              amount={item.price * item.quantity}
            />
          );
        })}
        {/* <CartCardItems
          name="Woman Shirt"
          informationItem="2 Items"
          amount="IDR 200.000"
        />
        <CartCardItems
          name="Woman Shirt"
          informationItem="2 Items"
          amount="IDR 200.000"
        />
        <CartCardItems
          name="Woman Shirt"
          informationItem="2 Items"
          amount="IDR 200.000"
        /> */}

        <hr />

        <CartCardItems
          name="Courier"
          informationItem={nameCourier}
          amount={courier}
        />
        <CartCardItems
          name="Tax"
          informationItem="PPN 10%"
          amount="IDR 40.000"
        />
        <CartCardItems
          name="Total Price"
          amount="eaeaeae"
          className="text-primary"
        />
      </div>
    </div>
  );
};

export default CartSummary;
