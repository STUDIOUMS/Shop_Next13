'use client'

import { RootState } from "@/app/store/store"
import Link from "next/link"
import { useSelector } from "react-redux"
import BasketHead from "./BasketHead"
import BasketRow from "./BasketRow"
import BasketTotal from "./BasketTotal"
import styles from "./../components/Basket.module.scss"

const BasketList = () => {
  const orders = useSelector((state: RootState) => state.app.orders)

  return (
    <div>
      {orders.length ?
      <>
        <div className={styles.basket}>
          <BasketHead />
          {orders.map(el => <BasketRow key={el.id} order={el} />)}
          {!orders.length && <p>Loading...</p>}
        </div>
        
        <BasketTotal orders={orders} />
        <Link href="/order" className="btn btn-success">Оформить заказ</Link>
        
      </> : 
      <>
        <div className="alert alert-secondary">Ваша корзина пуста</div>
        <Link href={"/"} className="btn btn-success">Веурнться на главную</Link>
      </>
      }
    </div>
  );
};

export default BasketList;