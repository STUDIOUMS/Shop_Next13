import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "@/components/BreadCrumbs"
import OrderForm from "./components/OrderForm"

// Metatags
export const metadata = {
  title: 'Оформление заказа',
  description: 'Оформление заказа',
}

/* BreadCrumbs */
const crumbs: BreadCrumbsType[] = [
  { name: 'Корзина', slug: `/basket` },
  { name: 'Оформление заказа', slug: `/order` }
]

function OrderPage() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>Оформление заказа</h1>
      <OrderForm />
    </div>
  )
}

export default OrderPage