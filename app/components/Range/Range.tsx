import styles from './Range.module.scss'

interface IRange {
  setPriceFrom: (val:  string) => void
  setPriceTo: (val:  string) => void
  from: string
  to: string
}

const Range: React.FC<IRange> = ({ from, to, setPriceFrom, setPriceTo }) => {
  return (
    <div className={styles.rangebox}>
      <input
        type="text"
        className="form-control"
        placeholder="От"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceFrom(e.target.value)}
        defaultValue={from}
      />
      <span className={styles.rangeboxDivider}></span>
      <input
        type="text"
        className="form-control"
        placeholder="До"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceTo(e.target.value)}
        defaultValue={to}
      />
    </div>
  )
}

export default Range