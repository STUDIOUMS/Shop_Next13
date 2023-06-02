import BreadCrumbs from "@/app/components/BreadCrumbs"
import { BreadCrumbsType, ProductType } from "@/options/types"
import ProductTabs from "./components/ProductTabs"
import ProductCard from "./components/ProductCard"
import { getProduct } from "@/options/fetches"


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
  // let crumbs: BreadCrumbsType[] = []
  // cats.forEach(el => {
  //   const newBreadItem: BreadCrumbsType = { name: el.name, slug: `/cat/${el.slug}` }
  //   crumbs.push(newBreadItem)
  // })
  // crumbs = [...crumbs, { name: good.title, slug: '' }]

  return (
    <div>
      {/* <BreadCrumbs list={crumbs} /> */}

      <h1>{product.title}</h1>
      
      <ProductCard good={product} />

      <ProductTabs description={product.description} features={product.relatedAttrs} />
    </div>
  )
}

export default ProductPage