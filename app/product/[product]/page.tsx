import BreadCrumbs from "@/app/components/BreadCrumbs"
import { createAttributes, getAttributes, getCatForProduct, getPackages, getProduct } from "@/options/helpers"
import { BreadCrumbsType, CatType, featPackType, GoodType } from "@/options/types"
import ProductTabs from "./components/ProductTabs"
import ProductCard from "./components/Card"


async function ProductPage({ params }: { params: { product: string } }) {
  const good: GoodType = await getProduct(params.product)
  const cats: CatType[] = await getCatForProduct(good.category)

  // Breadcrumbs
  let crumbs: BreadCrumbsType[] = []
  cats.forEach(el => {
    const newBreadItem: BreadCrumbsType = { name: el.name, slug: `/cat/${el.slug}` }
    crumbs.push(newBreadItem)
  })
  crumbs = [...crumbs, { name: good.title, slug: '' }]

  // Attrs
  const attrArray = good.attrs.map(el => el.featuresID)
  const attrsKeys: featPackType[] = await getAttributes(attrArray)
  const featuresList = createAttributes(attrsKeys, good.attrs)

  // packages
  const packages: featPackType[] = await getPackages(good.pack)


  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <h1>{good.title}</h1>
      
      <ProductCard good={good} packages={packages} />

      <ProductTabs description={good.description} features={featuresList} />
    </div>
  )
}

export default ProductPage