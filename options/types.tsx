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
  attrs: attrType[]
  pack: packType[]
}

export type OrderType = {
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
  description: string
  date: number
}