'use client'

import { NextPage } from "next"
import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import BasketRow from "./components/BasketRow"
import BasketTotal from "./components/BasketTotal"
import styles from "./components/Basket.module.scss"
import BreadCrumbs from "../components/BreadCrumbs"
import { BreadCrumbsType } from "@/options/types"

/* BreadCrumbs */
const crumbs: BreadCrumbsType[] = [
  { name: 'Корзина', slug: `/basket` },
]

const Basket: NextPage = () => {
  const orders = useSelector((state: RootState) => state.app.orders)
  
  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <h1>Корзина</h1>

      {orders.length ?
      <>
        <table className={styles.basketTable}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" colSpan={2}>Название товара</th>
              <th scope="col">Цена</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el, index) => <BasketRow key={el.id} index={index + 1} order={el} />)}
            {!orders.length && <tr><td colSpan={7}>Loading...</td></tr>}
          </tbody>
        </table>
        
        <BasketTotal orders={orders} />
        <Link href="/order" className="btn btn-success">Оформить заказ</Link>
        
      </> : <p>Корзина пуста</p>}
    </div>
  )
}

export default Basket