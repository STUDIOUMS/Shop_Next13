import BreadCrumbs from "@/app/components/BreadCrumbs"
import { getBlogPage } from "@/options/fetches"
import { createDate } from "@/options/helpers"
import { blogType, BreadCrumbsType } from "@/options/types"

// Metatags
export async function generateMetadata({ params }: { params: { blog: number } }) {
  const post: blogType = await getBlogPage(params.blog)
  return {
    title: post.title,
    description: post.short
  }
}


export default async function BlogPage({ params }: { params: { blog: number } }) {
  const post: blogType = await getBlogPage(params.blog)
  const date: string = createDate(post.createdAt)

  // Breadcrumbs
  let crumbs: BreadCrumbsType[] = [
    { name: "Блог", slug: "/blog" },
    { name: post.title, slug: post.slug }
  ]

  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>{post.title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{__html: post.description!}}></div>
    </div>
  )
}
