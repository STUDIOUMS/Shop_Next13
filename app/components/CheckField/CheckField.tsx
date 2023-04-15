import styles from './CheckField.module.scss'

interface ICheckField {
  name?: string
  title: string
  type: string
  value: string
  handler: (val: boolean) => void
  checked?: boolean
}

const CheckField: React.FC<ICheckField> = ({ handler, name, title, type = 'checkbox', value, checked }) => {
  return (
    <div className={styles.checkFieldLine}>
      <label className={styles.checkField}>
        <input
          type={type}
          className={styles.formCheck}
          name={name}
          value={value}
          onChange={(e: any) => handler(e.target.checked)}
          defaultChecked={checked}
        />
        {title}
      </label>
    </div>
  )
}

export default CheckField