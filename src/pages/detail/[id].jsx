import Head from 'next/head';
import { connect } from 'react-redux';

import Action from '@/redux/action';
import Type from '@/redux/type';
import { getAllId, getCatalogDetail } from '@/lib/shop';

import Breadcrumb from '@/components/Breadcrumb';

function Detail({ product, addToWishlist }) {
  return (
    <div className="container my-5 pt-4 detail">
      <Head>
        <title>{product.name} | Austria-next</title>
      </Head>
      <Breadcrumb category={product.category} name={product.name} />
      <div className="row">
        <div className="col-sm-4">
          <img src={product.img} alt="product image" className="detail__img" />
        </div>
        <div className="col-sm-8">
          <h1>{product.name}</h1>
          <h5 className="text-muted">IDR : {product.price}</h5>
          <div className="mt-4">
            <button className="btn btn-primary mr-4                                                                                                                                                                                                                             ">
              Add to Cart
            </button>
            <button
              className="btn btn-success "
              onClick={() => {
                addToWishlist(product);
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addToWishlist: (payload) => dispatch(Action(Type.ADD_TO_WISHLIST, payload)),
});

export async function getStaticPaths() {
  const paths = getAllId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getCatalogDetail(params.id);
  return {
    props: {
      product,
    },
  };
}

export default connect(null, mapDispatchToProps)(Detail);
