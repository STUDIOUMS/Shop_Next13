import { setOrder } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { GoodType, OrderType } from "@/options/types"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styles from "../cat/[subcat]/components/Card.module.scss"

interface IAddCart {
  el: GoodType
  inBasket: boolean
}

const AddCart: React.FC<IAddCart> = ({ el, inBasket }) => {
  const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState<string>('В корзину')
  const [classOf, setClassOf] = useState<string>('btn btn-sm btn-success')
  const [added, setAdded] = useState<string>('')

  useEffect(() => {
    if (inBasket) {
      setName('В корзине')
      setClassOf('btn btn-sm btn-secondary')
      setAdded(` ${styles.btnCartIn}`)
    }
  }, [inBasket])

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
    <button
      className={classOf + ' ' + styles.btnCart + added}
      onClick={() => dispatch(setOrder(order))}
    >
      <span>{name}</span>
    </button>
  )
}

export default AddCart