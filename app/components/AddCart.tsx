import { setOrder } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { GoodType, OrderType } from "@/options/types"
import { useDispatch } from "react-redux"
import styles from "../cat/[subcat]/components/Card.module.scss"

interface IAddCart {
  el: GoodType
}

const AddCart: React.FC<IAddCart> = ({ el }) => {
  const dispatch = useDispatch<AppDispatch>()
  const order: OrderType = {
    id: el.id,
    title: el.title,
    price: el.price,
    slug: el.slug,
    img: el.images[0],
    art: el.art,
    total: el.price
  }

  return (
    <button className={`btn btn-success btn-sm ${styles.btnCart}`} onClick={() => dispatch(setOrder(order))}>
      <span>В корзину</span>
    </button>
  )
}

export default AddCart