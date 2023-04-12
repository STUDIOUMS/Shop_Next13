import BreadCrumbs from "@/app/components/BreadCrumbs"
import { getCat, getParentCat, getProducts, getSubcats, SortItems } from "@/options/helpers"
import { BreadCrumbsType, CatType } from "@/options/types"
import Filter from "./components/Filter"
import GoodList from "./components/GoodList"
import Loadmore from "@/app//components/Loadmore"
import Sort from "@/app/components/Sort/Sort"
import SubCats from "./components/SubCats"


async function SubCat({ params, searchParams }: { params: { subcat: string }, searchParams: any }) {
  const cat: CatType = await getCat(params.subcat)
  const limitProducts = 8

  // is Category main
  const isMainCat = cat.parentID === 0
  
  // Get products
  const uri = Object.entries(searchParams)
  let newUri = uri.map(el => '&' + el.join('=')).join('')
  const { data, total } = await getProducts(cat.id, newUri, limitProducts)

  // Get subcats
  let subcats: CatType[] | null = null
  let subcatsIDs: number[] = []
  if (isMainCat) {
    subcats = await getSubcats(cat.id)
    subcatsIDs = subcats!.map(el => el.id)
  }

  // Subcat parent
  let parentCat: CatType | null = null
  if (!isMainCat) {
    parentCat = await getParentCat(cat.parentID)
  }
  
  // Breadcrumbs
  const crumbs: BreadCrumbsType[] = [
    { name: cat.name, slug: `/cat/${cat.slug}` },
  ]
  if (!isMainCat) {
    const parentCatItem: BreadCrumbsType = {
      name: parentCat!.name,
      slug: `/cat/${parentCat!.slug}`
    }
    crumbs.unshift(parentCatItem)
  }
  

  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <h1>{cat.name}</h1>
      
      <div className="row">
        <div className="col-12 col-lg-3">
          <Filter />
        </div>
        <div className="col-12 col-lg-9">
          {isMainCat && <SubCats list={subcats!} />}

          <Sort list={SortItems} />

          <GoodList list={data!} catID={cat.id} limit={limitProducts} />

          <Loadmore pages={limitProducts} all={total!} />
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