import React from 'react'
import styles from './Card.module.scss'

interface IPackage {
  index: number
  name: string
  value: number
  handler: (id: number, name: string) => void
}

const Package: React.FC<IPackage> = ({ index, name, value, handler }) => {
  return (
    <label className={styles.package}>
      <input type="radio" name="packages" value={value} defaultChecked={index === 0} onChange={() => handler(value, name)} />
      <span>{name}</span>
    </label>
  )
}

export default Package