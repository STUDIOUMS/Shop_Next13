import { set_currency } from "@/options/settings"
import { BasketType } from "@/options/types"
import { BasketTotalDiv } from "./BasketStyles"

interface IBasketTotal {
  orders: BasketType[]
}

const BasketTotal: React.FC<IBasketTotal> = ({ orders }) => {
  const total: number = orders.reduce((acum, el) => acum += Number(el.total), 0)
  return (
    <BasketTotalDiv>
      Итого: <b>{total}</b> <small>{set_currency}</small>
    </BasketTotalDiv>
  )
}

export default BasketTotal