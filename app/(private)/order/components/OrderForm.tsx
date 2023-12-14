'use client'

import CheckField from "@/components/CheckField/CheckField"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { DeliveryType, OrderType, PaymentType } from "@/options/types"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import FormInput from "@/ui/FormInput"
import Btn from "@/ui/Btn"
import { OrderFooter, OrderFormWrap, OrderSection } from "./OrderStyles"
import { errorText } from "@/options/settings"
import Alert from "@/ui/Alert"
import FormLine from "@/ui/FormLine"

type FormValues = {
  name: string
  email: string
  phone: string
  city: string
  street: string
  address: string
  addition: string
  inn?: string
  company?: string
}

const OrderForm: React.FC = () => {
  const [delivery, setDelivery] = useState<DeliveryType | string>('courier')
  const [payment, setPayment] = useState<PaymentType | string>('acquiring')
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
    <div>
      <form onSubmit={handleSubmit(onSubmitOrder)} autoCorrect="false">

        <OrderFormWrap className="grid grid-2 grid-mb-1">
          <OrderSection className="order-personal">
            <h3>Личные данные</h3>
            <div className="grid grid-3 grid-mb-1">
              <div>
                <FormInput
                  placeholder="Ваше ФИО"
                  expand
                  valid={register("name", { required: errorText })}
                  error={errors.name && errors.name?.message}
                />
              </div>
              <div>
                <FormInput
                  type="email"
                  placeholder="E-mail"
                  expand
                  valid={
                    register("email", {required: errorText, pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Некорректный e-mail'
                    }})
                  }
                  error={errors.email && errors.email?.message}
                />
              </div>
              <div>
                <FormInput
                  type="tel"
                  placeholder="Ваш телефон"
                  expand
                  valid={register("phone", { required: errorText })}
                  error={errors.phone && errors.phone?.message}
                />
              </div>
            </div>
          </OrderSection>
          
          <OrderSection className="order-address">
            <h3>Адрес</h3>
            <div className="grid grid-3 grid-mb-1">
              <div>
                <FormInput
                  placeholder="Город"
                  expand
                  valid={register("city", { required: errorText })}
                  error={errors.city && errors.city?.message}
                />
              </div>
              <div>
                <FormInput
                  placeholder="Улица"
                  expand
                  valid={register("street", { required: errorText })}
                  error={errors.street && errors.street?.message}
                />
              </div>
              <div>
                <FormInput
                  placeholder="Дом, Квартира"
                  expand
                  valid={register("address", { required: errorText })}
                  error={errors.address && errors.address?.message}
                />
              </div>
            </div>
          </OrderSection>
        
          <OrderSection className="order-deliver">
            <h3>Доставка</h3>
            <CheckField handler={chooseDelivery} title="Курьером" type="radio" value="courier" name="delivery" checked={true} />
            <CheckField handler={chooseDelivery} title="Самовывоз" type="radio" value="pickup" name="delivery" />
            {delivery === 'pickup' && <Alert color="success">
              <b>Адрес:</b> г.Тюмень, ул. Коммунистическая, 70, корп. 3, стр. 6<br />
              <b>Время доставки:</b> Время...
            </Alert>}
          </OrderSection>
          
          <OrderSection className="order-payment">
            <h3>Оплата</h3>
            <CheckField handler={choosePayment} title="Оплатить онлайн" type="radio" value="acquiring" name="payment" checked={true} />
            <CheckField handler={choosePayment} title="Оплата по счету" type="radio" value="bill" name="payment" />

            {payment === 'bill' &&
              <div className="pt-2">
                <FormLine>
                  <FormInput
                    placeholder="ИНН"
                    expand
                    valid={register("inn", { required: errorText })}
                    error={errors.inn && errors.inn.message}
                  />
                </FormLine>
                <FormLine>
                  <FormInput
                    placeholder="Название организации"
                    expand
                    valid={register("company", { required: errorText })}
                    error={errors.company && errors.company.message}
                  />
                </FormLine>
              </div>
            }
          </OrderSection>

          <OrderSection className="order-additional">
            <FormInput
              placeholder="Примечание к заказу"
              expand
              type="area"
              valid={register("addition")}
            />
          </OrderSection>
          
          <OrderFooter className="order-footer">
            <Btn to="/basket" title="Вернуться в корзину" />
            <Btn title="Оформить заказ" color="success" type="submit" />
          </OrderFooter>
        </OrderFormWrap>
      </form>
    </div>
  )
}

export default OrderForm