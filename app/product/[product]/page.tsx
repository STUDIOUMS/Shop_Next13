import BreadCrumbs from "@/app/components/BreadCrumbs"
import { createAttributes } from "@/options/helpers"
import { BreadCrumbsType, ProductType } from "@/options/types"
import ProductTabs from "./components/ProductTabs"
import ProductCard from "./components/ProductCard"
import { getProduct } from "@/options/fetches"


async function ProductPage({ params }: { params: { product: string } }) {
  const good: ProductType = await getProduct(params.product)

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

      <h1>{good.title}</h1>
      
      <ProductCard good={good} />

      <ProductTabs description={good.description} features={good.relatedAttrs} />
    </div>
  )
}

export default ProductPage