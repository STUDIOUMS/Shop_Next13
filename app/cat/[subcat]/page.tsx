import BreadCrumbs from "@/app/components/BreadCrumbs"
import { SortItems } from "@/options/helpers"
import { BreadCrumbsType, CatType } from "@/options/types"

import GoodList from "./components/GoodList"
import Loadmore from "@/app/components/Loadmore"
import Sort from "@/app/components/Sort/Sort"
import SubCats from "./components/SubCats"
import { getCat, getPacks, getProducts, getSubcats } from "@/options/fetches"
import Filter from "@/app/components/Filter/Filter"


// Metatags
export async function generateMetadata({ params }: { params: { subcat: string } }) {
  const cat: CatType = await getCat(params.subcat)
  return {
    title: cat.name
  }
}


// number of visible products
const limitProducts = 6


async function SubCat({ params, searchParams }: { params: { subcat: string }, searchParams: any }) {
  const cat: CatType = await getCat(params.subcat)
  const packs = await getPacks()

  // is Category main
  const isMainCat: boolean = cat.parent === null
  
  // Get products
  const uriParams = Object.entries(searchParams)
  let uri = uriParams.map(el => '&' + el.join('=')).join('')
  const { count, products } = await getProducts(cat.id, uri, limitProducts)

  // Get subcats
  const subcats = await getSubcats(cat.id)
  
  // Breadcrumbs
  const crumbs: BreadCrumbsType[] = [
    { name: cat.name, slug: `/cat/${cat.slug}` },
  ]

  if (cat.parent !== null) {
    const parentCrumb = { name: cat.parent.name, slug: `/cat/${cat.parent.slug}` }
    crumbs.unshift(parentCrumb)
  }
  

  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <h1>{cat.name}</h1>
      
      <div className="row">
        <div className="col-12 col-lg-3">
          <Filter packs={packs} />
        </div>
        <div className="col-12 col-lg-9">
          {isMainCat && <SubCats list={subcats} />}

          <Sort list={SortItems} />

          <GoodList list={products} catID={cat.id} uri={uri} limit={limitProducts} />

          <Loadmore pages={limitProducts} all={count} />
        </div>
      </div>
      
      <div className="mt-3 pb-3">
        <h3>Seo description</h3>
        <div dangerouslySetInnerHTML={{__html: cat.description}}></div>
      </div>
    </div>
  )
}

export default SubCat