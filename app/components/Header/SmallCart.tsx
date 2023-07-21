import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"
import styles from "./SmallCart.module.scss"

const SmallCart: React.FC = () => {
  const orders = useSelector((state: RootState) => state.app.orders)
  const count = orders.reduce((prev, el) => {
    return Number(el.count) + prev
  }, 0)

  return (
    <>
    {orders.length ?
      <Link href="/basket" className={`btn ${styles.btnCart}`}>
        {count > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count}</span>}
      </Link> :
      <span className={`btn ${styles.btnCart} ${styles.btnCartDisabled}`}></span>
    }
    </>
  )
}

export default SmallCart