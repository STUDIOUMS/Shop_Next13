import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemType = {
  id: number
  title: string
  path: string
}

const navItems: NavItemType[] = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Новости", path: "/news" },
  { id: 3, title: "О компании", path: "/about" },
  { id: 4, title: "Доставка и оплата", path: "/about" },
  { id: 5, title: "Контакты", path: "/contacts" },
]

const Navbar: React.FC = () => {
  const pathname = usePathname()
  
  return (
    <nav className="navmenu">
      <ul>
        {navItems.map(item => {
          const itemClass = pathname === item.path ? "active" : ""
          return <li key={item.id}>
          <Link href={item.path} className={itemClass}>{item.title}</Link>
        </li>
        })}
      </ul>
    </nav>
  );
};

export default Navbar;