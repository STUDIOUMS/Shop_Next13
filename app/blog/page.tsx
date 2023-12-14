import { getBlogs } from "@/options/api"
import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "@/components/BreadCrumbs"
import Alert from "@/components/UI/Alert"
import BlogList from "@/components/BlogList"

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
  const isSuccess = !!data.results
  const isError = !data.results

  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Блог</h1>
      {isSuccess && <BlogList limit={limitPosts} list={data.results!} all={data.count!} />}
      {isError && <Alert color="danger">Server error</Alert>}
    </div>
  )
}
