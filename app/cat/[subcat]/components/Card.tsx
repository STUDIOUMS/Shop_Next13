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
  const classGrid = `col-12 col-md-6 col-lg-4 col-xl-3 ${styles.goodGrid}`
  const classList = `col-12 ${styles.goodList}`
  const parentClass = (view === 'list') ? classList : classGrid

  return (
    <div className={parentClass}>
      <div className={styles.good}>
        <div className={styles.goodTop}>
          <div className={styles.goodImage}>
            <Link href={`/product/${el.slug}`}><img src={el.pack[0].img} alt="" /></Link>
            {el.hit && <span className={styles.goodHit}>hit</span>}
          </div>
          <div className={styles.goodDetails}>
            <div className={styles.goodTitle}>
              <Link href={`/product/${el.slug}`}>{el.title}</Link>
            </div>
            <div className={styles.goodPrice}>{el.pack[0].price} <small>{set_currency}</small></div>
          </div>
        </div>
        <div className={styles.goodBottom}>
          <AddCart el={el} img={el.pack[0].img} pack={''} price={el.pack[0].price} />
        </div>
      </div>
    </div>
  )
}

export default Card