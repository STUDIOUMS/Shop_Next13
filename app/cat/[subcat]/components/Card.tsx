import AddCart from "@/app/components/AddCart"
import { RootState } from "@/app/store/store"
import { set_currency } from "@/options/settings"
import { GoodType } from "@/options/types"
import Link from "next/link"
import { useSelector } from "react-redux"
import styles from './Card.module.scss'

interface ICard {
  el: GoodType
}

const Card: React.FC<ICard> = ({ el }) => {
  const view = useSelector((state: RootState) => state.app.view)
  const classGrid = `col-12 col-md-6 col-lg-4 ${styles.goodGrid}`
  const classList = `col-12 ${styles.goodList}`
  const parentClass = (view === 'list') ? classList : classGrid

  return (
    <div className={parentClass}>
      <div className={styles.good}>
        <div className={styles.goodTop}>
          <div className={styles.goodImage}>
            <Link href={`/product/${el.slug}`}><img src={el.images[0]} alt="" /></Link>
            {el.hit && <span className={styles.goodHit}>hit</span>}
          </div>
          <div className={styles.goodDetails}>
            <div className={styles.goodTitle}>
              <Link href={`/product/${el.slug}`}>{el.title}</Link>
            </div>
            <div className={styles.goodPrice}>{el.price} {set_currency}</div>
          </div>
        </div>
        <div className={styles.goodBottom}>
          <AddCart el={el} />
        </div>
      </div>
    </div>
  )
}

export default Card