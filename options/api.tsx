import { serverURL } from "./settings"
import { blogType, CatType, ProductType, ResponseType } from "./types"

// Variables
export const url_cats = `${serverURL}/catalog/categories/`
export const url_products = `${serverURL}/catalog/products/`
export const url_packages = `${serverURL}/catalog/packs/`
export const url_blog = `${serverURL}/blog/articles/`

// GET REQUESTS

// get categories
export async function getCats(): Promise<ResponseType<CatType>> {
  try {
    const response = await fetch(`${url_cats}`, { cache: 'no-cache' })
    const data: ResponseType<CatType> = await response.json()
    return data
  } catch(e) {
    return { error: true }
  }
}

// get category
export async function getCat(slug: string) {
  try {
    const response = await fetch(`${url_cats}${slug}`, { cache: 'no-cache' })
    const data = await response.json()
    return data
  } catch(e) {
    console.log(e)
    return []
  }
}

// get subcategories
export async function getSubcats(id: number) {
  try {
    const response = await fetch(`${url_cats}/?parent=${id}`, { cache: 'no-cache' })
    const data = await response.json()
    return data.results
  } catch(e) {
    console.log(e)
  }
}

// GET PRODUCTS OF CERTAIN CATEGORY
export async function getProducts(id: number, uri: string, limit: number) {
  try {
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
    const data = await response.json()

    return { count: data.count, products: data.results } as any
  } catch(e) {
    console.log(e)
  }
}


// GET PRODUCTS FOR WIDJETS
type productsWidjetParam = 'hit' | 'discount' | 'new'
export async function getProductsWidget(param: productsWidjetParam, limit: number): Promise<ResponseType<ProductType>> {
  try {
    const response = await fetch(`${url_products}?ordering=-id&${param}=true&limit=${limit}`)
    const data: ResponseType<ProductType> = await response.json()
    return data
  } catch(e) {
    console.log(e)
    return { error: true }
  }
}


// PRODUCT PAGE
export async function getProduct(slug: string) {
  try {
    const response = await fetch(`${url_products}${slug}`, { cache: 'no-cache' })
    const data = await response.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

// GET PACKS
export async function getPacks() {
  try {
    const response = await fetch(`${url_packages}`, { cache: 'no-cache' })
    const data = await response.json()
    return data.results
  } catch(e) {
    console.log(e)
  }
}


// BLOG
export async function getBlogs(limit: number, uri: string): Promise<ResponseType<blogType>> {
  try {
    const isLimit = uri.includes('limit')
    const uri_limit = isLimit ? `&${uri}` : `&limit=${limit}`
    const response = await fetch(`${url_blog}?ordering=-id${uri_limit}`, {
      cache: 'no-cache'
    })
    const data: ResponseType<blogType> = await response.json()
    return data
  } catch(e) {
    console.log(e)
    return { error: true }
  }
}

export async function getBlogsWidjet(limit: number) {
  try {
    const response = await fetch(`${url_blog}?limit=${limit}&ordering=-id`, {
      cache: 'no-cache'
    })
    const data = await response.json()
    return { blogs: data.results }
  } catch(e) {
    return { error: true, blogs: [] }
  }
}

export async function getBlogPage(slug: number) {
  try {
    const response = await fetch(`${url_blog}${slug}`, {
      cache: 'no-cache'
    })
    const data = await response.json()
    return data
  } catch(e) {
    console.log(e)
  }
}

// Product
export async function getSearch(search: string): Promise<ResponseType<ProductType>> {
  try {
    const response = await fetch(`${url_products}?search=${search}`)
    const data = await response.json()
    return data
  } catch(e) {
    console.log(e)
    return { error: true }
  }
}
