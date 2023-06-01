import BreadCrumbs from "@/app/components/BreadCrumbs"
import { SortItems } from "@/options/helpers"
import { BreadCrumbsType, CatType } from "@/options/types"
import Filter from "./components/Filter"
import GoodList from "./components/GoodList"
import Loadmore from "@/app/components/Loadmore"
import Sort from "@/app/components/Sort/Sort"
import SubCats from "./components/SubCats"
import { getCat, getProducts, getSubcats } from "@/options/fetches"

// number of visible products
const limitProducts = 3

async function SubCat({ params, searchParams }: { params: { subcat: string }, searchParams: any }) {
  const cat: CatType = await getCat(params.subcat)

  // is Category main
  const isMainCat: boolean = cat.parent === null
  
  // Get products
  const uri = Object.entries(searchParams)
  let newUri = uri.map(el => '&' + el.join('=')).join('')
  const { count, products } = await getProducts(cat.id, newUri, limitProducts)

  // Get subcats
  const subcats = await getSubcats(cat.id)

  // // Subcat parent
  // let parentCat: CatType | null = null
  // if (!isMainCat) {
  //   parentCat = await getParentCat(cat.parentID)
  // }
  
  // Breadcrumbs
  const crumbs: BreadCrumbsType[] = [
    { name: cat.name, slug: `/cat/${cat.slug}` },
  ]
  // if (!isMainCat) {
  //   const parentCatItem: BreadCrumbsType = {
  //     name: parentCat!.name,
  //     slug: `/cat/${parentCat!.slug}`
  //   }
  //   crumbs.unshift(parentCatItem)
  // }
  

  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <pre>{JSON.stringify(crumbs, null, 2)}</pre>

      <h1>{cat.name}</h1>
      
      <div className="row">
        <div className="col-12 col-lg-3">
          <Filter />
        </div>
        <div className="col-12 col-lg-9">
          {isMainCat && <SubCats list={subcats} />}

          <Sort list={SortItems} />

          <GoodList list={products} catID={cat.id} limit={limitProducts} />

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