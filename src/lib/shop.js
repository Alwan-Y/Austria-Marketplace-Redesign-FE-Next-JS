import shop from '@/data/shop.json'

export function getAllCategory() {
  return shop.catalogs.map((catalog) => {
    return { params: { id: catalog.category } }
  })
}

export function getDataCatalog(id) {
  return shop.catalogs.find((catalog) => {
    return catalog.category === id
  })
}
