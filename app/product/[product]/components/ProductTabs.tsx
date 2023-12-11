"use client"

import { useState } from "react"
import { RelatedAttrsType } from "@/options/types"
import ProductTab from "./ProductTab"
import { styled } from "styled-components"

type tabsType = 'desc' | 'features' | 'reviews'

interface IProductTabs {
  description: string
  features: RelatedAttrsType[]
}

const tabs = [
  { id: 1, name: "Описание", val: "desc" },
  { id: 2, name: "Характеристики", val: "features" },
  { id: 3, name: "Отзывы", val: "reviews" }
]

// Styles
const Tabs = styled.div`
  display: flex;
  margin: 0 0 var(--gap);
  padding: 0;
`
const TabsPane = styled.div<{ $active: boolean }>`
  display: ${props => props.$active ? 'block' : 'none'};
`
const Features = styled.ul`
  margin: 0; padding: 0;
  li {
    display: flex; padding: 8px 16px; border-radius: 4px;
    &:nth-child(odd) {background: var(--color-light);}
  }
`
const FeaturesKey = styled.div`
  display: block; min-width: 120px; max-width: 120px; margin: 0 16px 0 0; color: var(--color-text2);
`
const FeaturesVal = styled.div`display: block;`


const ProductTabs: React.FC<IProductTabs> = ({ description, features }) => {
  const [key, setKey] = useState<tabsType>('desc')

  return (
    <div className="section">
      <Tabs>
        {tabs.map(tab => (
          <ProductTab key={tab.id} active={key} name={tab.name} val={tab.val} setKey={setKey} />
        ))}
      </Tabs>

      <TabsPane $active={key === 'desc'}>
        <div dangerouslySetInnerHTML={{__html: description}}></div>
      </TabsPane>

      <TabsPane $active={key === 'features'}>
        <Features>
          {features.map(el => (
            <li key={el.id}>
              <FeaturesKey>{el.attribute.name}</FeaturesKey>
              <FeaturesVal>{el.value}</FeaturesVal>
            </li>
          ))}
        </Features>
      </TabsPane>

      <TabsPane $active={key === 'reviews'}>
        <h3>Отзывы</h3>
      </TabsPane>
    </div>
  )
}

export default ProductTabs