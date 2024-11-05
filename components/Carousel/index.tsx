"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "@/ui/Section";
import { Product } from "@/types";
import Good from "../Good";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CarouselProps = {
  list: Product[];
  title: string;
};

const Carousel = (props: CarouselProps): JSX.Element => {
  const { list, title } = props;

  return (
    <Section title={title}>
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
    </Section>
  );
};

export default Carousel;
