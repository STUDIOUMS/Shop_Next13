import { set_currency } from "@/options/settings"
import { OrderType } from "@/options/types"
import styles from "./Basket.module.scss"

interface IBasketTotal {
  orders: OrderType[]
}

const BasketTotal: React.FC<IBasketTotal> = ({ orders }) => {
  const total: number = orders.reduce((acum, el) => acum += el.total, 0)
  
  return (
    <div className={styles.basketTotal}>
      Итого: <b>{total}</b> <small>{set_currency}</small>
    </div>
  )
}

export default BasketTotal