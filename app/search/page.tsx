import { getSearch } from "@/options/api";
import { BreadCrumbsType } from "@/options/types";
import Card from "@/components_old/Card/Card";
import BreadCrumbs from "@/components_old/BreadCrumbs";
import Alert from "@/ui_old/Alert";
import Btn from "@/ui_old/Btn";

// Metatags
export const metadata = {
  title: "Результаты поиска",
  description: "Результаты поиска",
};

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "Результаты поиска", slug: "search" },
];

async function SearchPage({ searchParams }: { searchParams: any }) {
  const searchList = await getSearch(searchParams.s);

  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Результаты поиска по запросу - &quot;{searchParams.s}&quot;</h1>

      {searchList.results!.length > 0 && (
        <div className="grid grid-4 grid-tb-3 grid-mb-1 goodlist">
          {searchList.results!.map((el) => (
            <Card key={el.id} el={el} />
          ))}
        </div>
      )}

      {!searchList.results?.length && (
        <>
          <Alert>
            По вашему запросу <b>&quot;{searchParams.s}&quot;</b> ничего не
            найдено. Попробуйте изменить поисковый запрос.
          </Alert>
          <Btn to="/" title="Вернуться на главную" className="mb-expand" />
        </>
      )}
      {!searchList.results && <Alert color="danger">Server error</Alert>}
    </div>
  );
}

export default SearchPage;
