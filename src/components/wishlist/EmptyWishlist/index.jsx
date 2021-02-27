import { Heart } from '@/components/icons'

const EmptyWishlist = () => (
  <>
  <span className="border border-dashed border-secondary d-flex align-items-center justify-content-center p-5 rounded-lg">
    <Heart />
  </span>
  <h2 className="pt-4 font-bold text-center">
    Your wishlist is empty
  </h2>
  </>
)

export default EmptyWishlist