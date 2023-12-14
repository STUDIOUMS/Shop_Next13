import { set_currency } from "@/options/settings"
import { styled } from "styled-components"

type PriceSizeType = 'large' | 'small'

interface IPriceBox {
  price: string
  oldprice?: string
  size?: PriceSizeType
}

// Styles
export const Price = styled.div<{ $size: PriceSizeType }>`
  color: var(--color-text);
  font-size: ${({ $size }) => $size === 'large' ? '24px' : '18px'};
  font-weight: ${({ $size }) => $size === 'large' ? '700' : '500'};
  small {
    color: var(--color-text2);
    font-size: ${({ $size }) => $size === 'large' ? '16px' : '14px'};
    font-weight: 400;
  }
`
export const PriceOld = styled.div<{ $size: PriceSizeType }>`
  font-size: ${({ $size }) => $size === 'large' ? '18px' : '14px'};
  color: red;
  text-decoration: line-through;
  display: inline;
  margin-left: 12px;
`

const PriceBox: React.FC<IPriceBox> = ({ price, oldprice, size = 'small' }) => {
  return (
    <Price $size={size}>
      {price} <small>{set_currency}</small>
      {oldprice && <PriceOld $size={size}>{oldprice} <small>{set_currency}</small></PriceOld>}
    </Price>
  )
}

export default PriceBox
