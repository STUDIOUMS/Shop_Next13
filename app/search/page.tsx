import { getSearch } from "@/options/api"
import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "../components/BreadCrumbs"
import Alert from "../components/UI/Alert"

// Metatags
export const metadata = {
  title: 'Результаты поиска',
  description: 'Результаты поиска',
}

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "Результаты поиска", slug: "search" }
]

async function SearchPage({ searchParams }: { searchParams: any }) {
  const search = await getSearch(searchParams.s)

  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Результаты поиска по запросу - "{searchParams.s}"</h1>
      <pre>
        {JSON.stringify(search, null, 2)}
      </pre>
      {!search.results && <Alert color="danger">Server error</Alert>}
    </div>
  )
}

export default SearchPage
