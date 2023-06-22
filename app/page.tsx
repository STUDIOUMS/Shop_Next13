import { getBlogsWidjet, getProductsWidget, serverURL } from "@/options/fetches"
import Advantages from "./components/Advantages/Advantages"
import Banners from "./components/Banners/Banners"
import BigBanner from "./components/BigBanner/BigBanner"
import BlogsWidjet from "./components/BlogsWidjet/BlogsWidjet"
import Brands from "./components/Brands/Brands"
import Carousel from "./components/Carousel/Carousel"

// Metatags
export const metadata = {
  title: 'Интернет-магазин моющих средств',
  description: 'Главная',
}

export default async function Home() {
  const sales = await getProductsWidget('discount', 10)
  const hits = await getProductsWidget('hit', 10)
  const novelties = await getProductsWidget('new', 10)
  const { blogs, errorBlogs } = await getBlogsWidjet(3)

  return (
    <div>
      
      <div style={{margin: '20px 0 30px'}}>
        <a href={serverURL} className="btn btn-outline-secondary" style={{marginRight: '5px'}} target="_blank">API</a>
        <a href={`${serverURL}/admin`} className="btn btn-outline-secondary" style={{marginRight: '5px'}} target="_blank">Admin</a>
        <a href={`${serverURL}/docs`} className="btn btn-outline-secondary" target="_blank">Swagger</a>
      </div>

      <BigBanner />

      <Carousel title="Новинки" list={novelties} />

      <Banners count={2} />

      <Carousel title="Скидки" list={sales} />

      <Banners count={3} />

      <Carousel title="Хиты" list={hits} />

      <Advantages />

      <Brands />

      <BlogsWidjet list={blogs} error={errorBlogs} />

    </div>
  )
}
