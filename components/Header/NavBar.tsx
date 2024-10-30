"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "./constants";
import { Navbox } from "./styles";

const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <Navbox>
      <ul>
        {navItems.map((item) => {
          const activeItem = pathname === item.path;
          const isChild = !!item.children;
          return (
            <li key={item.id}>
              <Link href={item.path}>{item.title}</Link>
              {isChild && (
                <ul>
                  {item.children!.map((child) => (
                    <li key={child.id}>
                      <Link href={child.path}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </Navbox>
  );
};

export default Navbar;
