import { COURIER_PRICE } from "@/constants";
import { useOrderStore } from "@/store/useOrderStore";
import { Delivery } from "@/types";
import { OrderCartWrap } from "./styles";

type OrderCartProps = {
  delivery: Delivery;
};

const OrderCart = (props: OrderCartProps): JSX.Element => {
  const { delivery } = props;
  const { orders } = useOrderStore();

  const deliveryPrice = delivery === "courier" ? COURIER_PRICE : 0;
  const totalPrice =
    orders.reduce((acum, order) => (acum += Number(order.total)), 0) +
    deliveryPrice;

  return (
    <OrderCartWrap>
      {orders.map((el) => (
        <p key={el.id}>
          {el.title} - {el.price} / {el.count} шт. / {el.total}
        </p>
      ))}
      <p>Доставка: {deliveryPrice}</p>
      <p>Итого: {totalPrice}</p>
    </OrderCartWrap>
  );
};

export default OrderCart;
