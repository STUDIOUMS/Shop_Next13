import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import styled from "styled-components"
import cart from "@/assets/cart.svg"
import { useRouter } from "next/navigation"

// Styles
const CartBtn = styled.button`
  background: var(--color-white);
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${cart.src});
  background-size: 18px;
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  cursor: pointer;
  display: block;
  outline: none;
  height: 44px;
  margin: 0;
  padding: 0;
  position: relative;
  width: 44px;
  &:disabled {
    background-color: var(--color-light);
    cursor: default;
    opacity: 0.7;
  }
`
const Badge = styled.div`
  background: var(--color-success);
  border-radius: 18px;
  color: var(--color-white);
  font-size: 12px;
  font-family: var(--font2);
  font-weight: 600;
  height: 18px;
  line-height: 18px;
  min-width: 18px;
  padding: 0 2px;
  right: -8px;
  top: -4px;
  position: absolute;
`

const SmallCart: React.FC = () => {
  const { push } = useRouter()
  const orders = useSelector((state: RootState) => state.app.orders)
  
  const count = orders.reduce((prev, el) => {
    return Number(el.count) + prev
  }, 0)

  return (
    <CartBtn aria-label="Перейти в корзину" disabled={!orders.length} onClick={() => push('/basket')}>
      {count > 0 && <Badge>{count}</Badge>}
    </CartBtn>
  )
}

export default SmallCart