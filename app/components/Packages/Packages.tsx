import { url_packages } from '@/options/helpers'
import { featPackType, packType } from '@/options/types'
import React, { useEffect, useState } from 'react'
import Package from './Package'
import styles from './Package.module.scss'

interface IPackages {
  handler: (id: number, name: string) => void
  title?: string
  goodID: number
  packs: packType[]
}

const Packages: React.FC<IPackages> = ({ handler, goodID, packs, title = 'Фасовка' }) => {
  const [packages, setPackages] = useState<featPackType[]>([])

  // packIDs
  const packIDs: string = packs.map(el => `id=${el.packID}`).join('&')

  // Getting packages
  useEffect(() => {
    fetch(`${url_packages}?${packIDs}`)
      .then(response => response.json())
      .then(data => setPackages(data))
  }, [])

  return (
    <div className={styles.packages}>
      <div className={styles.packagesTitle}>{title}:</div>
      <div className={styles.packagesRow}>
        {packages.map((el, index) => (
          <Package key={el.id} index={index} title={el.name} value={el.id} handler={handler} name={goodID} />
        ))}
      </div>
    </div>
  )
}

export default Packages