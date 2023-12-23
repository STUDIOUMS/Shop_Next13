import { CreatedOrderType } from "@/options/types"
import Alert from "@/ui/Alert"

interface IOrderSuccess {
  number: string
  order: CreatedOrderType
}

const OrderSuccess: React.FC<IOrderSuccess> = ({ number, order }) => {
  return (
    <div>
      <Alert color="success">
        <h3>Спасибо</h3>
        Ваш заказ <b>№{number}</b> успешно оформлен
      </Alert>
      <pre>
        {JSON.stringify(order, null, 2)}
      </pre>
    </div>
  )
}

export default OrderSuccess
