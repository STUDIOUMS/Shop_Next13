"use client";

import BasketHead from "./BasketHead";
import BasketRow from "./BasketRow";
import BasketTotal from "./BasketTotal";
import { useState } from "react";
import Section from "@/ui/Section";
import CustomBtn from "@/ui/CustomBtn";
import { useOrderStore } from "@/store/useOrderStore";

const BasketList = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const { orders } = useOrderStore();

  // removeAllItems
  const removeAllItems = () => {
    setModal(false);
  };

  return (
    <>
      {orders.length ? (
        <>
          <div>
            <BasketHead />
            {orders.map((el) => (
              <BasketRow key={el.id} order={el} />
            ))}
            {!orders.length && <p>Loading...</p>}
          </div>

          <BasketTotal orders={orders} />

          <CustomBtn href="/order">Оформить заказ</CustomBtn>
          <CustomBtn variant="outlined" color="secondary">
            Очистить корзину
          </CustomBtn>

          {/* <Modal
            title="Очистить корзину"
            show={modal}
            handler={() => setModal(false)}
          >
            <p>Все товары будут удалены из корзины.</p>
            <div className="grid grid-2">
              <Btn title="Отмена" handler={() => setModal(false)} />
              <Btn title="Очистить" color="danger" handler={removeAllItems} />
            </div>
          </Modal> */}
        </>
      ) : (
        <>
          {/* <Alert>Ваша корзина пуста</Alert> */}
          <CustomBtn variant="outlined" color="secondary">
            Вернуться на главную
          </CustomBtn>
        </>
      )}
    </>
  );
};

export default BasketList;
