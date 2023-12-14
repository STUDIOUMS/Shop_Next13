'use client'

import AddCart from "@/components/AddCart"
import QuickModal from "@/components/Modal/QuickModal"
import Packages from "@/components/Packages/Packages"
import { usePriceImg } from "@/components/price.hook"
import PriceBox from "@/components/PriceBox"
import Tag from "@/components/Tag/Tag"
import Btn from "@/components/UI/Btn"
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
const WrapPacks = styled.div`margin: 0 0 var(--gap);`
const WrapBtns = styled.div`
  display: flex;
  * { margin: 0 calc(var(--gap) / 2) 0 0; }
`
const Code = styled.div`
  color: var(--color-text2);
  margin: 0 0 var(--gap);
  b { color: var(--color-text); }
`


const ProductCard: React.FC<IProductCard> = ({ good }) => {
  const packs = good.relatedPacks
  const [quickModal, setQuickModal] = useState<boolean>(false)
  const { choosePack, img, price, oldprice, currentPack } = usePriceImg(packs)

  const isSale = good.relatedPacks.some(el => el.oldPrice !== null)

  return (
    <>
      <div className="grid grid-2 grid-mb-1 section">
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
          <Code>Код товара: <b>{good.art}</b></Code>
          
          <PriceBox price={price} oldprice={oldprice} size="large" />

          <WrapPacks>
            <Packages handler={choosePack} goodID={good.id} packs={packs} />
          </WrapPacks>

          <WrapBtns>
            <AddCart big={true} el={good} pack={currentPack} price={price} img={img} />
            <Btn title="Быстрый заказ" handler={() => setQuickModal(true)} />
          </WrapBtns>

          <p>Какой-то текст или информация о доставке</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci eius necessitatibus, est unde consequuntur!</p>
        </div>
      </div>

      <QuickModal show={quickModal} handler={setQuickModal} productId={good.id} />
    </>
  )
}

export default ProductCard