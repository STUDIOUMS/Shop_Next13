import { BasketItem } from "./BasketStyles";

const BasketHead = (): JSX.Element => {
  return (
    <BasketItem className="top">
      <div>Изображение</div>
      <div>Название товара</div>
      <div>Цена</div>
      <div>Кол-во</div>
      <div>Стоимость</div>
    </BasketItem>
  );
};

export default BasketHead;
