import { attrType, featPackType, NavItemType, packType, SortItemType } from "./types"

export const serverURL = 'http://localhost:5000'
export const url_cats = `${serverURL}/categories`
export const url_products = `${serverURL}/products`
export const url_features = `${serverURL}/features`
export const url_packages = `${serverURL}/packages`
export const url_blog = `${serverURL}/blog`

// CATEGORY PAGE
// get category
export async function getCat(slug: string) {
  const response = await fetch(`${url_cats}?slug=${slug}`, { cache: 'no-cache' })
  const data = await response.json()
  return data[0]
}

// get parent category
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
  const isLimit = uri.includes('_limit')
  const isSort = uri.includes('_sort')
  const uriLimit = isLimit ? '' : `&_limit=${limit}`
  const uriSort = isSort ? '' : '&_sort=createdAt&_order=desc'
  const params = `${uriLimit}${uriSort}${uri}`

  const response = await fetch(`${url_products}?category_like=${id}${params}`, {
    cache: 'no-cache'
  })
  const total = await response.headers.get('X-Total-Count')
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

// get keys of attributes of product
export async function getAttributes(arr: number[]) {
  const uri = arr.map(el => `id=${el}`).join('&')
  const response = await fetch(`${url_features}?${uri}`)
  const data = await response.json()
  return data
}

// get packages of product
export async function getPackages(arr: packType[]) {
  const uri = arr.map(el => `id=${el.packID}`).join('&')
  const response = await fetch(`${url_packages}?${uri}`)
  const data = await response.json()
  return data
}


// get blog
export async function getBlogs(limit: number) {
  const uri = ''
  const response = await fetch(`${url_blog}?_limit=${limit}&_sort=date&_order=desc${uri}`, {
    cache: 'no-cache'
  })
  const total = response.headers.get('X-Total-Count')
  const data = await response.json()
  return { data, total }
}

// get blog page
export async function getBlogPage(slug: string) {
  const response = await fetch(`${url_blog}?slug=${slug}`, {
    cache: 'no-cache'
  })
  const data = await response.json()
  return data[0]
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


// create Attributes
export function createAttributes(keys: featPackType[], feats: attrType[]): featPackType[] {
  const output = keys.map(el => {
    const val = feats.find(attr => attr.featuresID === el.id)?.value
    el['value'] = val
    return el
  })
  return output
}

// createDate
export function createDate(num: number, time?: boolean) {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октбярь', 'Ноябрь', 'Декабрь']
  const date = new Date(num)
  const day = date.getDay()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const hours = date.getHours()
  const mins = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes()
  const timeString = `, ${hours}:${mins}`
  return `${day} ${month} ${year}${time ? timeString : ''}`
}


// SortItems
export const SortItems: SortItemType[] = [
  { name: 'От дешевых', value: 'price-asc' },
  { name: 'От дорогих', value: 'price-desc' },
  { name: 'По алфавиту [А-Я]', value: 'title-asc' },
  { name: 'По алфавиту [Я-А]', value: 'title-desc' }
]

// navItems
export const navItems: NavItemType[] = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Блог", path: "/blog" },
  { id: 3, title: "О компании", path: "/about" },
  { id: 4, title: "Доставка и оплата", path: "/about" },
  { id: 5, title: "Контакты", path: "/contacts" },
]
