'use client'

import CheckField, { ValueType } from "@/components/CheckField"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { CreatedOrderType, DeliveryType, FaceType, FormOrderValues, PaymentType } from "@/options/types"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import FormInput from "@/ui/FormInput"
import Btn from "@/ui/Btn"
import { ChooseType, OrderFooter, OrderFormWrap, OrderSection, OrderWrap, PayImages } from "./OrderStyles"
import { errorText } from "@/options/settings"
import Alert from "@/ui/Alert"
import ChooseTypeItem from "./ChooseTypeItem"
import visa from "@/assets/visa.svg"
import mastercard from "@/assets/mastercard.svg"
import OrderCart from "./OrderCart"
import OrderSuccess from "./OrderSuccess"
import { cleanOrders } from "@/store/appSlice"
import { useAppDispatch } from "@/store/hooks"


// Courier price
const courierPrice: number = 500


const OrderForm: React.FC = () => {
  const [faceType, setFaceType] = useState<FaceType>('individual')
  const [delivery, setDelivery] = useState<DeliveryType>('pickup')
  const [deliveryPrice, setDeliveryPrice] = useState<number>(0)
  const [payment, setPayment] = useState<PaymentType>('acquiring')
  const orderList = useSelector((state: RootState) => state.app.orders)
  const totalPrice = orderList.reduce((prev, el) => Number(el.total) + prev, 0)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormOrderValues>()
  const dispatch = useAppDispatch()


  useEffect(() => {
    if (faceType === 'individual') setPayment('acquiring')
    if (faceType === 'legal') setPayment('bill')
    if (delivery === 'pickup') setDeliveryPrice(0)
    if (delivery === 'courier') setDeliveryPrice(courierPrice)
  }, [faceType, delivery])


  // TEMP
  const [order, setOrder] = useState<CreatedOrderType>()
  // TEMP
  

  // chooseDelivery / choosePayment
  const chooseDelivery = (check: boolean, val: ValueType<DeliveryType>) => setDelivery(val)
  const choosePayment = (check: boolean, val: ValueType<PaymentType>) => setPayment(val)

  
  // onSubmitOrder
  const onSubmitOrder = async (data: any) => {
    const newOrder: CreatedOrderType = {
      ...data,
      delivery,
      payment,
      status: 'waiting',
      price: totalPrice,
      deliveryPrice,
      total: deliveryPrice + totalPrice,
      list: orderList
    }
    dispatch(cleanOrders())
    setOrder(newOrder)
    reset()
    window.scrollTo(0, 0)
  }
  

  return (
    <div className="section">
      {!order ?
        <OrderWrap className="grid grid-3 grid-tb-1">
          <div>
            <form onSubmit={handleSubmit(onSubmitOrder)} autoCorrect="false">

              <ChooseType>
                <ChooseTypeItem title="Физическое лицо" handler={setFaceType} value="individual" current={faceType} />
                <ChooseTypeItem title="Юридическое лицо" handler={setFaceType} value="legal" current={faceType} />
              </ChooseType>


              <OrderFormWrap className="grid grid-2 grid-mb-1" $address={delivery === 'courier'}>
                <OrderSection className="order-personal">
                  <h3>Личные данные</h3>
                  <div className="grid grid-2 grid-mb-1">
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
                          register("email", {pattern: {
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
                    {faceType === 'legal' &&
                      <>
                        <div>
                          <FormInput
                            placeholder="ИНН организации"
                            expand
                            valid={register("inn", { required: errorText })}
                            error={errors.inn && errors.inn.message}
                          />
                        </div>
                        <div>
                          <FormInput
                            placeholder="Название организации"
                            expand
                            valid={register("company", { required: errorText })}
                            error={errors.company && errors.company.message}
                          />
                        </div>
                      </>
                    }
                  </div>
                </OrderSection>

                
                <OrderSection className="order-deliver">
                  <h3>Доставка</h3>
                  <CheckField handler={chooseDelivery} title="Самовывоз" type="radio" value="pickup" name="delivery" checked={true} />
                  <CheckField handler={chooseDelivery} title={`Курьером (+${courierPrice} руб.)`} type="radio" value="courier" name="delivery" />
                  {delivery === 'pickup' && <Alert color="success">
                    <b>Адрес:</b> г.Тюмень, ул. Коммунистическая, 70, корп. 3, стр. 6<br />
                    <b>Время доставки:</b> Время...
                  </Alert>}
                </OrderSection>


                {delivery === 'courier' && <OrderSection className="order-address">
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
                </OrderSection>}

                
                <OrderSection className="order-payment">
                  <h3>Оплата</h3>
                  {faceType === 'individual' && <>
                    <CheckField
                      handler={choosePayment}
                      title="Оплатить онлайн"
                      type="radio"
                      value="acquiring"
                      name="payment-acquiring"
                      checked={true}
                    />
                    <PayImages>
                      <img src={visa.src} alt="" />
                      <img src={mastercard.src} alt="" />
                    </PayImages>
                  </>}
                  {faceType === 'legal' && 
                    <CheckField
                      handler={choosePayment}
                      title="Оплата по счету с НДС"
                      type="radio"
                      value="bill"
                      name="payment-bill"
                      checked={true}
                    />
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

          <div>
            <OrderCart delivery={deliveryPrice} orders={orderList} total={totalPrice} />
          </div>
          
        </OrderWrap> :
        
        <OrderSuccess number="1283930" order={order} />
      }
    </div>
  )
}

export default OrderForm