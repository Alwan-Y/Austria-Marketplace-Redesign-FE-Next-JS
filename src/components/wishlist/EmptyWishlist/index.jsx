import { Heart } from '@/components/icons';

const EmptyWishlist = () => (
  <div className="d-flex px-5 py-5 flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
    <span className="border border-dashed border-success d-flex align-items-center justify-content-center p-5 rounded-lg">
      <Heart />
    </span>
    <h2 className="pt-4 font-bold text-center">Your wishlist is empty</h2>
  </div>
);

export default EmptyWishlist;
