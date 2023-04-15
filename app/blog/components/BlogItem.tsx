import { blogType } from "@/options/types"
import Link from "next/link"

interface IBlogItem {
  post: blogType
}

const BlogItem: React.FC<IBlogItem> = ({ post }) => {
  return (
    <div>
      <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
      <div dangerouslySetInnerHTML={{__html: post.description}}></div>
    </div>
  )
}

export default BlogItem