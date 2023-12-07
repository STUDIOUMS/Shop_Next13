"use client"

import Btn from "@/app/components/UI/Btn"
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
`

const ProductTab: React.FC<IProductTab> = ({ active, name, setKey, val }) => {
  return (
    <TabItem>
      <Btn title={name} color={active === val ? 'green' : 'white'} handler={() => setKey(val)} />
    </TabItem>
  )
}

export default ProductTab