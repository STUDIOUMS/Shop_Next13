'use client'

import BlogsWidjetItem, { Item } from "@/app/components/BlogsWidjet/BlogsWidjetItem"
import Loadmore from "@/app/components/Loadmore"
import { blogType } from "@/options/types"
import { styled } from "styled-components"

interface IBlogList {
  all: number
  limit: number
  list: blogType[]
}

const List = styled.div`
  ${Item} { margin: 0 0 var(--gap); }
`

const BlogList: React.FC<IBlogList> = ({ all, limit, list }) => {
  return (
    <List className="section">
      {list.map(post => <BlogsWidjetItem key={post.id} el={post} />)}
      <Loadmore all={all} pages={limit} />
    </List>
  )
}

export default BlogList