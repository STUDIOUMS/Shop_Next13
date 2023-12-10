import { setOrder, setToast } from "@/app/store/appSlice"
import { BasketType, ProductType } from "@/options/types"
import { useAppDispatch } from "../store/hooks"
import Btn from "./UI/Btn"

interface IAddCart {
  big?: boolean
  el: ProductType
  pack: string
  img: string
  price: string
}

const AddCart: React.FC<IAddCart> = ({ big, el, img, pack, price }) => {
  const dispatch = useAppDispatch()

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
    <Btn
      title="В корзину"
      color="success"
      handler={addCartHandler}
    />
  )
}

export default AddCart