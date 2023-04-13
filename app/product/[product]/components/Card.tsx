'use client'

import AddCart from "@/app/components/AddCart"
import { GoodType, featPackType, packType } from "@/options/types"
import { useEffect, useState } from "react"
import Package from "./Package"
import styles from './Card.module.scss'

interface IProductCard {
  good: GoodType
  packages: featPackType[]
}

const ProductCard: React.FC<IProductCard> = ({ good, packages }) => {
  const [img, setImg] = useState<string>(good.pack[0].img)
  const [price, setPrice] = useState<number>(good.pack[0].price)
  const [currentPackID, setCurrentPackID] = useState<number>(good.pack[0].packID)
  const [currentPack, setCurrentPack] = useState<packType>(good.pack[0])
  const [currentPackName, setCurrentPackName] = useState<string>(packages[0].name)

  useEffect(() => {
    const findedPack = good.pack.find(el => el.packID === currentPackID)
    setImg(findedPack!.img)
    setPrice(findedPack!.price)
  }, [currentPackID])

  // choosePack
  const choosePack = (id: number, name: string) => {
    setCurrentPackID(id)
    setCurrentPackName(name)
  }
  

  return (
    <div className={styles.card}>
      <div className="row">
        <div className="col-12 col-md-5">
          <div className={styles.cardGallery}>
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          
          <p>Код товара: {good.art}</p>
          
          <div className={styles.cardPrice}>{price} <small>руб.</small></div>

          <div className={styles.packages}>
            <div className={styles.packagesTitle}>Фасовка:</div>
            <div className={styles.packagesRow}>
              {packages.map((el, index) => (
                <Package key={el.id} index={index} name={el.name} value={el.id} handler={choosePack} />
              ))}
            </div>
          </div>

          <div className={styles.cardItem}>
            <AddCart big={true} el={good} pack={currentPackName} price={price} img={img} />
          </div>

          <p>Какой-то текст или информация о доставке</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci eius necessitatibus, est unde consequuntur!</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard