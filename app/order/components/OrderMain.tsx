'use client'

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
          <div className="alert alert-secondary">Ваша корзина пуста</div>
          <Btn to="/" title="Веурнться на главную" />
        </>
      }
    </div>
  )
}

export default OrderMain_old