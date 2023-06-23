import { setOrder, setToast } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { BasketType, ProductType } from "@/options/types"
import { useDispatch } from "react-redux"
import styles from "../cat/[subcat]/components/Card/Card.module.scss"

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

  // addCartHandler
  const addCartHandler = () => {
    dispatch(setOrder(order))
    dispatch(setToast(`Товар, ${el.title} - ${pack}, добавлен в корзину`))
  }

  return (
    <button
      className={`btn ${!big ? "btn-sm" : ""} btn-success ${styles.btnCart}`}
      onClick={addCartHandler}
    >
      <span>В корзину</span>
    </button>
  )
}

export default AddCart