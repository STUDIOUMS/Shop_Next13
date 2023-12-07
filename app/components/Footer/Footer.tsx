'use client'

import logo from "@/assets/logo.webp"
import Image from "next/image"
import { navItems } from "@/options/helpers"
import Link from "next/link"
import { CatType } from "@/options/types"
import { styled } from "styled-components"
import Socials from "../Socials"
import SCRegistry from "@/options/registry"

interface IFooter {
  cats: CatType[]
}

// Styles
const FooterBox = styled.footer`
  background: var(--color-extralight);
  padding: var(--gap) 0 calc(var(--gap) * 2);
  ul {
    margin: 0; padding: 0;
    li { list-style: none; }
  }
`
const FooterTitle = styled.div`
  font-family: var(--font2);
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 var(--gap);
`

const Footer: React.FC<IFooter> = ({ cats }) => {
  return (
    <SCRegistry>
      <FooterBox>
        <div className="container">
          <div className="grid grid-4 grid-mb-1">
            <div>
              <div className="header-logo">
                <Image src={logo.src} alt="" width={50} height={50} style={{objectFit: 'contain'}} />
              </div>
              &copy; 2023 site.com
            </div>
            <div>
              <FooterTitle>Меню</FooterTitle>
              <ul>
                {navItems.map(el => <li key={el.id}><Link href={el.path}>{el.title}</Link></li>)}
              </ul>
            </div>
            <div>
              <FooterTitle>Категории</FooterTitle>
              <ul>
                {cats.filter(el => el.parent === null).map(el => (
                  <li key={el.id}><Link href={`/cat/${el.slug}`}>{el.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <FooterTitle>Контакты</FooterTitle>
              <Socials />
              <p>+7 (999) 999-99-99</p>
            </div>
          </div>
        </div>
      </FooterBox>
    </SCRegistry>
  )
}

export default Footer