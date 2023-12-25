import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "@/components/BreadCrumbs"

// Metatags
export const metadata = {
  title: 'Вакансии',
  description: 'Вакансии',
}

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "Вакансии", slug: "vacancies" }
]

export default function Page() {
  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Вакансии</h1>
      <p>Вакансии</p>
    </div>
  )
}
