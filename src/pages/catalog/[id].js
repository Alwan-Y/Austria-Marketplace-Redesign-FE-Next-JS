import { getAllCategory, getDataCatalog } from '@/lib/shop'

export default function Catalog({ product }) {
  return (
    <div className='catalog__container'>
      <h1>category : {product.category}</h1>
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
