import { CatType } from '@/options/types'
import Link from 'next/link'
import styles from './SubCats.module.scss'

interface ISubCats {
  list: CatType[]
}

const SubCats: React.FC<ISubCats> = ({ list }) => {
  return (
    <div className={styles.subcats}>
      <div className="row">
        {list.map(el => (
          <div key={el.id} className="col-12 col-sm-6 col-md-4">
            <Link href={`/cat/${el.slug}`} className={styles.subcatsItem}>
              <img src={el.img} alt="" />
              <span>{el.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubCats