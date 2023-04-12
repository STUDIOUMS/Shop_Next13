import BreadCrumbs from "@/app/components/BreadCrumbs"
import { getAttributes, getCatForProduct, getProduct } from "@/options/helpers"
import { BreadCrumbsType, CatType, featPackType, GoodType } from "@/options/types"
import Link from "next/link"
import Gallery from "./components/Gallery"
import Meta from "./components/Meta"
import ProductTabs from "./components/ProductTabs"


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
  const featList = attrsKeys.map(el => {
    const val = good.attrs.find(attr => attr.featuresID === el.id)?.value
    el['value'] = val
    return el
  })

  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <h1>{good.title}</h1>
      <div className="row">
        <div className="col-12 col-lg-4">
          <Gallery images={good.images} />
        </div>
        <div className="col-12 col-lg-8">
          <ul className="cats">
            {cats.map(el => (
              <li key={el.id}><Link href={`/cat/${el.slug}`}>{el.name}</Link></li>
            ))}
          </ul>
          <Meta el={good} />
        </div>
      </div>
      <ProductTabs description={good.description} features={featList} />
    </div>
  )
}

export default ProductPage