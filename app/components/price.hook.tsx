import { RelatedPacksType } from "@/options/types"
import { useEffect, useState } from "react"

interface usePriceImgType {
  img: string
  price: string
  oldprice?: string
  choosePack: (id: number) => void
}

export const usePriceImg = (packs: RelatedPacksType[]): usePriceImgType => {
  const [img, setImg] = useState<string>(packs[0].img)
  const [price, setPrice] = useState<string>(packs[0].price)
  const [oldprice, setOldPrice] = useState<string>(packs[0].oldPrice)
  const [currentPackID, setCurrentPackID] = useState<number>(packs[0].id)

  useEffect(() => {
    const findedPack = packs.find(el => el.id === currentPackID)
    setImg(findedPack!.img)
    setPrice(findedPack!.price)
    if (findedPack?.oldPrice) {
      setOldPrice(findedPack.oldPrice)
    }
  }, [currentPackID])

  // choosePack
  const choosePack = (id: number) => {
    setCurrentPackID(id)
  }

  return {
    img, price, oldprice, choosePack
  }
}