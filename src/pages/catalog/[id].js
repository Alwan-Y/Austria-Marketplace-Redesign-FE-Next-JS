import Head from 'next/head'
import Link from 'next/link'

import { getAllCategory, getDataCatalog } from '@/lib/shop'
import Card from '@/components/card'

export default function Catalog({ product }) {
  return (
    <div className='catalog__container container'>
      <Link href='/'>Home</Link>
      <Head>
        <title>{product.category} | Austria-next</title>
      </Head>
      <h1>category : {product.category}</h1>
      <div className='row'>
        {product.products.map((product) => (
          <Card
            key={product.id}
            thumb={product.img}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllCategory()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const product = getDataCatalog(params.id)
  return {
    props: {
      product,
    },
  }
}
