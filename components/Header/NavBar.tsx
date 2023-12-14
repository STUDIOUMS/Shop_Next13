'use client'

import { navItems } from "@/options/helpers"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { BtnNav, ChildrenUl, NavA, NavItem, NavList } from "./HeaderStyles"


const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [opened, setOpened] = useState<boolean>(false)
  
  return (
    <nav>
      <BtnNav $active={opened} onClick={() => setOpened(!opened)}>
        <span></span>
      </BtnNav>
      <NavList $show={opened}>
        {navItems.map(item => {
          const activeItem = pathname === item.path
          const isChild = !!item.children
          return <NavItem key={item.id}>
            <NavA href={item.path} $active={activeItem} onClick={() => setOpened(false)}>{item.title}</NavA>
            {isChild &&
              <ChildrenUl>
                {item.children!.map(child => <li key={child.id}><Link href={child.path}>{child.title}</Link></li>)}
              </ChildrenUl>
            }
        </NavItem>
        })}
      </NavList>
    </nav>
  )
}

export default Navbar