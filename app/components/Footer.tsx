'use client'

import logo from "../../assets/logo.svg"
import Image from "next/image"
import { navItems } from "@/options/helpers"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="header-logo">
              <Image src={logo} alt="" width={50} height={50} />
            </div>
            &copy; 2023 site.com
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              {navItems.map(el => <li key={el.id}><Link href={el.path}>{el.title}</Link></li>)}
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <ul>
              {navItems.map(el => <li key={el.id}><Link href={el.path}>{el.title}</Link></li>)}
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer