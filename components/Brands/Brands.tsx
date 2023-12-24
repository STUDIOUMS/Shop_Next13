'use client'

import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ozon from "@/assets/ozon.svg"
import wildberries from "@/assets/wildberries.webp"
import svetofor from "@/assets/svetofor.webp"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { styled } from "styled-components"

interface IBrands {
  title?: string
}

const list = [
  { id: 1, img: ozon },
  { id: 2, img: wildberries },
  { id: 3, img: svetofor },
  { id: 4, img: ozon },
  { id: 5, img: wildberries },
  { id: 6, img: svetofor },
  { id: 7, img: ozon },
  { id: 8, img: wildberries },
  { id: 9, img: svetofor }
]

const Imgbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  img { display: block; max-width: 140px; max-height: 50px; }
`

const Brands: React.FC<IBrands> = ({ title = 'Бренды' }) => {
  return (
    <div className="carousel_body">
      <div className="pagetitle">{title}</div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
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
          <SwiperSlide key={el.id}>
            <Imgbox>
              <img src={el.img.src} alt="" />
            </Imgbox>
          </SwiperSlide>  
        ))}
      </Swiper>
    </div>
  )
}

export default Brands