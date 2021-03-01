import Head from 'next/head';

import { getAllId, getCatalogDetail } from '@/lib/shop';
import Breadcrumb from '@/components/Breadcrumb';

export default function Detail({ product }) {
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
        </div>
      </div>
    </div>
  );
}

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
