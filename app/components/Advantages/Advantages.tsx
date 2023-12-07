import styles from './Advantages.module.scss'
import truck from './../../../assets/truck.svg'
import warehouse from './../../../assets/warehouse.svg'
import manager from './../../../assets/manager.svg'
import Image from 'next/image'
import styled from 'styled-components'

interface IAdvantages {
  title?: string
}

// Styles

const Advantages = ({ title = 'Преимущества' }) => {
  return (
    <div className={styles.advantages}>
      <div className="pagetitle">{title}</div>
      <div className="grid grid-3">
        <div className={styles.advantageGrid}>
          <div className={styles.advantage}>
            <Image src={truck} alt="" height={50} />
            <div className={styles.advantageTitle}>Бесплатная доставка</div>
            до вашего склада или терминала ТК
          </div>
        </div>
        <div className={styles.advantageGrid}>
          <div className={styles.advantage}>
            <Image src={warehouse} alt="" height={50} />
            <div className={styles.advantageTitle}>В наличии на складе</div>
            весь ассортимент продукции серии &ldquo;Ника&rdquo;
          </div>
        </div>
        <div className={styles.advantageGrid}>
          <div className={styles.advantage}>
            <Image src={manager} alt="" height={50} />
            <div className={styles.advantageTitle}>Выделенный менеджер</div>
            Помощь в выборе средств для конкретного предприятия
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages