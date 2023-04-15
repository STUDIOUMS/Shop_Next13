import { blogType } from "@/options/types"
import BlogItem from "./BlogItem"

interface IBlogList {
  list: blogType[]
  total: string
}

const BlogList: React.FC<IBlogList> = ({ list, total }) => {
  return (
    <div>
      {list.map(post => <BlogItem key={post.id} post={post} />)}
    </div>
  )
}

export default BlogList