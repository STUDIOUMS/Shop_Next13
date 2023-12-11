'use client'

import SCRegistry from '@/options/registry';
import { blogType } from '@/options/types'
import Link from 'next/link'
import styled from 'styled-components';

interface BlogsWidjetItem {
  el: blogType
}

const Item = styled.div`
  border: 1px solid var(--color-light);
  border-radius: 10px;
`
const Content = styled.div`
  color: var(--color-text2);
  padding: 15px;
`
const Title = styled.div`
  font-size: 18px;
  line-height: 20px;
  margin: 0 0 10px;
`

const BlogsWidjetItem: React.FC<BlogsWidjetItem> = ({ el }) => {
  return (
    <Item>
      <Content>
        <Title>
          <Link href={`/blog/${el.slug}`}>{el.title}</Link>
        </Title>
        <div dangerouslySetInnerHTML={{__html: el.short!}}></div>
      </Content>
    </Item>
  )
}

export default BlogsWidjetItem