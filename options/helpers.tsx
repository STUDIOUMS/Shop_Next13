import { SortItemType } from "./types"

export const url_cats = 'http://localhost:5000/categories'
export const url_products = 'http://localhost:5000/products'

// CATEGORY PAGE
// get category
export async function getCat(slug: string) {
  const response = await fetch(`${url_cats}?slug=${slug}`, { cache: 'no-cache' })
  const data = await response.json()
  return data[0]
}

// get parent cat
export async function getParentCat(id: number) {
  const response = await fetch(`${url_cats}?id=${id}`, { cache: 'no-cache' })
  const data = await response.json()
  return data[0]
}

// get sub categories
export async function getSubcats(id: number) {
  const response = await fetch(`${url_cats}?parentID=${id}`, { cache: 'no-cache' })
  const data = await response.json()
  return data
}

// getProducts of category
export async function getProducts(id: number, uri: string, limit: number) {
  const response = await fetch(`${url_products}?category_like=${id}${uri}&_limit=${limit}`, { cache: 'no-cache' })
  const total = response.headers.get('X-Total-Count')
  const data = await response.json()
  return { data, total }
}


// PRODUCT PAGE
// get product
export async function getProduct(slug: string) {
  const response = await fetch(`${url_products}?slug=${slug}`, { cache: 'no-cache' })
  const data = await response.json()
  return data[0]
}

// get category for product
export async function getCatForProduct(cats: number[]) {
  const uri = cats.map(el => `id=${el}`).join('&')
  const response = await fetch(`${url_cats}?${uri}`, { cache: 'no-cache' })
  const data = await response.json()
  return data
}


// Debounce
export function debounce(cb: any, delay: number) {
  let timeout: any
  return function(...args: any) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}


// SortItems
export const SortItems: SortItemType[] = [
  { name: 'От дешевых', value: 'price-asc' },
  { name: 'От дорогих', value: 'price-desc' },
  { name: 'По алфавиту [А-Я]', value: 'title-asc' },
  { name: 'По алфавиту [Я-А]', value: 'title-desc' }
]


