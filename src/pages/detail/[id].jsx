import Head from 'next/head';
import { connect } from 'react-redux';
import Action from '@/redux/action';
import Type from '@/redux/type';
import { getAllId, getCatalogDetail } from '@/lib/shop';
import Button from '@/components/commons/Button';

import Breadcrumb from '@/components/Breadcrumb';

function Detail({ product, addToWishlist, addToCartList }) {
  return (
    <div className="container my-5 pt-4 detail">
      <Head>
        <title>{product.name} | Austria-next</title>
      </Head>
      <Breadcrumb category={product.category} name={product.name} />
      <div className="row">
        <div className="col-sm col-lg-4 text-center">
          <img src={product.img} alt="product image" className="detail__img" />
        </div>
        <div className="col-sm col-lg-6 text-left">
          <h1 className="detail__h1">{product.name}</h1>
          <p>Dress Dengan Detail Untuk Pesta</p>
          <hr />
          <h5 className="detail__price">IDR : {product.price}</h5>
          <hr />
          <h3 className="detail__h3">PERAWATAN</h3>
          <ul className="mt-4 mb-4">
            <li>Cuci dengan suhu sedang</li>
            <li>Jangan gunakan pemutih</li>
            <li>Keringkan dengan suhu sedang</li>
          </ul>
          <hr/>
          <Button
            type="button"
            className="btn btn-secondary btn-block text-white detail__cart"
            onClick={() => {
              addToCartList(product);
            }}
            size="lg"
          >
            Add to Cart
          </Button>
          <Button type="button" className="btn btn-light btn-block detail__wishlist" onClick={() => {
                addToWishlist(product);
              }} size="lg">
            Add to Whishlist
          </Button>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addToWishlist: (payload) => dispatch(Action(Type.ADD_TO_WISHLIST, payload)),
  addToCartList: (payload) => dispatch(Action(Type.ADD_TO_CART, payload)),
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
