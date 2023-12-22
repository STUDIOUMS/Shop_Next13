import { styled } from "styled-components"

export const OrderWrap = styled.div`
  grid-column-gap: var(--gap);
  grid-template-areas: "o1 o1 o2";
  &>div {
    &:nth-child(1) { grid-area: o1; }
    &:nth-child(2) { grid-area: o2; }
  }
  @media screen and (max-width: 1000px) {
    grid-template-column: "1fr";
    grid-template-areas: "o2" "o1";
  }
`
export const OrderFormWrap = styled.div<{ $address: boolean }>`
  grid-template-areas:
    "personal personal"
    "deliver payment"
    ${props => props.$address && `"address address"`}
    "additional additional"
    "footer footer"
  ;
  .order-personal { grid-area: personal; }
  .order-address { grid-area: address; }
  .order-deliver { grid-area: deliver; }
  .order-payment { grid-area: payment; }
  .order-additional { grid-area: additional; }
  .order-footer { grid-area: footer; }
  @media screen and (max-width: 720px) {
    grid-template-areas: none;
    grid-row-gap: var(--pb);
    .order-personal, .order-address, .order-deliver, .order-payment, .order-additional, .order-footer { grid-area: auto; }
  }
`
export const OrderSection = styled.div`
  background: var(--color-extralight);
  border-radius: var(--radius);
  padding: var(--pb);
`
export const OrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    * { width: 100%; }
    *:nth-child(1) { order: 2; }
    *:nth-child(2) { order: 1; margin: 0 0 var(--pb); }
  }
`
export const ChooseType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: var(--pb);
  grid-row-gap: var(--pb);
  margin: 0 0 var(--gap);
`
export const PayImages = styled.div`
  display: flex;
  align-items: center;
  img {
    display: block;
    height: 44px;
    margin: 0 10px 0 0;
  }
`
