import { createDate } from "@/options/helpers"
import { blogType } from "@/options/types"
import Link from "next/link"
import styles from "../components/Blog.module.scss"

interface IBlogItem {
  post: blogType
}

const BlogItem: React.FC<IBlogItem> = ({ post }) => {
  const date = createDate(post.createdAt)

  return (
    <div className={styles.blogItem}>
      <h2><Link href={`/blog/${post.id}`}>{post.title}</Link></h2>
      <div className={styles.blogDate}>{date}</div>
      <div className={styles.blogShort}>{post.short}</div>
    </div>
  )
}

export default BlogItem