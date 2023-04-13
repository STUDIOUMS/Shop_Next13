import React from 'react'
import styles from './Package.module.scss'

interface IPackage {
  index: number
  name: string
  value: number
  handler: (id: number) => void
}

const Package: React.FC<IPackage> = ({ index, name, value, handler }) => {
  return (
    <label className={styles.package}>
      <input type="radio" name="packages" value={value} defaultChecked={index === 0} onChange={() => handler(value)} />
      <span>{name}</span>
    </label>
  )
}

export default Package