'use client'

import { BreadCrumbsType } from "@/options/types"
import Link from "next/link"
import styled from "styled-components"

interface IBreadCrumbs {
  list: BreadCrumbsType[]
}

// Styles
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: var(--font2);
  margin-bottom: var(--gap);
  padding: 0;
  @media screen and (max-width: 750px) {
    display: none;
  }
`
const Item = styled.li`
  list-style: none;
  margin: 0 20px 0 0;
`

const BreadCrumbs: React.FC<IBreadCrumbs> = ({ list }) => {
  return (
    <List>
      <Item>
        <Link href="/">Главная</Link>
      </Item>
      {list.map((el, index, array) => {
        if (index !== (array.length - 1)) {
          return <Item key={el.slug}>
            <Link href={el.slug}>{el.name}</Link>
          </Item>
        } else {
          return <Item key={el.slug}>
            <span>{el.name}</span>
          </Item>
        }
      })}
    </List>
  )
}

export default BreadCrumbs