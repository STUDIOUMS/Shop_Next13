import Advantages from "@/components/Advantages/Advantages";
import Banner from "@/components/Banner";
import BigBanner from "@/components/BigBanner/BigBanner";
import Brands from "@/components/Brands/Brands";
import Section from "@/ui/Section";
import { Grid2 } from "@mui/material";
import banner4 from "../assets/bigbanners/banner3.webp";
import banner5 from "../assets/bigbanners/banner5.webp";
import banner7 from "../assets/bigbanners/banner7.webp";

// Metatags
export const metadata = {
  title: "Интернет-магазин моющих средств",
  description: "Главная",
};

export default async function Home() {
  return (
    <div>
      <BigBanner />

      {/* <Carousel title="Новинки" list={novelties.results!} error={!novelties.results} /> */}

      <Section>
        <Grid2 container spacing={6}>
          <Grid2 size={12}>
            <Banner src={banner4.src} />
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Banner src={banner5.src} />
          </Grid2>
          <Grid2 size={{ lg: 6, xs: 12 }}>
            <Banner src={banner7.src} />
          </Grid2>
        </Grid2>
      </Section>

      {/* <Carousel title="Скидки" list={sales.results!} error={!sales.results} /> */}

      {/* <Carousel title="Хиты" list={hits.results!} error={!hits.results} /> */}

      <Section title="Преимущества">
        <Advantages />
      </Section>

      <Section title="Бренды">
        <Brands />
      </Section>

      {/* <BlogsWidjet list={blogs} error={error} /> */}
    </div>
  );
}
