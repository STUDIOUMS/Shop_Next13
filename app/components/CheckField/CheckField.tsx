import { useEffect, useRef } from 'react'
import styles from './CheckField.module.scss'

interface ICheckField {
  name?: string
  title: string
  type: 'checkbox' | 'radio'
  value: string
  handler: (val: any) => void
  handCheck?: boolean
  checked?: boolean
}

const CheckField: React.FC<ICheckField> = ({ handler, handCheck = false, name, title, type = 'checkbox', value, checked }) => {
  const className = (type === 'checkbox') ? styles.formCheck : styles.formRadio
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (handCheck) {
      ref.current!.checked = false
    }
  }, [handCheck])

  console.log(handCheck)

  // checkFunc
  const checkFunc = (e: any) => {
    if (handCheck) {
      handler(e.target.checked)
    } else {
      handler(e.target.value)
    }
  }
  
  return (
    <div className={styles.checkFieldLine}>
      <label className={styles.checkField}>
        <input
          type={type}
          className={className}
          name={name}
          value={value}
          onChange={checkFunc}
          defaultChecked={checked}
          ref={ref}
        />
        {title}
      </label>
    </div>
  )
}

export default CheckField