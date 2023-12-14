"use client"

import Btn from "@/components/UI/Btn"
import { styled } from "styled-components"

interface IProductTab {
  active: string
  setKey: any
  name: string
  val: string
}

const TabItem = styled.li`
  list-style: none;
  margin: 0 4px 0 0;
  &:last-child {margin: 0;}
  @media screen and (max-width: 750px) {
    button { padding-left: 10px !important; padding-right: 10px !important; }
  }
`

const ProductTab: React.FC<IProductTab> = ({ active, name, setKey, val }) => {
  return (
    <TabItem>
      <Btn title={name} color={active === val ? 'success' : 'white'} handler={() => setKey(val)} />
    </TabItem>
  )
}

export default ProductTab