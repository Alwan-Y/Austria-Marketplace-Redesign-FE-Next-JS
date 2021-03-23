import Card from '@/components/Card';
import WishlistControl from '../WishlistControl';

const WishlistCard = ({ product, onRemove, onAddToCart }) => (
  <Card
    item={product}
    additionalContent={
      <WishlistControl
        removeItemEvent={onRemove}
        addItemToCartEvent={onAddToCart}
      />
    }
  />
);

export default WishlistCard;
