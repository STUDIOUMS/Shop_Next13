import { ProductType } from "@/options/types"
import Link from "next/link"
import styles from "./Search.module.scss"

interface ISearchItem {
  el: ProductType
  close: () => void
}

const SearchItem: React.FC<ISearchItem> = ({ el, close }) => {
  
  return (
    <li className={styles.searchboxItem}>
      <Link href={`/product/${el.slug}`} onClick={close}>
        <span className={styles.searchboxItemImg}><img src={el.relatedPacks[0].img} alt="" /></span>
        <span className={styles.searchboxItemTitle}>{el.title}</span>
        <span className="badge bg-warning text-dark">{el.relatedPacks[0].price} руб.</span>
      </Link>
    </li>
  )
}

export default SearchItem