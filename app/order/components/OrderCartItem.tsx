import { set_currency } from "@/options/settings"
import { BasketType } from "@/options/types"
import { styled } from "styled-components"

interface IOrderCartItem {
  el: BasketType
}

// Styles
const Item = styled.div`
  background: var(--color-light);
  border-radius: 4px;
  display: flex;
  margin: 0 0 8px;
  padding: 12px;
  &:last-child {margin: 0;}
`
const ItemImg = styled.div`
  min-width: 50px;
  max-width: 50px;
  margin: 0 12px 0 0;
  img {display: block;}
`
const ItemText = styled.div`
  flex: 1; font-size: 13px; line-height: 14px; color: var(--color-text2);
  p {margin: 0 0 2px;}
  p:last-child {margin: 0;}
  span {color: var(--color-text); font-weight: 500;}
`
const ItemTitle = styled.div`
  color: var(--color-text);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  margin: 0 0 8px;
`

const OrderCartItem: React.FC<IOrderCartItem> = ({ el }) => {

  return (
    <Item>
      <ItemImg>
        <img src={el.img} alt="" />
      </ItemImg>
      <ItemText>
        <ItemTitle>{el.title}</ItemTitle>
        <p>Код товара: <span>{el.art}</span></p>
        <p>Тара: <span>{el.pack}</span></p>
        <p>Кол-во: <span>{el.count} - {el.total} {set_currency}</span></p>
      </ItemText>
    </Item>
  )
}

export default OrderCartItem