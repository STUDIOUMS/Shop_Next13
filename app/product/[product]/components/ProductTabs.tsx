"use client"

import { useState } from "react"
import { Tab, Tabs } from "react-bootstrap"

interface IProductTabs {
  description: string
}

const ProductTabs: React.FC<IProductTabs> = ({ description }) => {
  const [key, setKey] = useState<string>('home')

  return (
    <div>
      <Tabs defaultActiveKey="profile" className="mb-3">
        <Tab eventKey="home" title="Описание">
          <h3>Описание</h3>
          <div dangerouslySetInnerHTML={{__html: description}}></div>
        </Tab>
        <Tab eventKey="features" title="Характеристики">
          <h3>Характеристики</h3>
        </Tab>
        <Tab eventKey="reviews" title="Отзывы">
          <h3>Отзывы</h3>
        </Tab>
      </Tabs>
    </div>
  )
}

export default ProductTabs