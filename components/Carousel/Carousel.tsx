"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "@/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ICarousel {
  error: boolean;
  list: Product[];
  title: string;
}

const Carousel: React.FC<ICarousel> = ({ error, list, title }) => {
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
          540: { slidesPerView: 2 },
          750: { slidesPerView: 3 },
          1020: { slidesPerView: 4 },
        }}
      >
        {list.map((el) => (
          <SwiperSlide key={el.id}>
            <Good el={el} slide />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
