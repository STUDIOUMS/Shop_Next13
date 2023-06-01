import { setOrder } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { BasketType, ProductType } from "@/options/types"
import { useDispatch } from "react-redux"
import styles from "../cat/[subcat]/components/Card.module.scss"

interface IAddCart {
  big?: boolean
  el: ProductType
  pack: string
  img: string
  price: string
}

const AddCart: React.FC<IAddCart> = ({ big, el, img, pack, price }) => {
  const dispatch = useDispatch<AppDispatch>()

  const order: BasketType = {
    id: String(el.id) + '-' + pack,
    title: el.title,
    slug: el.slug,
    art: el.art,
    price,
    total: price,
    img,
    pack
  }

  return (
    <button
      className={`btn ${!big ? "btn-sm" : ""} btn-success ${styles.btnCart}`}
      onClick={() => dispatch(setOrder(order))}
    >
      <span>В корзину</span>
    </button>
  )
}

export default AddCart