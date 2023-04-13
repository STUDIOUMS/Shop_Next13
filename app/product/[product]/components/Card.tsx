'use client'

import AddCart from "@/app/components/AddCart"
import { CatType, GoodType, featPackType } from "@/options/types"
import Link from "next/link"
import { useState } from "react"
import Package from "./Package"
import styles from './Package.module.scss'

interface IProductCard {
  good: GoodType
  cats: CatType[]
  packages: featPackType[]
}

const ProductCard: React.FC<IProductCard> = ({ cats, good, packages }) => {
  const [img, setImg] = useState<string>(good.pack[0].img)
  const [price, setPrice] = useState<number>(good.pack[0].price)

  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <img src={img} alt="" />
      </div>
      <div className="col-12 col-lg-8">
        <ul className="cats">
          {cats.map(el => (
            <li key={el.id}><Link href={`/cat/${el.slug}`}>{el.name}</Link></li>
          ))}
        </ul>

        <div className={styles.packages}>
          {packages.map((el, index) => <Package key={el.id} index={index} name={el.name} />)}
        </div>
        
        <div>
          <p>Артикул: {good.art}</p>
          <p>Цена: {price} руб.</p>
          <AddCart el={good} inBasket={false} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard