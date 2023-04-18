import { set_currency } from "@/options/settings"
import { OrderType } from "@/options/types"
import styles from "./Order.module.scss"

interface IOrderCartItem {
  el: OrderType
}

const OrderCartItem: React.FC<IOrderCartItem> = ({ el }) => {

  return (
    <div className={styles.orderItem}>
      <div className={styles.orderItemImg}>
        <img src={el.img} alt="" />
      </div>
      <div className={styles.orderItemDesc}>
        <div className={styles.orderItemTitle}>{el.title}</div>
        <p>Код товара: <span>{el.art}</span></p>
        <p>Тара: <span>{el.pack}</span></p>
        <p>Кол-во: <span>{el.count} - {el.total} {set_currency}</span></p>
      </div>
    </div>
  )
}

export default OrderCartItem