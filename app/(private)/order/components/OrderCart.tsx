"use client";

import { CURRENCY } from "@/options/settings";
import { styled } from "styled-components";
import OrderCartItem from "./OrderCartItem";
import { OrderType } from "@/options/types";

interface IOrderCart {
  delivery: number;
  orders: OrderType[];
  total: number;
}

// Styles
const OrderCartBox = styled.div`
  border: 1px solid var(--color-light);
  border-radius: 8px;
  padding: 12px;
  position: sticky;
  top: 70px;
  margin: 0 0 var(--pb);
`;
const OrderCartTotal = styled.div`
  color: var(--color-text2);
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  b {
    color: var(--color-text);
  }
`;
const OrderCartLine = styled.div<{ $big?: boolean }>`
  ${(props) =>
    props.$big &&
    `
    border-top: 1px solid var(--color-light);
    padding-top: 6px;
  `}
  margin: 0 0 6px;
  b {
    font-size: ${(props) => (props.$big ? "20px" : "16px")};
  }
`;

const OrderCart: React.FC<IOrderCart> = ({ delivery, orders, total }) => {
  return (
    <OrderCartBox>
      {orders.map((el) => (
        <OrderCartItem key={el.id} el={el} />
      ))}
      <OrderCartTotal>
        <OrderCartLine>
          Товары: <b>{total}</b> <small>{CURRENCY}</small>
        </OrderCartLine>
        <OrderCartLine>
          Доставка: <b>{delivery}</b> <small>{CURRENCY}</small>
        </OrderCartLine>
        <OrderCartLine $big={true}>
          Итого: <b>{total + delivery}</b> <small>{CURRENCY}</small>
        </OrderCartLine>
      </OrderCartTotal>
    </OrderCartBox>
  );
};

export default OrderCart;
