import { url_packages } from '@/options/helpers'
import { featPackType, packType } from '@/options/types'
import React, { useEffect, useState } from 'react'
import Package from './Package'
import styles from './Package.module.scss'

interface IPackages {
  handler: (id: number, name: string) => void
  title?: string
  goodID: number
  packs: featPackType[]
  load: boolean
}

const Packages: React.FC<IPackages> = ({ load, handler, goodID, packs, title = 'Фасовка' }) => {
  if (load) {
    return <p>Loading...</p>
  }
  
  return (
    <div className={styles.packages}>
      <div className={styles.packagesTitle}>{title}:</div>
      <div className={styles.packagesRow}>
        {packs.map((el, index) => (
          <Package key={el.id} index={index} title={el.name} value={el.id} handler={handler} name={goodID} />
        ))}
      </div>
    </div>
  )
}

export default Packages