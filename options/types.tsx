export type ResponseType = {
  count: number
  next: string
  previous: string
  results: any
}

export type CatType = {
  id: number
  name: string
  description: string
  slug: string
  img: string
  parent: number
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