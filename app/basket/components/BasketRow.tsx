import { changeCountOrder, removeOrder } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { set_currency } from "@/options/settings"
import { BasketType } from "@/options/types"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import styles from "./Basket.module.scss"

interface IBasketRow {
  order: BasketType
}

const BasketRow: React.FC<IBasketRow> = ({ order }) => {
  const dispatch = useDispatch<AppDispatch>()
  
  return (
    <div className={styles.basketRow}>
      <div className="row align-items-center">
        <div className={`col-12 col-md-6 ${styles.basketDesc}`}>
          <div className="row align-items-center">
            <div className={`col-3 ${styles.basketRowImg}`}>
            <Link href={`/product/${order.slug}`}>
              <Image src={order.img} alt="" width={70} height={70} />
            </Link>
            </div>
            <div className="col-9">
              <div className={styles.basketRowName}>
                <Link href={`/product/${order.slug}`}>{order.title}</Link>
              </div>
              <div className={styles.basketRowArt}>
                <span>Фасовка:</span>
                <b>{order.pack}</b>
              </div>
              <div className={styles.basketRowArt}>
                <span>Код товара:</span>
                <b>{order.art}</b>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row align-items-center">
            <div className="col-4">
              <div className={styles.basketMbTitle}>Цена</div>
              <div className={styles.basketPrice}>
                {order.price}
                <small>{set_currency}</small>
              </div>
            </div>
            <div className="col-4">
              <div className={styles.basketMbTitle}>Кол-во</div>
              <input
                type="number"
                className="form-control"
                defaultValue={order.count}
                min={1}
                style={{width: '70px'}}
                onChange={e => dispatch(changeCountOrder({ count: Number(e.target.value), id: order.id }))}
              />
            </div>
            <div className="col-4">
              <div className={styles.basketMbTitle}>Стоимость</div>
              <div className={styles.basketPrice}>
                {order.total}
                <small>{set_currency}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.basketDelete} onClick={() => dispatch(removeOrder(order.id))}></button>
    </div>
  )
}

export default BasketRow