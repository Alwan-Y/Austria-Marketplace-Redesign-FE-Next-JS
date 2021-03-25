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
      {console.log("search jalan")}
      <Head>
        <title>{query} | Austria-next</title>
      </Head>
      <Breadcrumb name={query} />
      <div className="row">
        {product
          ? product.map((product) => (
              <Card
                key={product.id}
                id2={product.id}
                thumb2={product.img}
                title2={product.name}
                price2={product.price}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Search;
