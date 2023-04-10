import FormField from "@/app/components/FormField"


const OrderForm: React.FC = () => {
  return (
    <div>
      <FormField place="Ваше ФИО" type="text" label="Ваше ФИО" />
      <FormField place="E-mail" type="email" label="E-mail" />
      <FormField place="Ваш телефон" type="tel" label="Ваш телефон" />
      <FormField place="Примечание к заказу" type="area" label="Примечание к заказу" />
      <div className="mt-4">
        <button className="btn btn-primary">Оформить</button>
      </div>
    </div>
  )
}

export default OrderForm