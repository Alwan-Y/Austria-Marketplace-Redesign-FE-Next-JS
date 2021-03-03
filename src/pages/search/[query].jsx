import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSearch } from '@/lib/shop';

import Breadcrumb from '@/components/Breadcrumb';
import Card from '@/components/Card';

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const product = getSearch(query);

  return (
    <div className="mt-5 pt-4 container">
      <Head>
        <title>{query} | Austria-next</title>
      </Head>
      <Breadcrumb name={query} />
      <div className="row">
        {product
          ? product.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                thumb={product.img}
                title={product.name}
                price={product.price}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Search;
