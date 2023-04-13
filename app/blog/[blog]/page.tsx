import BreadCrumbs from "@/app/components/BreadCrumbs"
import { BreadCrumbsType } from "@/options/types"

let crumbs: BreadCrumbsType[] = [
  { name: "Блог", slug: "blog" }
]

export default function BlogPage() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>BlogPage</h1>
    </div>
  )
}
