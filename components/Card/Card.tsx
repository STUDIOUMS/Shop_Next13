'use client'

import AddCart from "@/components/AddCart"
import Packages from "@/components/Packages/Packages"
import { usePriceImg } from "@/components/price.hook"
import PriceBox from "@/components/PriceBox"
import Tag from "@/components/Tag/Tag"
import { RootState } from "@/store/store"
import { ProductType } from "@/options/types"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import { Item, ItemDetails, ItemIcons, ItemImage, ItemPacks, ItemTitle } from "./СardStyles"

interface ICard {
  el: ProductType
  slide?: boolean
}

const Card: React.FC<ICard> = ({ el, slide }) => {
  const view = useSelector((state: RootState) => state.app.view)

  const { choosePack, img, price, oldprice, currentPack } = usePriceImg(el.relatedPacks)

  // isSale
  const isSale = el.relatedPacks.some(el => el.oldPrice !== null)

  return (
    <Item $view={view}>
      <ItemDetails $view={view}>
        <ItemImage $view={view}>
          <Link href={`/product/${el.slug}`}>
            <Image src={img} alt="" height={120} width={140} />
          </Link>
        </ItemImage>
        <div>
          <ItemTitle>
            <Link href={`/product/${el.slug}`}>{el.title}</Link>
          </ItemTitle>
          <PriceBox price={price} oldprice={oldprice} />
          <ItemIcons $view={view}>
            {el.hit && <Tag type='hit' />}
            {isSale && <Tag type='sale' />}
            {el.new && <Tag type='new' />}
          </ItemIcons>
          <ItemPacks>
            <Packages goodID={el.id} handler={choosePack} packs={el.relatedPacks} />
          </ItemPacks>
        </div>
      </ItemDetails>
      <AddCart el={el} img={img} pack={currentPack} price={price} />
    </Item>
  )
}

export default Card