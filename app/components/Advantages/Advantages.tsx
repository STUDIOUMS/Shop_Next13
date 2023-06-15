import styles from './Advantages.module.scss'
import truck from './../../../assets/truck.svg'
import warehouse from './../../../assets/warehouse.svg'
import manager from './../../../assets/manager.svg'
import Image from 'next/image'

interface IAdvantages {
  title?: string
}

const Advantages = ({ title = 'Преимущества' }) => {

  console.log(truck)
  
  return (
    <div className={styles.advantages}>
      <div className="pagetitle">{title}</div>
      <div className="row">
        <div className={`col-12 col-md-4 ${styles.advantageGrid}`}>
          <div className={styles.advantage}>
            <Image src={truck} alt="" height={50} />
            <div className={styles.advantageTitle}>Бесплатная доставка</div>
            до вашего склада или терминала ТК
          </div>
        </div>
        <div className={`col-12 col-md-4 ${styles.advantageGrid}`}>
          <div className={styles.advantage}>
            <Image src={warehouse} alt="" height={50} />
            <div className={styles.advantageTitle}>В наличии на складе</div>
            весь ассортимент продукции серии "Ника"
          </div>
        </div>
        <div className={`col-12 col-md-4 ${styles.advantageGrid}`}>
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