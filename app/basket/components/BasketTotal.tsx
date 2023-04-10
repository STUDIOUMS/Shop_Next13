import { set_currency } from "@/options/settings"
import { OrderType } from "@/options/types"
import { useEffect } from "react"

interface IBasketTotal {
  orders: OrderType[]
}

const BasketTotal: React.FC<IBasketTotal> = ({ orders }) => {
  const total: number = orders.reduce((acum, el) => acum += el.total, 0)
  
  return (
    <div>
      <h3>Total price: {total} {set_currency}</h3>
    </div>
  )
}

export default BasketTotal