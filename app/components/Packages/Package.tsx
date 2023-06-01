import React from 'react'
import styles from './Package.module.scss'

interface IPackage {
  index: number
  title: string
  value: number
  name: number
  handler: (id: number) => void
}

const Package: React.FC<IPackage> = ({ index, name, title, value, handler }) => {
  return (
    <label className={styles.package}>
      <input
        type="radio"
        name={`packname-${name}`}
        value={`pack-${title}`}
        onChange={() => handler(value)}
        defaultChecked={index === 0}
      />
      <span>{title}</span>
    </label>
  )
}

export default Package