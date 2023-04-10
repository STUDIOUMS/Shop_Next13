'use client'

import { NextPage } from "next"
import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import BasketRow from "./components/BasketRow"
import BasketTotal from "./components/BasketTotal"

const Basket: NextPage = () => {
  const orders = useSelector((state: RootState) => state.app.orders)
  
  return (
    <div>
      <h1>Корзина</h1>

      {orders.length ?
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" colSpan={2}>Product</th>
              <th scope="col">Price</th>
              <th scope="col">Count</th>
              <th scope="col">Total</th>
              <th scope="col">x</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el, index) => <BasketRow key={el.id} index={index + 1} order={el} />)}
            {!orders.length && <tr><td colSpan={7}>Loading...</td></tr>}
          </tbody>
        </table>
        
        <BasketTotal orders={orders} />
        <Link href="/order" className="btn btn-primary">Оформить заказ</Link>
        
      </> : <p>Корзина пуста</p>}
    </div>
  )
}

export default Basket