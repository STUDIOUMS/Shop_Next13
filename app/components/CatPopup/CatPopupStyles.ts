import { styled } from "styled-components"

// Styles
export const Popup = styled.div`
  background: var(--color-white);
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  margin-top: 10px;
  left: 12px;
  right: 12px;
  position: absolute !important;
  padding: var(--gap);
  z-index: 1100;
  ul {
    margin: 0 0 0 50px; padding: 0;
    li {
      list-style: none; margin: 0 0 10px; font-size: 14px; line-height: 16px;
      position: relative;
      &::before {
        content: ''; display: block; position: absolute; left: -20px; width: 10px;
        background: var(--color-text2); height: 1px; top: 50%;
      }
    }
    li:last-child {margin: 0;}
    li a {
      color: var(--color-text2); text-decoration: none;
      &:hover {color: var(--color-success-hover);}
    }
  }
`
export const Overlay = styled.div`
  background: rgba(0,0,0,0.65);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`
export const Wrap = styled.div<{ $show: boolean }>`
  ${Popup}, ${Overlay} {
    transition: all 200ms ease-in-out;
    opacity: ${props => props.$show ? '1' : '0'};
    visibility: ${props => props.$show ? 'visible' : 'hidden'};
  }
`
export const PopupHeader = styled.div`
  font-family: var(--font2);
  font-weight: 700;
  margin: 0 0 var(--gap);
  font-size: 24px;
  line-height: 28px;
`
export const PopupTitle = styled.div`
  font-family: var(--font2);
  font-weight: 700;
  margin: 0 0 14px;
  font-size: 18px;
  line-height: 20px;
  a { color: inherit; text-decoration: none; display: flex; align-items: center; }
  a:hover { color: var(--color-success-hover); }
  img {
    display: block; margin: 0 10px 0 0; min-width: 40px; max-width: 40px;
    img {display: block;}
  }
`