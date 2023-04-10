import BreadCrumbs from "@/app/components/BreadCrumbs"
import { getCatForProduct, getProduct } from "@/options/helpers"
import { BreadCrumbsType, CatType, GoodType } from "@/options/types"
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
      <ProductTabs description={good.description} />
    </div>
  )
}

export default ProductPage