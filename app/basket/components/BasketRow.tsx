import PriceBox from "@/components/PriceBox"
import Counter from "@/components/UI/Counter"
import { removeOrder } from "@/store/appSlice"
import { useAppDispatch } from "@/store/hooks"
import { BasketType } from "@/options/types"
import Image from "next/image"
import Link from "next/link"
import { BasketItem, BasketItemText, Delete, MobileTitle } from "./BasketStyles"

interface IBasketRow {
  order: BasketType
}

const BasketRow: React.FC<IBasketRow> = ({ order }) => {
  const dispatch = useAppDispatch()

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
        <Counter productId={order.id} val={order.count!} />
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