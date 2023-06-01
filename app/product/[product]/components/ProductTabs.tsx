"use client"

import { useState } from "react"
import { RelatedAttrsType } from "@/options/types"
import styles from "./ProductTabs.module.scss"
import ProductTab from "./ProductTab"

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

const ProductTabs: React.FC<IProductTabs> = ({ description, features }) => {
  const [key, setKey] = useState<tabsType>('desc')

  return (
    <div>
      <ul className={styles.tabsHeader}>
        {tabs.map(tab => (
          <ProductTab key={tab.id} active={key} name={tab.name} val={tab.val} setKey={setKey} />
        ))}
      </ul>

      <div className={`${styles.tabsPane} ${key === 'desc' ? styles.tabsPaneActive : ''}`}>
        <div dangerouslySetInnerHTML={{__html: description}}></div>
      </div>

      <div className={`${styles.tabsPane} ${key === 'features' ? styles.tabsPaneActive : ''}`}>
        <ul className={styles.features}>
          {features.map(el => (
            <li key={el.id}>
              <div className={styles.featuresKey}>{el.attribute.name}</div>
              <div className={styles.featuresVal}>{el.value}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.tabsPane} ${key === 'reviews' ? styles.tabsPaneActive : ''}`}>
        <h3>Отзывы</h3>
      </div>
    </div>
  )
}

export default ProductTabs