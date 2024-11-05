import PriceBox from "@/components/PriceBox";
import { Order } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  BasketItem,
  BasketItemText,
  Delete,
  MobileTitle,
} from "./BasketStyles";
import { useState } from "react";

type BasketRowProps = {
  order: Order;
};

const BasketRow = (props: BasketRowProps): JSX.Element => {
  const { order } = props;
  const [modal, setModal] = useState<boolean>(false);

  // removeItem
  const removeItem = () => {
    setModal(false);
    document.body.classList.remove("overflow");
  };

  return (
    <>
      <BasketItem>
        <div>
          <Link href={`/product/${order.slug}`}>
            {/* <Image src={order.img} alt="" width={70} height={70} /> */}
          </Link>
        </div>
        <div>
          <h3>
            <Link href={`/product/${order.slug}`}>{order.title}</Link>
          </h3>
          <BasketItemText>
            <span>Фасовка:</span> <b>{order.pack}</b>
          </BasketItemText>
          <BasketItemText>
            <span>Код товара:</span> <b>{order.art}</b>
          </BasketItemText>
        </div>
        <div>
          <MobileTitle>Цена</MobileTitle>
          <PriceBox price={order.price} />
        </div>
        <div>
          <MobileTitle>Кол-во</MobileTitle>
          {/* <Counter productId={order.id} val={order.count!} /> */}
        </div>
        <div>
          <MobileTitle>Стоимость</MobileTitle>
          <PriceBox price={order.total} />
        </div>
        <Delete onClick={() => setModal(true)} />
      </BasketItem>

      {/* <Modal
        show={modal}
        handler={() => setModal(false)}
        title="Удаление товара"
      >
        <p>Подтерждаете удаление товара?</p>
        <div className="grid grid-2">
          <Btn title="Отмена" handler={() => setModal(false)} />
          <Btn title="Да, удалить" color="danger" handler={removeItem} />
        </div>
      </Modal> */}
    </>
  );
};

export default BasketRow;
