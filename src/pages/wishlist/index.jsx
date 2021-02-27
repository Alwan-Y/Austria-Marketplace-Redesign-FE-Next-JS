import { WishlistCard, EmptyWishlist } from "@/components/wishlist"

export default function Wishlist() {
  const data = null

  /**
   * @todo:
   * 1. Get wishlist state from redux
   * 2. Mapping data to show wishlist
   * 3. add to cart event
   * 4. remove from wishlist event
   */

  return (
    <div className="container">
      <div className="mt-3 mb-20">
        <h2>My Wishlist</h2>
        <div className="group d-flex flex-column">
          <div className="d-flex px-5 py-5 flex flex-column justify-content-center align-items-center">
            {!data ? <EmptyWishlist /> :
              <div className="row">
                <WishlistCard cols="4" product={{name: "baju koko", price: 1000, url: "/image.jpg"}}/>
                <WishlistCard cols="4" product={{name: "baju kiki", price: 1000, url: "/image1.jpg"}}/>
                <WishlistCard cols="4" product={{name: "baju koko", price: 1000, url: "/image1.jpg"}}/>
                <WishlistCard cols="4" product={{name: "baju kak", price: 1000, url: "/image.jpg"}}/>
                <WishlistCard cols="4" product={{name: "baju keke", price: 1000, url: "/image.jpg"}}/>
              </div>
            }
          </div>
        </div>
      </div>      
    </div>
  )
}