import { useEffect, useRef } from 'react'
import styles from './Range.module.scss'

interface IRange {
  setPriceFrom: (val:  string) => void
  setPriceTo: (val:  string) => void
  from: string
  to: string
  reset?: boolean
}

const Range: React.FC<IRange> = ({ from, to, reset, setPriceFrom, setPriceTo }) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (reset) {
      ref.current!.value = ''
    }
  }, [reset])

  return (
    <div className={styles.rangebox}>
      <input
        type="text"
        className="form-control"
        placeholder="От"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceFrom(e.target.value)}
        defaultValue={from}
        ref={ref}
      />
      <span className={styles.rangeboxDivider}></span>
      <input
        type="text"
        className="form-control"
        placeholder="До"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceTo(e.target.value)}
        defaultValue={to}
        ref={ref}
      />
    </div>
  )
}

export default Range