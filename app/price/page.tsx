import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "@/components/BreadCrumbs"

// Metatags
export const metadata = {
  title: 'Прайс',
  description: 'Прайс',
}

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "Прайс", slug: "price" }
]

export default function Page() {
  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Прайс</h1>
      <p>Прайс</p>
    </div>
  )
}
