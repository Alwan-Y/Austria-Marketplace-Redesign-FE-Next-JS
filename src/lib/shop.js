import shop from '@/data/shop.json';
import catalog from '@/data/category.json';

export function getAllCategory() {
  return catalog.categories.map((catalog) => {
    return { params: { id: catalog.category } };
  });
}

export function getDataCatalog(id) {
  return shop.catalogs.filter((catalog) => {
    return catalog.category === id;
  });
}

export function getAllId() {
  return shop.catalogs.map((catalog) => {
    return { params: { id: catalog.id } };
  });
}

export function getCatalogDetail(id) {
  return shop.catalogs.find((catalog) => {
    return catalog.id === id;
  });
}
