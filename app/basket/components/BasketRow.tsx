import PriceBox from "@/app/components/PriceBox"
import { changeCountOrder, removeOrder } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { BasketType } from "@/options/types"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { BasketItem, BasketItemText, Delete, MobileTitle } from "./BasketStyles"

interface IBasketRow {
  order: BasketType
}

const BasketRow: React.FC<IBasketRow> = ({ order }) => {
  const dispatch = useDispatch<AppDispatch>()
  
  return (
    <BasketItem>
      <div>
        <Link href={`/product/${order.slug}`}>
          <Image src={order.img} alt="" width={70} height={70} />
        </Link>
      </div>
      <div>
        <h3><Link href={`/product/${order.slug}`}>{order.title}</Link></h3>
        <BasketItemText><span>Фасовка:</span> <b>{order.pack}</b></BasketItemText>
        <BasketItemText><span>Код товара:</span> <b>{order.art}</b></BasketItemText>
      </div>
      <div>
        <MobileTitle>Цена</MobileTitle>
        <PriceBox price={order.price} />
      </div>
      <div>
        <MobileTitle>Кол-во</MobileTitle>
        <input
          type="number"
          defaultValue={order.count}
          min={1}
          style={{width: '70px'}}
          onChange={e => dispatch(changeCountOrder({ count: Number(e.target.value), id: order.id }))}
        />
      </div>
      <div>
        <MobileTitle>Стоимость</MobileTitle>
        <PriceBox price={order.total} />
      </div>
      <Delete onClick={() => dispatch(removeOrder(order.id))} />
    </BasketItem>
  )
}

export default BasketRow