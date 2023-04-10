import { BreadCrumbsType } from "@/options/types"
import Link from "next/link"

interface IBreadCrumbs {
  list: BreadCrumbsType[]
}

const BreadCrumbs: React.FC<IBreadCrumbs> = ({ list }) => {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link href="/">Главная</Link>
      </li>
      {list.map((el, index, array) => {
        if (index !== (array.length - 1)) {
          return <li className="breadcrumb-item" key={el.slug}>
            <Link href={el.slug}>{el.name}</Link>
          </li>
        } else {
          return <li className="breadcrumb-item" key={el.slug}>
            <span>{el.name}</span>
          </li>
        }
      })}
    </ol>
  )
}

export default BreadCrumbs