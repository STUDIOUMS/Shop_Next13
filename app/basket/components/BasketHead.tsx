import styles from "./Basket.module.scss"

const BasketHead: React.FC = () => {
  return (
    <div className={styles.basketHead}>
      <div className="row">
        <div className="col-12 col-md-6">Название товара</div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-4">Цена</div>
            <div className="col-4">Кол-во</div>
            <div className="col-4">Стоимость</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketHead