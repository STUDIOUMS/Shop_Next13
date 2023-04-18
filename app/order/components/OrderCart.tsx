'use client'

import { RootState } from "@/app/store/store"
import { set_currency } from "@/options/settings"
import { useSelector } from "react-redux"
import styles from "./Order.module.scss"
import OrderCartItem from "./OrderCartItem"

const OrderCart: React.FC = () => {
  const orders = useSelector((state: RootState) => state.app.orders)
  const totalPrice = orders.reduce((prev, el) => el.total + prev, 0)

  return (
    <div className={styles.orderCart}>
      {orders.map(el => <OrderCartItem key={el.id} el={el} />)}
      <div className={styles.orderCartTotal}>
        Итого: <b>{totalPrice}</b>
        <small>{set_currency}</small>
      </div>
    </div>
  )
}

export default OrderCart