'use client'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import styles from './BigBanner.module.scss'

const BigBanner: React.FC = () => {
  return (
    <div className={styles.bigbanner}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        autoplay={{
          delay: 3000
        }}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination
        loop
      >
        <SwiperSlide className={styles.bigbannerItem}></SwiperSlide>
        <SwiperSlide className={styles.bigbannerItem}></SwiperSlide>
        <SwiperSlide className={styles.bigbannerItem}></SwiperSlide>
        <SwiperSlide className={styles.bigbannerItem}></SwiperSlide>
        <SwiperSlide className={styles.bigbannerItem}></SwiperSlide>
        <SwiperSlide className={styles.bigbannerItem}></SwiperSlide>
        <SwiperSlide className={styles.bigbannerItem}></SwiperSlide>
        <SwiperSlide className={styles.bigbannerItem}></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BigBanner