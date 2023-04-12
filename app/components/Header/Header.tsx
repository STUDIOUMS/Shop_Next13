'use client'

import Link from "next/link"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setOrders } from "../../store/appSlice"
import { AppDispatch } from "../../store/store"
import CatPopup from "./CatPopup"
import Navbar from "./NavBar"
import Search from "../Search/Search"
import SmallCart from "./SmallCart"
import logo from "../../../assets/logo.svg"
import Image from "next/image"
import { set_phone } from "@/options/settings"

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  
  useEffect(() => {
    const storageOrders = localStorage.getItem('orders')
    if (storageOrders) {
      dispatch(setOrders(storageOrders))
    }
  }, [dispatch])

  return (
    <>
      <header className="header">
        <div className="container">
          <Navbar />
          <div className="header-address">Доставка с 8:00 до 23:00 {set_phone}</div>
        </div>
      </header>
      <div className="header-mid">
        <div className="container">
          <Link href="/" className="header-logo">
            <Image src={logo} alt="" width={50} height={50} />
          </Link>
          <CatPopup />
          <Search />
          <SmallCart />
        </div>
      </div>
    </>
  )
}

export default Header