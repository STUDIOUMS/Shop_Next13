import { featPackType } from '@/options/types'
import React from 'react'
import Package from './Package'
import styles from './Package.module.scss'

interface IPackages {
  handler: (id: number, name: string) => void
  packages: featPackType[]
  title?: string
}

const Packages: React.FC<IPackages> = ({ handler, packages, title = 'Фасовка' }) => {
  return (
    <div className={styles.packages}>
      <div className={styles.packagesTitle}>{title}:</div>
      <div className={styles.packagesRow}>
        {packages.map((el, index) => (
          <Package key={el.id} index={index} name={el.name} value={el.id} handler={handler} />
        ))}
      </div>
    </div>
  )
}

export default Packages