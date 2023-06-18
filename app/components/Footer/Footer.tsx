'use client'

import logo from "../../../assets/logo.svg"
import Image from "next/image"
import { navItems } from "@/options/helpers"
import Link from "next/link"
import styles from "./Footer.module.scss"
import { CatType } from "@/options/types"

interface IFooter {
  cats: CatType[]
}

const Footer: React.FC<IFooter> = ({ cats }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="header-logo">
              <Image src={logo} alt="" width={50} height={50} />
            </div>
            &copy; 2023 site.com
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.footerTitle}>Меню</div>
            <ul>
              {navItems.map(el => <li key={el.id}><Link href={el.path}>{el.title}</Link></li>)}
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.footerTitle}>Категории</div>
            <ul>
              {cats.filter(el => el.parent === null).map(el => (
                <li key={el.id}><Link href={`/cat/${el.slug}`}>{el.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.footerTitle}>Социальные сети</div>
            <div className={styles.socials}>
              <a href="/" className={`${styles.socialsItem} ${styles.socialsItemTwitter}`}></a>
              <a href="/" className={`${styles.socialsItem} ${styles.socialsItemInstagram}`}></a>
              <a href="/" className={`${styles.socialsItem} ${styles.socialsItemFacebook}`}></a>
            </div>
            <p>+7 (999) 999-99-99</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer