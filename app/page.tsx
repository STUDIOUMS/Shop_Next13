import { getBlogsWidjet, getProductsWidget } from "@/options/api";
import Advantages from "@/components/Advantages/Advantages";
import Banners from "@/components/Banners/Banners";
import BigBanner from "@/components/BigBanner/BigBanner";
import BlogsWidjet from "@/components/BlogsWidjet/BlogsWidjet";
import Brands from "@/components/Brands/Brands";
import Carousel from "@/components/Carousel/Carousel";

// Metatags
export const metadata = {
  title: "Интернет-магазин моющих средств",
  description: "Главная",
};

export default async function Home() {
  const novelties = await getProductsWidget("new", 10);
  const sales = await getProductsWidget("discount", 10);
  const hits = await getProductsWidget("hit", 10);
  const { blogs, error } = await getBlogsWidjet(3);

  return (
    <div>
      <BigBanner />

      <Carousel
        title="Новинки"
        list={novelties.results!}
        error={!novelties.results}
      />

      <Banners count={1} />

      <Carousel title="Скидки" list={sales.results!} error={!sales.results} />

      <Banners count={2} />

      <Carousel title="Хиты" list={hits.results!} error={!hits.results} />

      <Advantages />

      <Brands />

      <BlogsWidjet list={blogs} error={error} />
    </div>
  );
}
