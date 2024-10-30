import { set_currency } from "@/options/settings";
import { CreatedOrderType } from "@/options/types";
import Alert from "@/ui_old/Alert";
import { ModuleBox } from "./OrderStyles";

interface IOrderSuccess {
  number: string;
  order: CreatedOrderType;
}

const OrderSuccess: React.FC<IOrderSuccess> = ({ number, order }) => {
  return (
    <div>
      <Alert align="center" color="success">
        <h3>Спасибо</h3>
        Ваш заказ <b>№{number}</b> успешно оформлен
      </Alert>
      <div className="grid">
        <ModuleBox>
          <h3>Оплачено</h3>
          <p>
            {order.list.length} позиции на сумму: {order.price} {set_currency}
          </p>
          <p>
            Доставка: {order.deliveryPrice} {set_currency}
          </p>
          <p>
            Итого: {order.total} {set_currency}
          </p>
          <p>
            Тип оплаты:{" "}
            {order.payment === "acquiring"
              ? "Эквайринг"
              : "Счет для юридических лиц"}
          </p>
        </ModuleBox>
        <ModuleBox>
          <h3>Получатель</h3>
          <p>ФИО: {order.name}</p>
          <p>Телефон: {order.phone}</p>
          {order.email && <p>E-mail: {order.email}</p>}
          {order.inn && <p>ИНН: {order.inn}</p>}
          {order.company && <p>Название компании: {order.company}</p>}
        </ModuleBox>
        <ModuleBox>
          <h3>Доставка</h3>
          <p>{order.delivery === "courier" ? "Курьером" : "Самовывоз"}</p>
          {order.city && <p>Город: {order.city}</p>}
          {order.street && <p>Улица: {order.street}</p>}
          {order.address && <p>Дом/кв: {order.address}</p>}
          {order.addition && (
            <p>
              Дополнительно:
              <br /> {order.addition}
            </p>
          )}
        </ModuleBox>
      </div>

      <pre>{JSON.stringify(order, null, 2)}</pre>
    </div>
  );
};

export default OrderSuccess;
