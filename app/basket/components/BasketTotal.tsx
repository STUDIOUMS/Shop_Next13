import { set_currency } from "@/options/settings"
import { BasketType } from "@/options/types"

interface IBasketTotal {
  orders: BasketType[]
}

const BasketTotal: React.FC<IBasketTotal> = ({ orders }) => {
  const total: number = orders.reduce((acum, el) => acum += Number(el.total), 0)
  
  return (
    <div>
      Итого: <b>{total}</b> <small>{set_currency}</small>
    </div>
  )
}

export default BasketTotal