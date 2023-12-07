'use client'

import AddCart from "@/app/components/AddCart"
import QuickOrderModal from "@/app/components/Modals/QuickOrderModal"
import Packages from "@/app/components/Packages/Packages"
import { usePriceImg } from "@/app/components/price.hook"
import PriceBox from "@/app/components/PriceBox"
import Tag from "@/app/components/Tag/Tag"
import Btn from "@/app/components/UI/Btn"
import SCRegistry from "@/options/registry"
import { set_currency } from "@/options/settings"
import { ProductType } from "@/options/types"
import { useState } from "react"
import { styled } from "styled-components"
import Gallery from "./Gallery"

interface IProductCard {
  good: ProductType
}

// Styles
const Image = styled.div`
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  position: relative;
  img {display: block; max-height: 260px;}
  @media screen and (max-width: 750px) { min-height: 200px; img {max-height: 180px;} }
`
const ImageTags = styled.div`position: absolute; right: 15px; top: 15px;`


const ProductCard: React.FC<IProductCard> = ({ good }) => {
  const [quickModal, setQuickModal] = useState<boolean>(false)
  const packs = good.relatedPacks
  const { choosePack, img, price, oldprice, currentPack } = usePriceImg(packs)

  const isSale = good.relatedPacks.some(el => el.oldPrice !== null)

  return (
    <SCRegistry>
      <div className="grid grid-2 section">
        <div>
          <Image>
            <Gallery img={img} title={`${good.title}. Упаковка: ${currentPack}`} />
            <ImageTags>
              {good.hit && <Tag type='hit' />}
              {good.new && <Tag type='new' />}
              {isSale && <Tag type='sale' />}
            </ImageTags>
          </Image>
        </div>

        <div>
          <p>Код товара: {good.art}</p>
          
          <PriceBox price={price} oldprice={oldprice} size="large" />

          <div>
            <Packages handler={choosePack} goodID={good.id} packs={packs} />
          </div>

          <div>
            <AddCart big={true} el={good} pack={currentPack} price={price} img={img} />
            <Btn title="Быстрый заказ" handler={() => setQuickModal(true)} />
          </div>

          <p>Какой-то текст или информация о доставке</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci eius necessitatibus, est unde consequuntur!</p>
        </div>
      </div>

      <QuickOrderModal show={quickModal} func={() => setQuickModal(false)} />
    </SCRegistry>
  )
}

export default ProductCard