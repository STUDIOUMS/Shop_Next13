import BreadCrumbs from "@/components/BreadCrumbs"
import { SortItems } from "@/options/helpers"
import { BreadCrumbsType, CatType } from "@/options/types"
import GoodList from "./components/GoodList"
import Loadmore from "@/components/Loadmore"
import Sort from "@/components/Sort/Sort"
import SubCats from "../../../components/SubCats"
import { getCat, getPacks, getProducts, getSubcats } from "@/options/api"
import Filter from "@/components/Filter/Filter"
import ChosenFilter from "@/components/ChosenFilter/ChosenFilter"
import Alert from "@/ui/Alert"


// Metatags
export async function generateMetadata({ params }: { params: { subcat: string } }) {
  const cat: CatType = await getCat(params.subcat)
  return {
    title: cat ? cat.name : 'Not found'
  }
}


// number of visible products
const limitProducts = 8


async function SubCat({ params, searchParams }: { params: { subcat: string }, searchParams: any }) {
  const cat: CatType = await getCat(params.subcat)
  const packs = await getPacks()

  if (!cat || !packs) return <Alert color="danger">Server error</Alert>

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
      
      <div className="grid grid-4 grid-tb-1 catpage">
        <div className="catpage-left">
          <Filter packs={packs!} />
        </div>

        <div className="catpage-right">
          {isMainCat && <SubCats list={subcats!} />}
          <Sort list={SortItems} />
          <ChosenFilter packs={packs!} />
          <GoodList list={products} catID={cat.id} uri={uri} limit={limitProducts} />
          <Loadmore pages={limitProducts} all={count} />
        </div>

        <div className="catpage-description section">
          <h3>Seo description</h3>
          <div dangerouslySetInnerHTML={{__html: cat.description}}></div>
        </div>
      </div>
      
    </div>
  )
}

export default SubCat