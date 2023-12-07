import { useEffect, useRef } from 'react'
import FormInput from '../UI/FormInput'
import styles from './Range.module.scss'

interface IRange {
  handlerFrom: (val:  string) => void
  handlerTo: (val:  string) => void
  from: string
  to: string
  reset?: boolean
}

const Range: React.FC<IRange> = ({ from, to, reset, handlerFrom, handlerTo }) => {
  const ref = useRef<HTMLInputElement>(null)
  const ref2 = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (reset) {
      ref.current!.value = ''
      ref2.current!.value = ''
    }
  }, [reset])

  return (
    <div className={styles.rangebox}>
      <FormInput handler={handlerFrom} placeholder="От" expand defVal={from} />
      <span className={styles.rangeboxDivider}></span>
      <FormInput handler={handlerTo} placeholder="До" expand defVal={to} />
      {/* <input
        type="text"
        className="form-control"
        placeholder="От"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlerFrom(e.target.value)}
        defaultValue={from}
        ref={ref}
      />
      <span className={styles.rangeboxDivider}></span>
      <input
        type="text"
        className="form-control"
        placeholder="До"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlerTo(e.target.value)}
        defaultValue={to}
        ref={ref2}
      /> */}
    </div>
  )
}

export default Range