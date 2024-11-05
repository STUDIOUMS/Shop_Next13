import { CURRENCY } from "@/constants";
import { Order } from "@/types";
import { BasketTotalDiv } from "./BasketStyles";

type BasketTotalProps = {
  orders: Order[];
};

const BasketTotal = (props: BasketTotalProps): JSX.Element => {
  const { orders } = props;
  const total: number = orders.reduce(
    (acum, el) => (acum += Number(el.total)),
    0
  );
  return (
    <BasketTotalDiv>
      Итого: <b>{total}</b> <small>{CURRENCY}</small>
    </BasketTotalDiv>
  );
};

export default BasketTotal;
