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
  const classGrid = `col-12 col-sm-6 col-md-4 col-xl-3 ${styles.goodGrid}`
  const classList = `col-12 ${styles.goodList}`
  const parentClass = (view === 'list') ? classList : classGrid

  return (
    <div className={parentClass}>
      <div className={styles.good}>
        <div className={styles.goodTop}>
          <div className={styles.goodImage}>
            <Link href={`/product/${el.slug}`}><img src={el.pack[0].img} alt="" /></Link>
          </div>
          <div className={styles.goodDetails}>
            <div className={styles.goodTitle}>
              <Link href={`/product/${el.slug}`}>{el.title}</Link>
              <div className={styles.goodIcons}>
                {el.hit && <span className={`${styles.goodIcon} ${styles.goodHit}`}>hit</span>}
                {el.sale && <span className={`${styles.goodIcon} ${styles.goodSale}`}>{el.sale}</span>}
                {el.new && <span className={`${styles.goodIcon} ${styles.goodNew}`}>new</span>}
              </div>
            </div>
            <div className={styles.goodPrice}>
              {el.pack[0].price} <small>{set_currency}</small>

              {el.pack[0].oldPrice && <div className={styles.goodOldPrice}>
                {el.pack[0].oldPrice} <small>{set_currency}</small>
              </div>}
            </div>
          </div>
        </div>
        <div className={styles.goodBottom}>
          <Link className="btn btn-sm btn-block mb-2 btn-outline-secondary" href={`/product/${el.slug}`}>Другая фасовка</Link>
          <AddCart el={el} img={el.pack[0].img} pack={''} price={el.pack[0].price} />
        </div>
      </div>
    </div>
  )
}

export default Card