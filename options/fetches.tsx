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
  try {
    const response = await fetch(`${url_cats}${slug}`, { cache: 'no-cache' })
    const data = await response.json()
    return data
  } catch {
    return []
  }
}

// get subcategories
export async function getSubcats(id: number) {
  const response = await fetch(`${url_cats}/?parent=${id}`, { cache: 'no-cache' })
  const data: ResponseType = await response.json()
  return data.results
}

// GET PRODUCTS OF CERTAIN CATEGORY
export async function getProducts(id: number, uri: string, limit: number) {
  const uriArray = uri.split('&')

  // Params existence
  const isLimit = uriArray.some(el => el.includes('limit'))
  const isOrdering = uriArray.some(el => el.includes('ordering'))
  
  // Current params
  const currentLimit = uriArray.find(el => el.includes('limit'))
  const currentOrder = uriArray.find(el => el.includes('ordering'))

  // Create filter params
  const isFilterPriceMin = uriArray.some(el => el.includes('price_min'))
  const isFilterPriceMax = uriArray.some(el => el.includes('price_max'))
  const isFilterHit = uriArray.some(el => el.includes('hit'))
  const isFilterNew = uriArray.some(el => el.includes('new'))
  const isFilterDiscount = uriArray.some(el => el.includes('discount'))
  const isFilterPack = uriArray.some(el => el.includes('pack'))

  const filterPriceMinParam = isFilterPriceMin ? '&' + uriArray.find(el => el.includes('price_min')) : ''
  const filterPriceMaxParam = isFilterPriceMax ? '&' + uriArray.find(el => el.includes('price_max')) : ''
  const filterHitParam = isFilterHit ? '&hit=true' : ''
  const filterNewParam = isFilterNew ? '&new=true' : ''
  const filterDiscountParam = isFilterDiscount ? '&discount=true' : ''
  const filterPackParam = isFilterPack ? '&' + uriArray.find(el => el.includes('pack')) : ''

  const filterParams = filterPriceMinParam + filterPriceMaxParam + filterHitParam + filterNewParam +      filterPackParam + filterDiscountParam

  // Create params
  const uriLimit = isLimit ? `&${currentLimit}` : `&limit=${limit}`
  const uriOrder = isOrdering ? `&${currentOrder}` : `&ordering=-id`
  const params = `${uriLimit}${uriOrder}${filterParams}`
  
  // fetch
  const response = await fetch(`${url_products}?categories=${id}${params}`, {
    cache: 'no-cache'
  })
  const data: ResponseType = await response.json()

  return { count: data.count, products: data.results }
}


// GET PRODUCTS FOR WIDJETS
type productsWidjetParam = 'hit' | 'discount' | 'new'
export async function getProductsWidget(param: productsWidjetParam, limit: number) {
  try {
    const response = await fetch(`${url_products}?ordering=-id&limit=${limit}&${param}=true`)
    const data: ResponseType = await response.json()
    return data.results
  } catch(e) {
    return []
  }
}


// PRODUCT PAGE
export async function getProduct(slug: string) {
  const response = await fetch(`${url_products}${slug}`, { cache: 'no-cache' })
  const data = await response.json()
  return data
}

// GET PACKS
export async function getPacks() {
  const response = await fetch(`${url_packages}`, { cache: 'no-cache' })
  const data: ResponseType = await response.json()
  return data.results
}


// BLOG
export async function getBlogs(limit: number, uri: string) {
  const isLimit = uri.includes('limit')
  const uri_limit = isLimit ? `&${uri}` : `&limit=${limit}`
  try {
    const response = await fetch(`${url_blog}?ordering=-id${uri_limit}`, {
      cache: 'no-cache'
    })
    const data: ResponseType = await response.json()
    return data
  } catch {
    return { results: [], error: true }
  }
}

export async function getBlogsWidjet(limit: number) {
  try {
    const response = await fetch(`${url_blog}?ordering=-id&limit=${limit}`, {
      cache: 'no-cache'
    })
    const data: ResponseType = await response.json()
    return { blogs: data.results }
  } catch(e) {
    return { errorBlogs: true, blogs: [] }
  }
}

export async function getBlogPage(slug: number) {
  const response = await fetch(`${url_blog}${slug}`, {
    cache: 'no-cache'
  })
  const data = await response.json()
  return data
}