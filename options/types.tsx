export type CatType = {
  id: number
  name: string
  description: string
  slug: string
  img: string
  parentID: number
}

export type GoodType = {
  id: number
  title: string
  price: number
  category: number[]
  description: string
  slug: string
  images: string[]
  stock: boolean
  art: string
  hit?: boolean
}

export type OrderType = {
  id: number
  title: string
  price: number
  slug: string
  img: string
  art: string
  count?: number
  total: number
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
