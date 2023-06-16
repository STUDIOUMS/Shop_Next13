import { getProductsWidget, serverURL, url_products } from "@/options/fetches"
import Advantages from "./components/Advantages/Advantages"
import Banners from "./components/Banners/Banners"
import Carousel from "./components/Carousel/Carousel"
import styles from "./Home.module.scss"

// Metatags
export const metadata = {
  title: 'Интернет-магазин моющих средств',
  description: 'Главная',
}

export default async function Home() {
  const novelties = await getProductsWidget('new', 10)
  const sales = await getProductsWidget('discount', 10)
  const hits = await getProductsWidget('hit', 10)

  return (
    <div>
      <div className={styles.homebanner}></div>

      <Carousel title="Новинки" list={novelties} />

      <Banners />

      <Carousel title="Скидки" list={sales} />

      <Carousel title="Хиты" list={hits} />

      <Advantages />

      <div className="pagetitle">Бренды</div>
      <p>слайдер c заглушками</p>
      <hr />

      <div className="pagetitle">Блог</div>
      <p>показать 4 записи блога</p>
      <hr />

      <div style={{margin: '20px 0 30px'}}>
        <a href={serverURL} className="btn btn-outline-secondary" style={{marginRight: '5px'}} target="_blank">API</a>
        <a href={`${serverURL}/admin`} className="btn btn-outline-secondary" style={{marginRight: '5px'}} target="_blank">Admin</a>
        <a href={`${serverURL}/docs`} className="btn btn-outline-secondary" target="_blank">Swagger</a>
      </div>

    </div>
  )
}
