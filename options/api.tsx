import { SERVER_URL } from "./settings";
import { blogType, Cat, ProductType, Response } from "./types";

// Variables
export const URI_CATS = `/catalog/categories`;

export const URL_CATS = `${SERVER_URL}/catalog/categories/`;
export const URL_PRODUCTS = `${SERVER_URL}/catalog/products/`;
export const URL_PACKAGES = `${SERVER_URL}/catalog/packs/`;
export const URL_BLOG = `${SERVER_URL}/blog/articles/`;

// GET REQUESTS

export const getData = async <T,>(uri: string): Promise<Response<T>> => {
  const response = await fetch(SERVER_URL + uri);
  const data = await response.json();
  return data;
};

// get category
export async function getCat(slug: string) {
  try {
    const response = await fetch(`${URL_CATS}${slug}`, { cache: "no-cache" });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

// get subcategories
export async function getSubcats(id: number) {
  try {
    const response = await fetch(`${URL_CATS}/?parent=${id}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log(e);
  }
}

// GET PRODUCTS OF CERTAIN CATEGORY
export async function getProducts(id: number, uri: string, limit: number) {
  try {
    const uriArray = uri.split("&");

    // Params existence
    const isLimit = uriArray.some((el) => el.includes("limit"));
    const isOrdering = uriArray.some((el) => el.includes("ordering"));

    // Current params
    const currentLimit = uriArray.find((el) => el.includes("limit"));
    const currentOrder = uriArray.find((el) => el.includes("ordering"));

    // Create filter params
    const isFilterPriceMin = uriArray.some((el) => el.includes("price_min"));
    const isFilterPriceMax = uriArray.some((el) => el.includes("price_max"));
    const isFilterHit = uriArray.some((el) => el.includes("hit"));
    const isFilterNew = uriArray.some((el) => el.includes("new"));
    const isFilterDiscount = uriArray.some((el) => el.includes("discount"));
    const isFilterPack = uriArray.some((el) => el.includes("pack"));

    const filterPriceMinParam = isFilterPriceMin
      ? "&" + uriArray.find((el) => el.includes("price_min"))
      : "";
    const filterPriceMaxParam = isFilterPriceMax
      ? "&" + uriArray.find((el) => el.includes("price_max"))
      : "";
    const filterHitParam = isFilterHit ? "&hit=true" : "";
    const filterNewParam = isFilterNew ? "&new=true" : "";
    const filterDiscountParam = isFilterDiscount ? "&discount=true" : "";
    const filterPackParam = isFilterPack
      ? "&" + uriArray.find((el) => el.includes("pack"))
      : "";

    const filterParams =
      filterPriceMinParam +
      filterPriceMaxParam +
      filterHitParam +
      filterNewParam +
      filterPackParam +
      filterDiscountParam;

    // Create params
    const uriLimit = isLimit ? `&${currentLimit}` : `&limit=${limit}`;
    const uriOrder = isOrdering ? `&${currentOrder}` : `&ordering=-id`;
    const params = `${uriLimit}${uriOrder}${filterParams}`;

    // fetch
    const response = await fetch(`${URL_PRODUCTS}?categories=${id}${params}`, {
      cache: "no-cache",
    });
    const data = await response.json();

    return { count: data.count, products: data.results } as any;
  } catch (e) {
    console.log(e);
  }
}

// GET PRODUCTS FOR WIDJETS
type productsWidjetParam = "hit" | "discount" | "new";
export async function getProductsWidget(
  param: productsWidjetParam,
  limit: number
): Promise<Response<ProductType>> {
  try {
    const response = await fetch(
      `${URL_PRODUCTS}?ordering=-id&${param}=true&limit=${limit}`
    );
    const data: Response<ProductType> = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}

// PRODUCT PAGE
export async function getProduct(slug: string) {
  try {
    const response = await fetch(`${URL_PRODUCTS}${slug}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

// GET PACKS
export async function getPacks() {
  try {
    const response = await fetch(`${URL_PACKAGES}`, { cache: "no-cache" });
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log(e);
  }
}

// BLOG
export async function getBlogs(
  limit: number,
  uri: string
): Promise<Response<blogType>> {
  try {
    const isLimit = uri.includes("limit");
    const uri_limit = isLimit ? `&${uri}` : `&limit=${limit}`;
    const response = await fetch(`${URL_BLOG}?ordering=-id${uri_limit}`, {
      cache: "no-cache",
    });
    const data: Response<blogType> = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}

export async function getBlogsWidjet(limit: number) {
  try {
    const response = await fetch(`${URL_BLOG}?limit=${limit}&ordering=-id`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return { blogs: data.results };
  } catch (e) {
    return { error: true, blogs: [] };
  }
}

export async function getBlogPage(slug: number) {
  try {
    const response = await fetch(`${URL_BLOG}${slug}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

// Product
export async function getSearch(
  search: string
): Promise<Response<ProductType>> {
  try {
    const response = await fetch(`${URL_PRODUCTS}?search=${search}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return { error: true };
  }
}
