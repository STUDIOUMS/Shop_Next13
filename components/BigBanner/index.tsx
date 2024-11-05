"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Section from "@/ui/Section";
import { SlideNextButton, SlidePrevButton } from "@/ui/SwiperBtns";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import banner1 from "@/assets/bigbanners/banner1.webp";
import banner2 from "@/assets/bigbanners/banner2.webp";
import banner3 from "@/assets/bigbanners/banner3.webp";
import banner4 from "@/assets/bigbanners/banner4.webp";
import banner5 from "@/assets/bigbanners/banner5.webp";
import banner6 from "@/assets/bigbanners/banner6.webp";
import banner7 from "@/assets/bigbanners/banner7.webp";
import Banner from "../Banner";
import { Box, Stack } from "@mui/material";

const BigBanner = (): JSX.Element => {
  return (
    <Section sx={{ position: "relative" }}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
        }}
        effect="fade"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        <SwiperSlide>
          <Banner src={banner1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner2.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner3.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner4.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner5.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner6.src} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner src={banner7.src} />
        </SwiperSlide>
        {/* <Stack direction="row" justifyContent="center">
          <SlidePrevButton />
          <SlideNextButton />
        </Stack> */}
      </Swiper>
    </Section>
  );
};

export default BigBanner;
