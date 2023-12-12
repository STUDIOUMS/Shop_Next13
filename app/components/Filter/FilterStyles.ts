import { styled } from "styled-components"
import close from "@/assets/close.svg" 
import filter from "@/assets/filter.svg" 

export const FilterBox = styled.div<{ $show: boolean }>`
  position: sticky;
  top: 68px;
  margin: 0 0 var(--gap);
  @media screen and (max-width: 992px) {
    background: var(--color-white); border-radius: 0;
    top: 0; left: 0; bottom: 0; margin: 0;
    display: flex; flex-direction: column; width: 100%;
    position: fixed; z-index: 1000;
    transition: all 200ms ease-in-out;
    opacity: ${props => props.$show ? '1' : '0'};
    visibility: ${props => props.$show ? 'visible' : 'hidden'};
  }
`
export const FilterTitle = styled.div`
  font-family: var(--font2);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 var(--pb);
  position: relative;
  @media screen and (max-width: 992px) {
    background: var(--color-light);
    margin: 0;
    padding: 10px var(--pb);
  }
`
export const FilterSection = styled.div`
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  margin: 0 0 8px;
`
export const FilterName = styled.div`
  background: var(--color-light);
  border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  font-family: var(--font2);
  font-size: 16px;
  font-weight: 700;
  padding: 8px var(--pb);
`
export const FilterSectionBody = styled.div`
  padding: var(--pb);
`
export const FilterBody = styled.div`
  @media screen and (max-width: 992px) {
    flex: 1;
    padding: var(--pb);
  }
`
export const FilterFooter = styled.div`
  grid-column-gap: 8px;
  @media screen and (max-width: 992px) {
    padding: var(--pb);
  }
`
export const FilterShow = styled.button`
  background: #151515 url(${filter.src}) center center / 24px no-repeat;
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  position: fixed;
  left: 10px;
  bottom: 30px;
  z-index: 100;
  -webkit-appearance: none;
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
  }
  span {
    background: var(--color-danger); border-radius: 50%; display: block;
    width: 12px; height: 12px; position: absolute; right: -2px; top: -2px;
  }
`
export const FilterClose = styled.button`
  background: url(${close.src}) center center / 20px no-repeat;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  margin: -17px 0 0;
  padding: 0;
  width: 34px;
  height: 34px;
  position: absolute;
  right: 10px;
  top: 50%;
  -webkit-appearance: none;
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
  }
`