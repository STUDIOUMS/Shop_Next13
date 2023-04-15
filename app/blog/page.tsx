import { getBlogs } from "@/options/helpers"
import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "../components/BreadCrumbs"
import BlogList from "./components/BlogList"

let crumbs: BreadCrumbsType[] = [
  { name: "Блог", slug: "blog" }
]

export default async function Blog() {
  const { data, total } = await getBlogs(7)

  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>Блог</h1>
      <BlogList list={data} total={total!} />
    </div>
  )
}
