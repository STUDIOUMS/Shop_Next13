import { styled } from "styled-components"
import deleteIcon from "@/assets/close-white.svg"

// Styles
export const BasketItem = styled.div`
  align-items: center;
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  display: grid;
  grid-template-columns: 100px 1fr 120px 120px 120px; 
  grid-column-gap: var(--pb); 
  grid-row-gap: var(--pb); 
  grid-template-areas: "b1 b2 b3 b4 b5";
  margin: 0 0 var(--pb);
  padding: var(--pb);
  position: relative;
  &>div:nth-child(1) { grid-area: b1; }
  &>div:nth-child(2) { grid-area: b2; }
  &>div:nth-child(3) { grid-area: b3; }
  &>div:nth-child(4) { grid-area: b4; }
  &>div:nth-child(5) { grid-area: b5; }
  &.top {
    border: 0;
    color: var(--color-text2);
    margin: 0 0 8px;
    padding-bottom: 0;
    padding-top: 0;
  }
  h3 {
    font-weight: 600;
    margin: 0 0 var(--pb);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 70px 1fr 1fr;
    grid-template-areas:
      "b1 b2 b2 b2"
      ". b3 b4 b5"
    ;
    h3 { margin-right: 44px; }
    &.top { display: none; }
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: 60px 1fr;
    grid-template-areas:
      "b1 b2"
      ". b3"
      ". b4"
      ". b5"
    ;
    h3 { font-size: 18px; }
  }
`
export const BasketItemText = styled.div`
  color: var(--color-text2);
  margin: 0;
  b { color: var(--color-text); }
`
export const Delete = styled.button`
  background: var(--color-danger) url(${deleteIcon.src}) center / 12px no-repeat;
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  height: 24px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 24px;
`
export const MobileTitle = styled.div`
  color: var(--color-text2);
  font-size: 12px;
  line-height: 16px;
  margin: 0 0 6px;
  display: none;
  @media screen and (max-width: 1020px) {
    display: block;
  }
`
export const BasketTotalDiv = styled.div`
  color: var(--color-text2);
  font-size: 22px;
  b { color: var(--color-text); font-size: 32px; }
  margin: 32px 0;
`
