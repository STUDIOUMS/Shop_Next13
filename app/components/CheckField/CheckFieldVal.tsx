import styles from './CheckField.module.scss'

interface ICheckFieldVal {
  name?: string
  title: string
  type: string
  value: string
  handler: (val: string) => void
  checked?: boolean
}

const CheckFieldVal: React.FC<ICheckFieldVal> = ({ handler, name, title, type = 'checkbox', value, checked }) => {
  return (
    <div className={styles.checkFieldLine}>
      <label className={styles.checkField}>
        <input
          type={type}
          className={styles.formCheck}
          name={name}
          value={value}
          onChange={(e: any) => handler(e.target.value)}
          defaultChecked={checked}
        />
        {title}
      </label>
    </div>
  )
}

export default CheckFieldVal