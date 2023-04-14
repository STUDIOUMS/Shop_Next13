import { navItems } from "@/options/helpers"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [active, setActive] = useState<boolean>(false)
  
  return (
    <nav className="navmenu">
      <button className={`btn-nav ${active ? "active": ""}`} onClick={() => setActive(!active)}>
        <span></span>
      </button>
      <ul className={`navmenu_ul ${active ? "opened": ""}`}>
        {navItems.map(item => {
          const itemClass = pathname === item.path ? "active" : ""
          return <li key={item.id}>
          <Link href={item.path} className={itemClass}>{item.title}</Link>
        </li>
        })}
      </ul>
    </nav>
  )
}

export default Navbar