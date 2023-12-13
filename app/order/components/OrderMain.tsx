'use client'

import Alert from "@/app/components/UI/Alert"
import Btn from "@/app/components/UI/Btn"
import { RootState } from "@/app/store/store"
import { useSelector } from "react-redux"
import OrderCart from "./OrderCart"
import OrderForm from "./OrderForm"
import { OrderWrap } from "./OrderStyles"

const OrderMain_old: React.FC = () => {
  const orders = useSelector((state: RootState) => state.app.orders)

  return (
    <div className="section">
      {(orders.length > 0)
        ? <OrderWrap className="grid grid-4 grid-tb-1">
          <div>
            <OrderForm />
          </div>
          <div>
            <OrderCart />
          </div>
        </OrderWrap>
        : <>
          <Alert>Ваша корзина пуста</Alert>
          <Btn to="/" title="Веурнться на главную" className="mb-expand" />
        </>
      }
    </div>
  )
}

export default OrderMain_old