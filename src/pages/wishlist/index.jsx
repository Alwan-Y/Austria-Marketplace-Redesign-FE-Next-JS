import { WishlistCard, EmptyWishlist } from '@/components/wishlist';
import { connect } from 'react-redux';
import Action from '@/redux/action';
import Type from '@/redux/type';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="container mt-5 pt-4">
      <Head>
        <title>Your Wishlist | Austria-next</title>
      </Head>
      <Breadcrumb name="wishlist" />
      <div className="group d-flex flex-column">
        {!wishlist.length ? (
          <EmptyWishlist />
        ) : (
          <div className="row">
            {wishlist.map((item) => (
              <WishlistCard
                onRemove={() => {
                  removeFromWishlist(item);
                }}
                key={item.id}
                cols="3"
                product={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { wishlist } = state;

  return wishlist;
};

const mapDispatchToProps = (dispatch) => ({
  removeFromWishlist: (payload) =>
    dispatch(Action(Type.REMOVE_FROM_WISHLIST, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
