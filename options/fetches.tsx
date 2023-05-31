import { ResponseType } from "./types"

// Variables
export const serverURL = 'https://qwertynext.com'
export const url_cats = `${serverURL}/api/v1/catalog/categories/`
export const url_products = `${serverURL}/api/v1/catalog/products/?&ordering=-id`
export const url_features = `${serverURL}/features`
export const url_packages = `${serverURL}/api/v1/catalog/packs/`
export const url_blog = `${serverURL}/api/v1/blog/articles/`

// GET REQUESTS

// get category
export async function getCat(slug: string) {
  const response = await fetch(`${url_cats}${slug}`, { cache: 'no-cache' })
  const data = await response.json()
  return data
}

// getProducts of category
export async function getProducts(id: number, uri: string, limit: number) {
  // const isLimit = uri.includes('_limit')
  // const isSort = uri.includes('_sort')
  // const uriLimit = isLimit ? '' : `&_limit=${limit}`
  // const uriSort = isSort ? '' : '&_sort=createdAt&_order=desc'
  // const params = `${uriLimit}${uriSort}${uri}`

  const response = await fetch(`${url_products}&categories=${id}`, {
    cache: 'no-cache'
  })
  const data: ResponseType = await response.json()
  return { count: data.count, products: data.results }
}


// PRODUCT PAGE
export async function getProduct(slug: string) {
  const response = await fetch(`${url_products}?slug=${slug}`, { cache: 'no-cache' })
  const data = await response.json()
  return data[0]
}


// BLOG
export async function getBlogs(limit: number, uri: string) {
  const isLimit = uri.includes('limit')
  const uri_limit = isLimit ? `&${uri}` : `&limit=${limit}`
  
  const response = await fetch(`${url_blog}?ordering=-id${uri_limit}`, {
    cache: 'no-cache'
  })
  const data: ResponseType = await response.json()
  return data
}

export async function getBlogPage(slug: number) {
  const response = await fetch(`${url_blog}${slug}`, {
    cache: 'no-cache'
  })
  const data = await response.json()
  return data
}