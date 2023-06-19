import { navItems } from "@/options/helpers"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import styles from "./Header.module.scss"

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [active, setActive] = useState<boolean>(false)
  
  return (
    <nav className={styles.navmenu}>
      <button className={`btn-nav ${active ? "active": ""}`} onClick={() => setActive(!active)}>
        <span></span>
      </button>
      <ul className={`${styles.navmenuUl} ${active ? styles.opened : ""}`}>
        {navItems.map(item => {
          const itemClass = pathname === item.path ? styles.active : ""
          return <li key={item.id}>
          <Link href={item.path} className={itemClass} onClick={() => setActive(false)}>{item.title}</Link>
        </li>
        })}
      </ul>
    </nav>
  )
}

export default Navbar