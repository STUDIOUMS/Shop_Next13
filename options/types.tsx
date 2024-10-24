export type View = "grid" | "list";

export type Response<T> = {
  count?: number;
  next?: string;
  previous?: string;
  results?: T[];
  error?: boolean;
};

export type ResponseErrorType = {
  error?: boolean;
};

export type CatParent = {
  pk: number;
  name: string;
  slug: string;
};

export type Cat = {
  id: number;
  parent: CatParent | null;
  slug: string;
  name: string;
  description: string;
  img: string;
};

export type RelatedAttrsType = {
  id: number;
  attribute: {
    id: number;
    name: string;
  };
  value: string;
  product: 0;
};

export type PackType = {
  id: number;
  name: string;
};

export type RelatedPacksType = {
  id: number;
  pack: {
    id: number;
    name: string;
  };
  img: string;
  price: string;
  oldPrice: string;
  product: number;
};

export type ProductCatType = {
  pk: number;
  name: string;
  slug: string;
};

export type Product = {
  id: number;
  relatedAttrs: RelatedAttrsType[];
  relatedPacks: RelatedPacksType[];
  defaultPack: RelatedPacksType;
  categories: ProductCatType[];
  slug: string;
  title: string;
  description: string;
  art: string;
  new: boolean;
  hit: boolean;
  createdAt: Date;
};

export type BreadCrumbsType = {
  name: string;
  slug: string;
};

export type SortItemType = {
  value: string;
  name: string;
};

export type NavItemType = {
  id: number;
  title: string;
  path: string;
  children?: NavItemType[];
};

export type blogType = {
  id: number;
  title: string;
  slug: string;
  short?: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Order = {
  id: string;
  title: string;
  price: string;
  slug: string;
  img: string;
  art: string;
  count?: number;
  total: string;
  pack: string;
};

export type FaceType = "individual" | "legal";
export type CreatedOrderType = {
  name: string;
  email?: string;
  phone: string;
  addition: string;
  city?: string;
  street?: string;
  address?: string;
  delivery: DeliveryType;
  payment: PaymentType;
  inn?: number;
  company?: string;
  status: "waiting" | "canceled" | "processed" | "done";
  price: number;
  deliveryPrice: number;
  total: number;
  list: Order[];
};

export type DeliveryType = "courier" | "pickup";
export type PaymentType = "acquiring" | "bill";

export type FormOrderValues = {
  name: string;
  email?: string;
  phone: string;
  city: string;
  street: string;
  address: string;
  addition: string;
  inn?: string;
  company?: string;
};
