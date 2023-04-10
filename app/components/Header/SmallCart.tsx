import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

const SmallCart: React.FC = () => {
  const orders = useSelector((state: RootState) => state.app.orders)
  const count = orders.reduce((prev, el) => {
    return el.count + prev
  }, 0)

  return (
    <Link href="/basket" className="btn btn-outline-primary position-relative">
      Cart
      {count > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count}</span>}
    </Link>
  )
}

export default SmallCart