import Link from "next/link"
import { styled } from "styled-components"

// Styles
export const NavList = styled.ul<{ $show: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 992px) {
    background: var(--color-white);
    border-radius: var(--radius);
    box-shadow: 0 2px 8px rgba(0,0,0,0.55);
    display: block;
    left: 10px;
    position: absolute;
    margin-top: 10px;
    padding: var(--pb);
    z-index: 1100;
    opacity: ${({ $show }) => $show ? '1' : '0'};
    visibility: ${({ $show }) => $show ? 'visisble' : 'hidden'};
    transition: all 200ms ease-in-out;
  }
`
export const ChildrenUl = styled.ul`
  background: var(--color-white);
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  margin: 0;
  padding: var(--gap);
  min-width: 200px;
  position: absolute;
  transition: all 200ms ease-in-out;
  opacity: 0;
  visibility: hidden;
  z-index: 1100;
  li {
    list-style: none;
    margin: 0 0 8px;
    &:last-child { margin: 0; }
  }
  @media screen and (max-width: 992px) {
    background: 0;
    border-radius: 0;
    box-shadow: none;
    min-width: none;
    padding: 8px 0 8px var(--gap);
    position: relative;
    transition: none;
    opacity: 1;
    visibility: visible;
  }
`
export const NavItem = styled.li`
  list-style: none;
  margin: 0;
  font-family: var(--font2);
  font-size: 16px;
  position: relative;
  &:hover ${ChildrenUl} {
    opacity: 1;
    visibility: visible;
  }
`
export const NavA = styled(Link)<{ $active: boolean }>`
  background: var(--color-${(props) => props.$active ? 'light' : 'white'});
  border-radius: var(--radius);
  color: var(--color-text);
  display: block;
  text-decoration: none;
  padding: 6px 12px;
  &:hover {
    color: var(--color-text);
    text-decoration: none;
  }
`
export const BtnNav = styled.button<{ $active: boolean }>`
  background: 0;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: none;
  margin: 0;
  padding: 0;
  width: 30px;
  height: 34px;
  outline: none;
  appearance: none;
  position: relative;
  span::after, span::before { content: ''; display: block; }
  span, span::after, span::before {
    background: var(--color-text);
    border-radius: 3px;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 200ms ease-in-out;
  }
  span {
    background: ${({ $active }) => $active ? '0' : 'var(--color-text)'};
    margin-top: -1px;
    top: 50%;
    &::before {
      top: ${({ $active }) => $active ? '0' : '-8px'};
      ${({ $active }) => $active && 'transform: rotate(45deg);'}
    }
    &::after {
      bottom: ${({ $active }) => $active ? '0' : '-8px'};
      ${({ $active }) => $active && 'transform: rotate(-45deg);'}
    }
  }
  @media screen and (max-width: 992px) {
    display: block;
  }
`