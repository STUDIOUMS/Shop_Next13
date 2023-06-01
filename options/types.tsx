export type ResponseType = {
  count: number
  next: string
  previous: string
  results: any
}

export type CatType = {
  id: number
  slug: string
  name: string
  description: string
  img: string
  parent: number
}

export type RelatedAttrsType = {
  id: number
  attribute: {
    id: number
    name: string
  }
  value: string
  product: 0
}

export type PackType = {
  id: number
  name: string
}

export type RelatedPacksType = {
  id: number
  pack: {
    id: number
    name: string
  }
  img: string
  price: string
  oldPrice: string
  product: number
}

export type ProductCatType = {
  pk: number
  name: string
  slug: string
}

export type ProductType = {
  id: number
  relatedAttrs: RelatedAttrsType[]
  relatedPacks: RelatedPacksType[]
  categories: ProductCatType[]
  slug: string
  title: string
  description: string
  art: string
  new: boolean
  hit: boolean
  sale: boolean
  createdAt: Date
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

export type BreadCrumbsType = {
  name: string
  slug: string
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

export type blogType = {
  id: number
  slug: string
  title: string
  short?: string
  description: string
  createdAt: string
  updatedAt: string
}