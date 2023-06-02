import BreadCrumbs from "../components/BreadCrumbs"
import { BreadCrumbsType } from "@/options/types"
import BasketList from "./components/BasketList"

// Metatags
export const metadata = {
  title: 'Корзина',
  description: 'Корзина',
}

/* BreadCrumbs */
const crumbs: BreadCrumbsType[] = [
  { name: 'Корзина', slug: `/basket` },
]

export default function Basket() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />

      <h1>Корзина</h1>

      <BasketList />
    </div>
  )
}