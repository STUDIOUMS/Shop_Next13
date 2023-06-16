'use client'

import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Carousel.module.scss'
import { ProductType } from '@/options/types'
import Card from '@/app/cat/[subcat]/components/Card/Card'

interface ICarousel {
  list: ProductType[]
  title: string
  view?: number
}

const Carousel: React.FC<ICarousel> = ({ list, title, view = 4 }) => {
  
  if (!list.length) {
    return null
  }

  

  return (
    <div className={styles.carouselBody}>
      <div className={styles.carouselTitle}>{title}</div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          }
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