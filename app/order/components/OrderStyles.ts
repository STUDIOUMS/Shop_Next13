import { styled } from "styled-components"

export const OrderWrap = styled.div`
  grid-column-gap: var(--gap);
  grid-template-areas: "o1 o1 o1 o2";
  &>div {
    &:nth-child(1) { grid-area: o1; }
    &:nth-child(2) { grid-area: o2; }
  }
  @media screen and (max-width: 1000px) {
    grid-template-areas: none;
    &>div {
      &:nth-child(1) { grid-area: auto; }
      &:nth-child(2) { grid-area: auto; }
    }
  }
`
export const OrderFormWrap = styled.div`
  grid-template-areas:
    "personal personal"
    "address address"
    "deliver payment"
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
`