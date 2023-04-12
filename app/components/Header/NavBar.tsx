import { navItems } from "@/options/helpers";
import Link from "next/link"
import { usePathname } from "next/navigation"

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