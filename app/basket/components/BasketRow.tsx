import { changeCountOrder, removeOrder } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { set_currency } from "@/options/settings"
import { OrderType } from "@/options/types"
import Link from "next/link"
import { useDispatch } from "react-redux"

interface IBasketRow {
  index: number
  order: OrderType
}

const BasketRow: React.FC<IBasketRow> = ({ index, order }) => {
  const dispatch = useDispatch<AppDispatch>()
  
  return (
    <tr>
      <th scope="row">{index}</th>
      <td><img src={order.img} alt="" style={{width: '40px'}} /></td>
      <td>
        <Link href={`/catalog/${order.id}`}>{order.title}</Link><br />
        <small>Артикул: {order.art}</small>
      </td>
      <td>{order.price} {set_currency}</td>
      <td>
        <input
          type="number"
          className="form-control"
          defaultValue={order.count}
          min={1}
          style={{width: '70px'}}
          onChange={e => dispatch(changeCountOrder({ count: Number(e.target.value), id: order.id }))}
        />
      </td>
      <td>{order.total} {set_currency}</td>
      <td><button className="btn btn-danger btn-sm" onClick={() => dispatch(removeOrder(order.id))}>x</button></td>
    </tr>
  )
}

export default BasketRow