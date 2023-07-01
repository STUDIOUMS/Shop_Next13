'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setOrders } from "../../store/appSlice"
import { AppDispatch } from "../../store/store"
import CatPopup from "./CatPopup"
import styles from "./Header.module.scss"
import stylesBtn from "./SmallCart/SmallCart.module.scss"
import Navbar from "./NavBar"
import Search from "../Search/Search"
import SmallCart from "./SmallCart"
import logo from "../../../assets/logo.svg"
import Image from "next/image"
import { set_phone } from "@/options/settings"
import { CatType } from "@/options/types"
import FeedbackModal from "../Modals/FeedbackModal"

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
          <div className={styles.headerAdress}>
            Доставка с 8:00 до 23:00 &bull; {set_phone}
            <button className="btn btn-sm btn-outline-success ms-2" onClick={() => setShowModal(true)}>Обратная связь</button>
          </div>
        </div>
      </header>
      <div className={styles.headerMid}>
        <div className={`container ${styles.headerContainer}`}>
          <Link href="/" className={styles.headerLogo}>
            <Image src={logo} alt="" width={50} height={50} />
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