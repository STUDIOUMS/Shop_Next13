"use client";

import BasketHead from "./BasketHead";
import BasketRow from "./BasketRow";
import BasketTotal from "./BasketTotal";
import { useState } from "react";

const BasketList = () => {
  const [modal, setModal] = useState<boolean>(false);
  const orders = useAppSelector((state) => state.app.orders);
  const dispatch = useAppDispatch();

  // removeAllItems
  const removeAllItems = () => {
    setModal(false);
    dispatch(cleanOrders());
    document.body.classList.remove("overflow");
  };

  return (
    <div className="section">
      {orders.length ? (
        <>
          <Title title="Корзина">
            <Btn
              title="Очистить корзину"
              size="small"
              handler={() => setModal(true)}
            />
          </Title>

          <div>
            <BasketHead />
            {orders.map((el) => (
              <BasketRow key={el.id} order={el} />
            ))}
            {!orders.length && <p>Loading...</p>}
          </div>

          <BasketTotal orders={orders} />

          <div className="text-right">
            <Btn
              title="Оформить заказ"
              color="success"
              to="/order"
              className="mb-expand"
            />
          </div>

          <Modal
            title="Очистить корзину"
            show={modal}
            handler={() => setModal(false)}
          >
            <p>Все товары будут удалены из корзины.</p>
            <div className="grid grid-2">
              <Btn title="Отмена" handler={() => setModal(false)} />
              <Btn title="Очистить" color="danger" handler={removeAllItems} />
            </div>
          </Modal>
        </>
      ) : (
        <>
          <Alert>Ваша корзина пуста</Alert>
          <Btn title="Вернуться на главную" to="/" className="mb-expand" />
        </>
      )}
    </div>
  );
};

export default BasketList;
