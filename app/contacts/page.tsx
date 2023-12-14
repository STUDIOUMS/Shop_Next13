import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "@/components/BreadCrumbs"

// Metatags
export const metadata = {
  title: 'Контакты',
  description: 'Контакты',
}

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "Контакты", slug: "contacts" }
]

export default function Page() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>Контакты</h1>
    </div>
  )
}
