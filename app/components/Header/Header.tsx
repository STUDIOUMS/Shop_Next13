'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setOrders } from "../../store/appSlice"
import { AppDispatch } from "../../store/store"
import CatPopup from "../CatPopup/CatPopup"
import styles from "./Header.module.scss"
import Navbar from "./NavBar"
import Search from "../Search/Search"
import SmallCart from "./SmallCart"
import logo from "@/assets/logo.webp"
import Image from "next/image"
import { set_phone } from "@/options/settings"
import { CatType } from "@/options/types"
import FeedbackModal from "../Modals/FeedbackModal"
import Btn from "../UI/Btn"

interface IHeader {
  cats: CatType[]
}

const Header: React.FC<IHeader> = ({ cats }) => {
  const dispatch = useDispatch<AppDispatch>()
  const [showModal, setShowModal] = useState<boolean>(false)
  
  useEffect(() => {
    const storageOrders = localStorage.getItem('orders')
    if (storageOrders) {
      dispatch(setOrders(storageOrders))
    }
  }, [dispatch])

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Navbar />
          <div className={styles.headerAddressBox}>
            Время работы с 8:00 до 23:00 | {set_phone}
          </div>
          <Btn title="Обратная связь" size="small" handler={() => setShowModal(true)} />
        </div>
      </header>
      <div className={styles.headerMid}>
        <div className={`container ${styles.headerContainer}`}>
          <Link href="/" className={styles.headerLogo}>
            <Image src={logo.src} alt="" width={50} height={50} style={{objectFit: 'contain'}} />
          </Link>
          <CatPopup cats={cats} />
          <Search />
          <SmallCart />
        </div>
      </div>
      <FeedbackModal show={showModal} func={() => setShowModal(false)} />
    </>
  )
}

export default Header