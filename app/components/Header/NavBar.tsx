'use client'

import { navItems } from "@/options/helpers"
import SCRegistry from "@/options/registry"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import styled from "styled-components"

// Styles
const NavList = styled.ul<{ $show: boolean }>`
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
const NavItem = styled.li`
  list-style: none;
  margin: 0;
  font-family: var(--font2);
  font-size: 16px;
`
const NavA = styled(Link)<{ $active: boolean }>`
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

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [opened, setOpened] = useState<boolean>(false)
  
  return (
    <SCRegistry>
      <nav>
        <button className={`btn-nav ${opened ? "active": ""}`} onClick={() => setOpened(!opened)}>
          <span></span>
        </button>
        <NavList $show={opened}>
          {navItems.map(item => {
            const activeItem = pathname === item.path
            return <NavItem key={item.id}>
              <NavA href={item.path} $active={activeItem} onClick={() => setOpened(false)}>{item.title}</NavA>
          </NavItem>
          })}
        </NavList>
      </nav>
    </SCRegistry>
  )
}

export default Navbar