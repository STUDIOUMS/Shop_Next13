import styles from './Tag.module.scss'

interface ITag {
  type: 'hit' | 'new' | 'sale'
}

const Tag: React.FC<ITag> = ({ type }) => {
  return (
    <>
      {(type === 'hit') && <span className={`${styles.tagIcon} ${styles.tagIconHit}`}>Hit</span>}
      {(type === 'new') && <span className={`${styles.tagIcon} ${styles.tagIconNew}`}>New</span>}
      {(type === 'sale') && <span className={`${styles.tagIcon} ${styles.tagIconSale}`}>Sale</span>}
    </>
  )
}

export default Tag