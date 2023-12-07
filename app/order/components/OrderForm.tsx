'use client'

import CheckField from "@/app/components/CheckField/CheckField"
import { useForm } from "react-hook-form"
import styles from "./Order.module.scss"
import { useState } from "react"
import { OrderType } from "@/options/types"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"
import FormInput from "@/app/components/UI/FormInput"
import Btn from "@/app/components/UI/Btn"

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
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>()

  // chooseDelivery
  const chooseDelivery = (check: boolean, val: string) => {
    setDelivery(val)
  }
  
  // choosePayment
  const choosePayment = (check: boolean, val: string) => {
    setPayment(val)
  }
  
  // onSubmitOrder
  const onSubmitOrder = async (data: any) => {
    const newOrder: OrderType = {
      ...data, delivery, payment, status: 'waiting',
      orderID: `order-${Date.now()}`,
      list: orderList
    }
    console.log(newOrder)
    reset()
  }

  return (
    <div className={styles.orderForm}>
      <form onSubmit={handleSubmit(onSubmitOrder)} autoCorrect="false">

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            <h3>Личные данные</h3>
            <div className="row">
              <div className="col-12 col-md-4">
                {/* <FormField
                  place="Ваше ФИО"
                  type="text"
                  func={register("name", {required: errorText, maxLength: 80})}
                  error={errors.name && errors.name?.message}
                /> */}
              </div>
              <div className="col-12 col-md-4">
                {/* <FormField
                  place="E-mail"
                  type="email"
                  func={register("email", {required: errorText, pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Некорректный e-mail'
                  }})}
                  error={errors.email && errors.email?.message}
                /> */}
              </div>
              <div className="col-12 col-md-4">
                {/* <FormField
                  place="Ваш телефон"
                  type="tel"
                  func={register("phone", {required: errorText})}
                  error={errors.phone && errors.phone?.message}
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            <h3>Адрес</h3>
            <div className="row">
              <div className="col-12 col-md-6">
                {/* <FormField
                  place="Город"
                  type="text"
                  label="Город"
                  func={register("city", {required: errorText})}
                  error={errors.city && errors.city?.message}
                /> */}
              </div>
              <div className="col-6 col-md-3">
                {/* <FormField
                  place="Улица"
                  type="text"
                  label="Улица"
                  func={register("street", {required: errorText})}
                  error={errors.street && errors.street?.message}
                /> */}
              </div>
              <div className="col-6 col-md-3">
                {/* <FormField
                  place="Дом, Квартира"
                  type="tel"
                  label="Дом, Квартира"
                  func={register("address", {required: errorText})}
                  error={errors.address && errors.address?.message}
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`col-12 col-md-6 ${styles.orderFormGrid}`}>
            <div className={styles.orderFormSection}>
              <h3>Доставка</h3>
              <CheckField handler={chooseDelivery} title="Курьером" type="radio" value="Курьером" name="delivery" checked={true} />
              <CheckField handler={chooseDelivery} title="Самовывоз" type="radio" value="Самовывоз" name="delivery" />
              <CheckField handler={chooseDelivery} title="Почтовая служба" type="radio" value="Почтовая служба" name="delivery" />
            </div>
          </div>
          <div className={`col-12 col-md-6 ${styles.orderFormGrid}`}>
            <div className={styles.orderFormSection}>
              <h3>Оплата</h3>
              <CheckField handler={choosePayment} title="Наличными курьеру" type="radio" value="Наличными курьеру" name="payment" checked={true} />
              <CheckField handler={choosePayment} title="Оплата картой" type="radio" value="Оплата картой" name="payment" />
              <CheckField handler={choosePayment} title="Оплата по счету" type="radio" value="Оплата по счету" name="payment" />
            </div>
          </div>
        </div>

        <div className={styles.orderFormGrid}>
          <div className={styles.orderFormSection}>
            {/* <FormInput placeholder="Примечание к заказу" type="area" valid={register("addition")} /> */}
            <FormInput placeholder="Примечание к заказу" expand type="area" handler={() => {}} />
          </div>
        </div>
        
        <div className={styles.orderFormFooter}>
          <Btn to="/basket" title="Вернуться в корзину" />
          <Btn title="Оформить заказ" color="green" />
        </div>
      </form>
    </div>
  )
}

export default OrderForm