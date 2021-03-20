import Button from '@/components/commons/Button';

const WishlistControl = ({ addItemToCartEvent, removeItemEvent }) => (
  <>
    <Button size="lg" block={true} className="btn__black rounded-0 text-light" onClick={addItemToCartEvent}>Add to Cart</Button>
    <Button size="lg" block={true} className="btn__default" onClick={removeItemEvent}>Remove</Button>
  </>
);

export default WishlistControl;