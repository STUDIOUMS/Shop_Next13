'use client'

import AddCart from "@/app/components/AddCart"
import QuickOrderModal from "@/app/components/Modals/QuickOrderModal"
import Packages from "@/app/components/Packages/Packages"
import { usePriceImg } from "@/app/components/price.hook"
import Tag from "@/app/components/Tag/Tag"
import { set_currency } from "@/options/settings"
import { ProductType } from "@/options/types"
import { useState } from "react"
import Gallery from "./Gallery"
import styles from './ProductCard.module.scss'

interface IProductCard {
  good: ProductType
}

const ProductCard: React.FC<IProductCard> = ({ good }) => {
  const [quickModal, setQuickModal] = useState<boolean>(false)
  const packs = good.relatedPacks
  const { choosePack, img, price, oldprice, currentPack } = usePriceImg(packs)

  const isSale = good.relatedPacks.some(el => el.oldPrice !== null)

  return (
    <div className={styles.card}>
      <div className="row">
        <div className="col-12 col-md-5">
          <div className={styles.cardGallery}>
            <Gallery img={img} title={`${good.title}. Упаковка: ${currentPack}`} />

            {good.hit && <div className={styles.cardGalleryTag}><Tag type='hit' /></div>}
            {good.new && <div className={styles.cardGalleryTag}><Tag type='new' /></div>}
            {isSale && <div className={styles.cardGalleryTag}><Tag type='sale' /></div>}
          </div>
        </div>
        <div className="col-12 col-md-7">
          
          <p>Код товара: {good.art}</p>
          
          <div className={styles.cardPrice}>
            {price} <small>{set_currency}</small>
            {oldprice && <div className={styles.cardOldPrice}>{oldprice} <small>{set_currency}</small></div>}
          </div>

          <div className={styles.cardPacks}>
            <Packages handler={choosePack} goodID={good.id} packs={packs} />
          </div>

          <div className={styles.cardItem}>
            <AddCart big={true} el={good} pack={currentPack} price={price} img={img} />
            <button className="btn btn-outline-secondary ms-2" onClick={() => setQuickModal(true)}>Быстрый заказ</button>
          </div>

          <p>Какой-то текст или информация о доставке</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci eius necessitatibus, est unde consequuntur!</p>
        </div>
      </div>
      <QuickOrderModal show={quickModal} func={() => setQuickModal(false)} />
    </div>
  )
}

export default ProductCard