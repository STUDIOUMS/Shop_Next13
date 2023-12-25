'use client'

import logo from "@/assets/logo.webp"
import Image from "next/image"
import { navItems } from "@/options/helpers"
import Link from "next/link"
import { styled } from "styled-components"
import Socials from "./Socials"
import { CatType } from "@/options/types"

// Styles
const FooterBox = styled.footer`
  background: var(--color-extralight);
  padding: var(--gap) 0 calc(var(--gap) * 2);
  ul {
    margin: 0; padding: 0;
    li { list-style: none; }
  }
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`
const FooterTitle = styled.div`
  font-family: var(--font2);
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 var(--gap);
`

interface IFooter {
  cats: CatType[]
  isError: boolean
}

const Footer: React.FC<IFooter> = ({ cats, isError }) => {
  return (
    <FooterBox>
      <div className="container">
        <div className="grid grid-4 grid-mb-1">
          <div>
            <div className="header-logo">
              <Image src={logo.src} alt="" width={50} height={50} style={{objectFit: 'contain'}} />
            </div>
            &copy; 2023 site.com
          </div>
          <div className="mb-hidden">
            <FooterTitle>Меню</FooterTitle>
            <ul>
              {navItems.map(el => <li key={el.id}><Link href={el.path}>{el.title}</Link></li>)}
            </ul>
          </div>
          <div className="mb-hidden">
            <FooterTitle>Категории</FooterTitle>
            <ul>
              {!isError && cats.filter(el => el.parent === null).map(el => (
                <li key={el.id}><Link href={`/cat/${el.slug}`}>{el.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle className="mb-hidden">Контакты</FooterTitle>
            <Socials />
            <p>+7 (999) 999-99-99</p>
          </div>
        </div>
      </div>
    </FooterBox>
  )
}

export default Footer