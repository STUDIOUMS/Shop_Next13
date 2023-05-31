import AddCart from "@/app/components/AddCart"
import Packages from "@/app/components/Packages/Packages"
import { usePriceImg } from "@/app/components/price.hook"
import { RootState } from "@/app/store/store"
import { set_currency } from "@/options/settings"
import { ProductType } from "@/options/types"
import Link from "next/link"
import { useSelector } from "react-redux"
import styles from './Card.module.scss'

interface ICard {
  el: ProductType
}

const Card: React.FC<ICard> = ({ el }) => {
  const view = useSelector((state: RootState) => state.app.view)
  const classGrid = `col-12 col-sm-6 col-md-4 col-xl-3 ${styles.goodGrid}`
  const classList = `col-12 ${styles.goodList}`
  const parentClass = (view === 'list') ? classList : classGrid

  const { choosePack, img, price, oldprice } = usePriceImg(el.relatedPacks)

  return (
    <div className={parentClass}>
      <div className={styles.good}>
        <div className={styles.goodTop}>
          <div className={styles.goodImage}>
            <Link href={`/product/${el.slug}`}>
              <img src={img} alt="" />
            </Link>
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
              {price} <small>{set_currency}</small>

              {oldprice && <div className={styles.goodOldPrice}>
                {oldprice} <small>{set_currency}</small>
              </div>}
            </div>
            <Packages goodID={el.id} handler={choosePack} packs={el.relatedPacks} />
          </div>
        </div>
        <div className={styles.goodBottom}>
          {/* <AddCart el={el} img={img} pack={currentPack} price={price} /> */}
        </div>
      </div>
    </div>
  )
}

export default Card