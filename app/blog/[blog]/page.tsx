import BreadCrumbs from "@/app/components/BreadCrumbs"
import { getBlogPage } from "@/options/fetches"
import { createDate } from "@/options/helpers"
import { blogType, BreadCrumbsType } from "@/options/types"
import styles from "./../components/Blog.module.scss"

export default async function BlogPage({ params }: { params: { blog: number } }) {
  const post: blogType = await getBlogPage(params.blog)
  const date: string = createDate(post.createdAt)

  let crumbs: BreadCrumbsType[] = [
    { name: "Блог", slug: "/blog" },
    { name: post.title, slug: post.slug }
  ]

  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>{post.title}</h1>
      <div className={styles.blogDate}>{date}</div>
      <div dangerouslySetInnerHTML={{__html: post.description!}}></div>
    </div>
  )
}
