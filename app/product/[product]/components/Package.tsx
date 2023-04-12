import React from 'react'
import styles from './Package.module.scss'

interface IPackage {
  index: number
  name: string
}

const Package: React.FC<IPackage> = ({ index, name }) => {
  return (
    <label className={styles.package}>
      <input type="radio" name="packages" defaultChecked={index === 0} />
      <span>{name}</span>
    </label>
  )
}

export default Package