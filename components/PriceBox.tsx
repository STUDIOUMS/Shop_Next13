import { CURRENCY } from "@/options/settings";
import { styled } from "styled-components";

type PriceSizeType = "large" | "small";

interface IPriceBox {
  price: string;
  oldprice?: string;
  size?: PriceSizeType;
}

// Styles
export const Price = styled.div<{ $size: PriceSizeType }>`
  color: var(--color-text);
  font-size: ${({ $size }) => ($size === "large" ? "24px" : "18px")};
  font-weight: ${({ $size }) => ($size === "large" ? "700" : "500")};
  margin: 0 0 var(--pb);
  small {
    color: var(--color-text2);
    font-size: ${({ $size }) => ($size === "large" ? "14px" : "12px")};
    font-weight: 400;
  }
`;
export const PriceOld = styled.div<{ $size: PriceSizeType }>`
  font-size: ${({ $size }) => ($size === "large" ? "18px" : "14px")};
  color: var(--color-danger);
  display: inline;
  margin-left: var(--pb);
  text-decoration: line-through;
  small {
    color: var(--color-danger);
  }
`;

const PriceBox: React.FC<IPriceBox> = ({ price, oldprice, size = "small" }) => {
  return (
    <Price $size={size}>
      {price} <small>{CURRENCY}</small>
      {oldprice && (
        <PriceOld $size={size}>
          {oldprice} <small>{CURRENCY}</small>
        </PriceOld>
      )}
    </Price>
  );
};

export default PriceBox;
