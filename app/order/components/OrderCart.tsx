'use client'

import { RootState } from "@/app/store/store"
import { set_currency } from "@/options/settings"
import { useSelector } from "react-redux"
import { styled } from "styled-components"
import OrderCartItem from "./OrderCartItem"

// Styles
const OrderCartBox = styled.div`
  border: 1px solid var(--color-success-hover);
  border-radius: 8px;
  padding: 12px;
  position: sticky;
  top: 70px;
  margin: 0 0 var(--pb);
`
const OrderCartTotal = styled.div`
  text-align: right;
  font-size: 18px;
  line-height: 20px;
  small {font-size: 14px; margin-left: 4px;}
`

const OrderCart: React.FC = () => {
  const orders = useSelector((state: RootState) => state.app.orders)
  const totalPrice = orders.reduce((prev, el) => Number(el.total) + prev, 0)

  return (
    <OrderCartBox>
      {orders.map(el => <OrderCartItem key={el.id} el={el} />)}
      <OrderCartTotal>
        Итого: <b>{totalPrice}</b>
        <small>{set_currency}</small>
      </OrderCartTotal>
    </OrderCartBox>
  )
}

export default OrderCart