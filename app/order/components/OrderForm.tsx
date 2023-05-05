'use client'

import CheckField from "@/app/components/CheckField/CheckField"
import FormField from "@/app/components/FormField"
import { useForm } from "react-hook-form"
import Link from "next/link"
import styles from "./Order.module.scss"
import { useState } from "react"
import { OrderType } from "@/options/types"
import { url_orders } from "@/options/helpers"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"

type FormValues = {
  name: string
  email: string
  phone: string
  city: string
  street: string
  address: string
  addition: string
}

const errorText: string = 'Обязательное поле'

const OrderForm: React.FC = () => {
  const [delivery, setDelivery] = useState<string>('Курьером')
  const [payment, setPayment] = useState<string>('Наличными курьеру')
  const orderList = useSelector((state: RootState) => state.app.orders)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  
  // onSubmitOrder
  const onSubmitOrder = async (data: any) => {
    const newOrder: OrderType = {
      ...data, delivery, payment, status: 'waiting',
      orderID: `order-${Date.now()}`,
      list: orderList
    }
    // const response = await fetch(`${url_orders}`, {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newOrder)
    // })
    console.log(newOrder)
  }

  return (
    <div className={styles.orderForm}>
      <form onSubmit={handleSubmit(onSubmitOrder)} autoCorrect="false">

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            <h3>Личные данные</h3>
            <div className="row">
              <div className="col-12 col-md-4">
                <FormField
                  place="Ваше ФИО"
                  type="text"
                  func={register("name", {required: errorText, maxLength: 80})}
                  error={errors.name && errors.name?.message}
                />
              </div>
              <div className="col-12 col-md-4">
                <FormField
                  place="E-mail"
                  type="email"
                  func={register("email", {required: errorText, pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Некорректный e-mail'
                  }})}
                  error={errors.email && errors.email?.message}
                />
              </div>
              <div className="col-12 col-md-4">
                <FormField
                  place="Ваш телефон"
                  type="tel"
                  func={register("phone", {required: errorText})}
                  error={errors.phone && errors.phone?.message}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            <h3>Адрес</h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <FormField
                  place="Город"
                  type="text"
                  label="Город"
                  func={register("city", {required: errorText})}
                  error={errors.city && errors.city?.message}
                />
              </div>
              <div className="col-6 col-md-3">
                <FormField
                  place="Улица"
                  type="text"
                  label="Улица"
                  func={register("street", {required: errorText})}
                  error={errors.street && errors.street?.message}
                />
              </div>
              <div className="col-6 col-md-3">
                <FormField
                  place="Дом, Квартира"
                  type="tel"
                  label="Дом, Квартира"
                  func={register("address", {required: errorText})}
                  error={errors.address && errors.address?.message}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`col-12 col-md-6 ${styles.orderFormGrid}`}>
            <div className={styles.orderFormSection}>
              <h3>Доставка</h3>
              <CheckField handler={setDelivery} title="Курьером" type="radio" value="Курьером" name="delivery" checked={true} />
              <CheckField handler={setDelivery} title="Самовывоз" type="radio" value="Самовывоз" name="delivery" />
              <CheckField handler={setDelivery} title="Почтовая служба" type="radio" value="Почтовая служба" name="delivery" />
            </div>
          </div>
          <div className={`col-12 col-md-6 ${styles.orderFormGrid}`}>
            <div className={styles.orderFormSection}>
              <h3>Оплата</h3>
              <CheckField handler={setPayment} title="Наличными курьеру" type="radio" value="Наличными курьеру" name="payment" checked={true} />
              <CheckField handler={setPayment} title="Оплата картой" type="radio" value="Оплата картой" name="payment" />
            </div>
          </div>
        </div>

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            <FormField place="Примечание к заказу" type="area" label="Примечание к заказу" func={register("addition")} />
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