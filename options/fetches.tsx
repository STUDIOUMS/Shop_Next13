import { ResponseType } from "./types"

// Variables
export const serverURL = 'https://qwertynext.com'
export const url_cats = `${serverURL}/api/v1/catalog/categories/`
export const url_products = `${serverURL}/api/v1/catalog/products/`
export const url_packages = `${serverURL}/api/v1/catalog/packs/`
export const url_blog = `${serverURL}/api/v1/blog/articles/`

// GET REQUESTS

// get category
export async function getCat(slug: string) {
  const response = await fetch(`${url_cats}${slug}`, { cache: 'no-cache' })
  const data = await response.json()
  return data
}

// get subcategories
export async function getSubcats(id: number) {
  const response = await fetch(`${url_cats}/?parent=${id}`, { cache: 'no-cache' })
  const data: ResponseType = await response.json()
  return data.results
}

// getProducts of category
export async function getProducts(id: number, uri: string, limit: number) {
  const uriArray = uri.split('&')

  // Params existence
  const isLimit = uriArray.some(el => el.includes('limit'))
  const isOrdering = uriArray.some(el => el.includes('ordering'))
  
  // Current params
  const currentLimit = uriArray.find(el => el.includes('limit'))
  const currentOrder = uriArray.find(el => el.includes('ordering'))

  // Create params
  const uriLimit = isLimit ? `&${currentLimit}` : `&limit=${limit}`
  const uriOrder = isOrdering ? `&${currentOrder}` : `&ordering=-id`
  const params = `${uriLimit}${uriOrder}`
  
  // fetch
  const response = await fetch(`${url_products}?categories=${id}${params}`, {
    cache: 'no-cache'
  })
  const data: ResponseType = await response.json()
  return { count: data.count, products: data.results }
}


// PRODUCT PAGE
export async function getProduct(slug: string) {
  const response = await fetch(`${url_products}${slug}`, { cache: 'no-cache' })
  const data = await response.json()
  return data
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