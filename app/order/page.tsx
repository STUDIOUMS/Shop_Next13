import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "../components/BreadCrumbs"
import OrderCart from "./components/OrderCart"
import OrderForm from "./components/OrderForm"

/* BreadCrumbs */
const crumbs: BreadCrumbsType[] = [
  { name: 'Корзина', slug: `/basket` },
  { name: 'Оформление заказа', slug: `/order` }
]

async function OrderPage() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>Оформление заказа</h1>
      <div className="row">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <OrderForm />
        </div>
        <div className="col-12 col-lg-4 order-1 order-lg-2">
          <OrderCart />
        </div>
      </div>
    </div>
  )
}

export default OrderPage