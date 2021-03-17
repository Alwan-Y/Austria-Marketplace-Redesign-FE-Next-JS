import Heading3 from '@/components/commons/Heading3';
import CartCardItems from '../CartTotalItems';

const CartSummary = () => {
  return (
    <div className=" rounded-0 cart__checkout__detail">
      <div className="card-body">
        <Heading3 className="card-title cart__color">Cost Information</Heading3>
        <CartCardItems name="Woman Shirt" informationItem="2 Items" amount="IDR 200.000"/>
        <CartCardItems name="Woman Shirt" informationItem="2 Items" amount="IDR 200.000"/>
        <CartCardItems name="Woman Shirt" informationItem="2 Items" amount="IDR 200.000"/>

        <hr />

        <CartCardItems name="Courier" informationItem="JNT Express" amount="IDR 20.000"/>
        <CartCardItems name="Tax" informationItem="PPN 10%" amount="IDR 40.000"/>
        <CartCardItems name="Total Price" amount="IDR 462.000" className="text-primary"/>
      </div>
    </div>
  );
};

export default CartSummary;
