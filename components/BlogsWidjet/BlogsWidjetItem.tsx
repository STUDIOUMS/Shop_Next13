'use client'

import { createDate } from '@/options/helpers'
import { blogType } from '@/options/types'
import Link from 'next/link'
import styled from 'styled-components';

interface BlogsWidjetItem {
  el: blogType
}

export const Item = styled.div`
  background: var(--color-extralight);
  border-radius: var(--radius);
  padding: var(--pb);
  color: var(--color-text2);
`
export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin: 0 0 10px;
  a {
    color: var(--color-text);
    &:hover { color: var(--color-success); }
  }
`
export const Date = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin: 0 0 10px;
`

const BlogsWidjetItem: React.FC<BlogsWidjetItem> = ({ el }) => {
  const date = createDate(el.createdAt)
  return (
    <Item>
      <Title>
        <Link href={`/blog/${el.slug}`}>{el.title}</Link>
      </Title>
      <Date>{date}</Date>
      <div dangerouslySetInnerHTML={{__html: el.short!}}></div>
    </Item>
  )
}

export default BlogsWidjetItem