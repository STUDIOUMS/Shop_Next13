'use client'

import BasketHead from "./BasketHead"
import BasketRow from "./BasketRow"
import BasketTotal from "./BasketTotal"
import Btn from "@/components/UI/Btn"
import Alert from "@/components/UI/Alert"
import { useAppSelector } from "@/store/hooks"

const BasketList = () => {
  const orders = useAppSelector(state => state.app.orders)

  return (
    <div className="section">
      {orders.length ?
      <>
        <div>
          <BasketHead />
          {orders.map(el => <BasketRow key={el.id} order={el} />)}
          {!orders.length && <p>Loading...</p>}
        </div>
        
        <BasketTotal orders={orders} />

        <div className="text-right">
          <Btn title="Оформить заказ" color="success" to="/order" className="mb-expand" />
        </div>
        
      </> : 
      <>
        <Alert>Ваша корзина пуста</Alert>
        <Btn title="Вернуться на главную" to="/" className="mb-expand" />
      </>
      }
    </div>
  );
};

export default BasketList;