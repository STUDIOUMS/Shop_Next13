'use client'

import CheckField from "@/app/components/CheckField/CheckField"
import FormField from "@/app/components/FormField"
import { useForm } from "react-hook-form"
import Link from "next/link"
import styles from "./Order.module.scss"

const OrderForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className={styles.orderForm}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            <h3>Личные данные</h3>
            <div className="row">
              <div className="col-12 col-md-4 ${orderFormGrid">
                <FormField place="Ваше ФИО" type="text" label="Ваше ФИО" />
              </div>
              <div className="col-12 col-md-4">
                <FormField place="E-mail" type="email" label="E-mail" />
              </div>
              <div className="col-12 col-md-4">
                <FormField place="Ваш телефон" type="tel" label="Ваш телефон" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            <h3>Адрес</h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <FormField place="Город" type="text" label="Город" />
              </div>
              <div className="col-6 col-md-3">
                <FormField place="Дом" type="email" label="Дом" />
              </div>
              <div className="col-6 col-md-3">
                <FormField place="Квартира" type="tel" label="Квартира" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`col-12 col-md-6 ${styles.orderFormGrid}`}>
            <div className={styles.orderFormSection}>
              <h3>Доставка</h3>
              <CheckField handler={() => {}} title="Курьером" type="radio" value="courier" name="delivery" />
              <CheckField handler={() => {}} title="Самовывоз" type="radio" value="pickup" name="delivery" />
              <CheckField handler={() => {}} title="Почтовая служба" type="radio" value="post" name="delivery" />
            </div>
          </div>
          <div className={`col-12 col-md-6 ${styles.orderFormGrid}`}>
            <div className={styles.orderFormSection}>
              <h3>Оплата</h3>
              <CheckField handler={() => {}} title="Наличными курьеру" type="radio" value="cash-courier" name="payment" />
              <CheckField handler={() => {}} title="Оплата картой" type="radio" value="credit-card" name="payment" />
            </div>
          </div>
        </div>

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            <FormField place="Примечание к заказу" type="area" label="Примечание к заказу" />
          </div>
        </div>
        
        <div className={styles.orderFormFooter}>
          <Link href="/basket" className={`btn btn-outline-success ${styles.orderFormBtn}`}>Вернуться в корзину</Link>
          <button className={`btn btn-success ${styles.orderFormBtn}`}>Оформить заказ</button>
        </div>
      </form>
    </div>
  )
}

export default OrderForm