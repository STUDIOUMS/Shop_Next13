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
import BasketHead from "./components/BasketHead"

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
        <div className={styles.basket}>
          <BasketHead />
          {orders.map(el => <BasketRow key={el.id} order={el} />)}
          {!orders.length && <p>Loading...</p>}
        </div>
        
        <BasketTotal orders={orders} />
        <Link href="/order" className="btn btn-success">Оформить заказ</Link>
        
      </> : <p>Корзина пуста</p>}
    </div>
  )
}

export default Basket