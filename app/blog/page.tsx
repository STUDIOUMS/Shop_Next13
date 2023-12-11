import { getBlogs } from "@/options/api"
import { BreadCrumbsType } from "@/options/types"
import { useQuery } from "react-query"
import BreadCrumbs from "../components/BreadCrumbs"
import Loadmore from "../components/Loadmore"
import Alert from "../components/UI/Alert"
import BlogList from "./components/BlogList"

// Metatags
export const metadata = {
  title: 'Блог',
  description: 'Блог',
}

// Breadcrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "Блог", slug: "blog" }
]

export default async function Blog({ searchParams }: { searchParams: any }) {
  const limitPosts = 3
  const uri = Object.entries(searchParams)
  let newUri = uri.map(el => el.join('=')).join('')
  const data = await getBlogs(limitPosts, newUri)

  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Блог</h1>
      {data.detail === 'Not found.' ? <Alert color="danger">Server error</Alert> :
        <><BlogList list={data?.results!} limit={limitPosts} />
        <Loadmore pages={limitPosts} all={data?.count!} /></>
      }
    </div>
  )
}
