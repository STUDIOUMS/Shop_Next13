import { createDate } from "@/options/helpers"
import { blogType } from "@/options/types"
import Link from "next/link"
import { styled } from "styled-components"

interface IBlogItem {
  post: blogType
}

// Styles
const Item = styled.div`
  border-bottom: 1px solid var(--color-light);
  margin: 0 0 var(--gap);
  padding: 0 0 var(--gap);
  &:last-child { border: 0; margin: 0; padding: 0; }
  h2 {
    font-size: 18px;
    font-family: var(--font2);
    line-height: 22px;
    margin: 0 0 10px;
  }
`
export const ItemDate = styled.div`
  color: var(--color-text2);
  margin: 0 0 10px;
`

const BlogItem: React.FC<IBlogItem> = ({ post }) => {
  const date = createDate(post.createdAt)

  return (
    <Item>
      <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
      <ItemDate>{date}</ItemDate>
      <div>{post.short}</div>
    </Item>
  )
}

export default BlogItem