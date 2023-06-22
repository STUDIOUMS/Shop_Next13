'use client'

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProductType } from '@/options/types'
import Card from '@/app/cat/[subcat]/components/Card/Card'

interface ICarousel {
  list: ProductType[]
  title: string
}

const Carousel: React.FC<ICarousel> = ({ list, title }) => {

  console.log(list.length)
  
  
  if (!list.length) {
    return null
  }

  return (
    <div className="carousel_body">
      <div className="pagetitle">{title}</div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination
        breakpoints={{
          400: { slidesPerView: 2 },
          750: { slidesPerView: 3 },
          1020: { slidesPerView: 4 }
        }}
      >
        {list.map(el => (
          <SwiperSlide key={el.id}>
            <Card el={el} slide />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Carousel