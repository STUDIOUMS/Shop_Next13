'use client'

import AddCart from "@/app/components/AddCart"
import { GoodType } from "@/options/types"

interface IMeta {
  el: GoodType
}

const Meta: React.FC<IMeta> = ({ el }) => {
  return (
    <div>
      <p>Артикул: {el.art}</p>
      <p>Цена: {el.price} руб.</p>
      <AddCart el={el} inBasket={false} />
    </div>
  )
}

export default Meta