export type CatType = {
  id: number
  name: string
  description: string
  slug: string
  img: string
  parentID: number
}

export type attrType = {
  featuresID: number
  value: string
}

export type packType = {
  packID: number
  img: string
  price: number
  oldPrice?: number
}

export type GoodType = {
  id: number
  title: string
  category: number[]
  description: string
  slug: string
  stock: boolean
  art: string
  hit?: boolean
  sale?: string
  new?: string
  createdAt: number
  attrs: attrType[]
  pack: packType[]
}

export type BasketType = {
  id: string
  title: string
  price: number
  slug: string
  img: string
  art: string
  count?: number
  total: number
  pack: string
}

export type OrderType = {
  id: number
  orderID: string
  name: string
  email: string
  phone: string
  city: string
  street: string
  address: string
  addition: string | undefined
  delivery: string
  payment: string
  status: 'waiting' | 'processed' | 'delivered' | 'finished' | 'canceled'
  list: BasketType[]
}

export type dataType = {
  list: GoodType[]
  total: string
}

export type BreadCrumbsType = {
  name: string
  slug: string
}

export type ProductsDataType = {
  data: GoodType[]
  total: number
}

export type SortItemType = {
  value: string
  name: string
}

export type NavItemType = {
  id: number
  title: string
  path: string
}

export type featPackType = {
  id: number
  name: string
  value?: string
}

export type blogType = {
  id: number
  slug: string
  title: string
  short?: string
  description: string
  date: number
}