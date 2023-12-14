import BreadCrumbs from "@/components/BreadCrumbs"
import { BreadCrumbsType, ProductType } from "@/options/types"
import ProductTabs from "./components/ProductTabs"
import ProductCard from "./components/ProductCard"
import { getProduct } from "@/options/api"


// Metatags
export async function generateMetadata({ params }: { params: { product: string } }) {
  const product: ProductType = await getProduct(params.product)
  return {
    title: product.title
  }
}


async function ProductPage({ params }: { params: { product: string } }) {
  const product: ProductType = await getProduct(params.product)

  // Breadcrumbs
  let crumbs: BreadCrumbsType[] = []
  product.categories.forEach(el => {
    crumbs.push({ name: el.name, slug: `/cat/${el.slug}` })
  })
  crumbs.push({ name: product.title, slug: `/product/${product.slug}` })
  

  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <h1>{product.title}</h1>
      
      <ProductCard good={product} />

      <ProductTabs description={product.description} features={product.relatedAttrs} />
    </div>
  )
}

export default ProductPage