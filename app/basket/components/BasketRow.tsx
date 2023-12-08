import PriceBox from "@/app/components/PriceBox"
import { changeCountOrder, removeOrder } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { BasketType } from "@/options/types"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { styled } from "styled-components"
import deleteIcon from "@/assets/close-white.svg"

interface IBasketRow {
  order: BasketType
}

// Styles
const BasketItem = styled.div`
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  display: grid;
  grid-template-columns: 70px 1fr 120px 120px 120px; 
  grid-column-gap: var(--gap); 
  margin: 0 0 var(--pb);
  padding: var(--pb);
  position: relative;
  h3 { margin: 0 0 var(--pb); }
  
`
const BasketItemText = styled.div`
  color: var(--color-text2);
  margin: 0;
  b { color: var(--color-text); }
`
const Delete = styled.button`
  background: var(--color-danger) url(${deleteIcon.src}) center / 12px no-repeat;
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  height: 24px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 24px;
`


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
        <div>Цена</div>
        <PriceBox price={order.price} />
      </div>
      <div>
        <div>Кол-во</div>
        <input
          type="number"
          defaultValue={order.count}
          min={1}
          style={{width: '70px'}}
          onChange={e => dispatch(changeCountOrder({ count: Number(e.target.value), id: order.id }))}
        />
      </div>
      <div>
        <div>Стоимость</div>
        <PriceBox price={order.total} />
      </div>
      <Delete onClick={() => dispatch(removeOrder(order.id))} />
    </BasketItem>
  )
}

export default BasketRow