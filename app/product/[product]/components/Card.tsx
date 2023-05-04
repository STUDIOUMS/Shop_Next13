'use client'

import AddCart from "@/app/components/AddCart"
import Packages from "@/app/components/Packages/Packages"
import { usePriceImg } from "@/app/components/price.hook"
import { GoodType } from "@/options/types"
import styles from './Card.module.scss'

interface IProductCard {
  good: GoodType
}

const ProductCard: React.FC<IProductCard> = ({ good }) => {
  const packs = good.pack
  const { choosePack, img, price, currentPack, packNames } = usePriceImg({packs})

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

          <Packages handler={choosePack} goodID={good.id} packs={packNames} />

          <div className={styles.cardItem}>
            <AddCart big={true} el={good} pack={currentPack} price={price} img={img} />
          </div>

          <p>Какой-то текст или информация о доставке</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci eius necessitatibus, est unde consequuntur!</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard