'use client'

import Loadmore from "@/app/components/Loadmore"
import { blogType } from "@/options/types"
import BlogItem from "./BlogItem"

interface IBlogList {
  all: number
  limit: number
  list: blogType[]
}

const BlogList: React.FC<IBlogList> = ({ all, limit, list }) => {
  return (
    <div className="section">
      {list.map(post => <BlogItem key={post.id} post={post} />)}
      <Loadmore all={all} pages={limit} />
    </div>
  )
}

export default BlogList