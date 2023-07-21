'use client'

import { RootState } from "@/app/store/store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import OrderCart from "./OrderCart"
import OrderForm from "./OrderForm"

const OrderMain: React.FC = () => {
  const orders = useSelector((state: RootState) => state.app.orders)

  return (
    <div>
      {(orders.length > 0) ?
        <>
          <div className="row">
            <div className="col-12 col-lg-8 order-2 order-lg-1">
              <OrderForm />
            </div>
            <div className="col-12 col-lg-4 order-1 order-lg-2">
              <OrderCart />
            </div>
          </div>
        </> :
        <>
          <div className="alert alert-secondary">Ваша корзина пуста</div>
          <Link href={"/"} className="btn btn-success">Веурнться на главную</Link>
        </>
      }
    </div>
  )
}

export default OrderMain