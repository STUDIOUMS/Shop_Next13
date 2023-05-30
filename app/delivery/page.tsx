import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "../components/BreadCrumbs"

const crumbs: BreadCrumbsType[] = [
  { name: "Доставка и оплата", slug: "delivery" }
]

export default function Delivery() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>Доставка и оплата</h1>
    </div>
  )
}
