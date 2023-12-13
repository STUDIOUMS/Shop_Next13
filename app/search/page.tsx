import { getSearch } from "@/options/api"
import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "../components/BreadCrumbs"
import Alert from "../components/UI/Alert"
import Btn from "../components/UI/Btn"

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
      <h1>Результаты поиска по запросу - &quot;{searchParams.s}&quot;</h1>
      
      <pre>
        {JSON.stringify(search, null, 2)}
      </pre>

      {!search.results?.length && <>
        <Alert>
          По вашему запросу <b>&quot;{searchParams.s}&quot;</b> ничего не найдено.
          Попробуйте изменить поисковый запрос.
        </Alert>
        <Btn to="/" title="Вернуться на главную" className="mb-expand" />
      </>}
      {!search.results && <Alert color="danger">Server error</Alert>}
    </div>
  )
}

export default SearchPage
