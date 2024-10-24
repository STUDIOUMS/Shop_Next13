'use client'

import { useEffect, useState } from "react"
import { useAppDispatch } from "@/store/hooks"
import { setOrders } from "@/store/appSlice"
import CatPopup from "../CatPopup/CatPopup"
import Link from "next/link"
import Navbar from "./NavBar"
import Search from "../Search/Search"
import SmallCart from "./SmallCart"
import logo from "@/assets/logo.webp"
import Image from "next/image"
import { CatType } from "@/options/types"
import { styled } from "styled-components"
import FeedbackModal from "../Modals/FeedbackModal"
import Btn from "../../ui/Btn"

// Styles
const HeaderTop = styled.div`
  padding: 8px 0;
`
const HeaderLogo = styled.div`
  margin: 0 30px 0 0;
  img {display: block;}
  @media screen and (max-width: 992px) {
    margin-right: 16px;
  }
`
const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`
const HeaderMiddle = styled.header`
  background: var(--color-white);
  border-bottom: 1px solid var(--color-light);
  border-top: 1px solid var(--color-light);
  padding: 4px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  margin: 0 0 var(--gap);
`

interface IHeader {
  cats: CatType[],
  isError: boolean
}

const Header: React.FC<IHeader> = ({ cats, isError }) => {
  const dispatch = useAppDispatch()
  const [feedBack, setFeedBack] = useState<boolean>(false)
  
  useEffect(() => {
    const storageOrders = localStorage.getItem('orders')
    if (storageOrders) {
      dispatch(setOrders(storageOrders))
    }
  }, [dispatch])

  return (
    <>
      <HeaderTop>
        <HeaderContainer className="container">
          <Navbar />
          <Btn title="Обратная связь" size="small" handler={() => setFeedBack(true)} />
        </HeaderContainer>
      </HeaderTop>

      <HeaderMiddle>
        <HeaderContainer className="container">
          <HeaderLogo>
            <Link href="/">
              <Image src={logo.src} alt="" width={50} height={50} style={{objectFit: 'contain'}} />
            </Link>
          </HeaderLogo>
          <CatPopup cats={cats} isError={isError} />
          <Search />
          <SmallCart />
        </HeaderContainer>
      </HeaderMiddle>

      <FeedbackModal show={feedBack} handler={setFeedBack} />
    </>
  )
}

export default Header