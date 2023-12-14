import { RelatedPacksType } from '@/options/types'
import Package from './Package'
import styles from './Package.module.scss'

interface IPackages {
  handler: (id: number, name: string) => void
  title?: string
  packs: RelatedPacksType[]
  goodID: number
}

const Packages: React.FC<IPackages> = ({ goodID, handler, packs, title = 'Фасовка' }) => {
  return (
    <div className={styles.packages}>
      <div className={styles.packagesTitle}>{title}:</div>
      <div className={styles.packagesRow}>
        {packs.map((el, index) => (
          <Package
            key={el.id}
            index={index}
            title={el.pack.name}
            value={el.id}
            handler={handler}
            name={goodID}
          />
        ))}
      </div>
    </div>
  )
}

export default Packages