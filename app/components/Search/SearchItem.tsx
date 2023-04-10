import { GoodType } from "@/options/types"
import Link from "next/link"
import styles from "./Search.module.scss"

interface ISearchItem {
  el: GoodType
  close: () => void
}

const SearchItem: React.FC<ISearchItem> = ({ el, close }) => {
  
  return (
    <li className={styles.searchboxItem}>
      <Link href={`/product/${el.slug}`} onClick={close}>
        <span className={styles.searchboxItemImg}><img src={el.images[0]} alt="" /></span>
        <span className={styles.searchboxItemTitle}>{el.title}</span>
        <span className="badge bg-warning text-dark">{el.price} руб.</span>
      </Link>
    </li>
  )
}

export default SearchItem