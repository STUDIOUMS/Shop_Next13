'use client'

import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import brand from '../../../assets/manager.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Brands.module.scss'
import Image from "next/image"
import { useRef } from "react"

interface IBrands {
  title?: string
}

const list = [
  { id: 1, img: brand },
  { id: 2, img: brand },
  { id: 3, img: brand },
  { id: 4, img: brand },
  { id: 5, img: brand },
  { id: 6, img: brand },
  { id: 7, img: brand },
  { id: 8, img: brand }
]

const Brands: React.FC<IBrands> = ({ title = 'Бренды' }) => {
  return (
    <div className="carousel_body">
      <div className="pagetitle">{title}</div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination
        breakpoints={{
          400: { slidesPerView: 3 },
          750: { slidesPerView: 4 },
          1020: { slidesPerView: 6 }
        }}
      >
        {list.map(el => (
          <SwiperSlide key={el.id} className={styles.brandsItem}>
            <Image src={el.img} alt="" height={50} />
          </SwiperSlide>  
        ))}
      </Swiper>
    </div>
  )
}

export default Brands