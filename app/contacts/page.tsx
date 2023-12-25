import { BreadCrumbsType } from "@/options/types"
import BreadCrumbs from "@/components/BreadCrumbs"
import styles from "./contacts.module.scss"
import MapFrame from "./MapFrame"

// Metatags
export const metadata = {
  title: 'Контакты',
  description: 'Контакты',
}

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "Контакты", slug: "contacts" }
]

export default function Page() {
  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Контакты</h1>

      <div className="grid grid-2 grid-tb-1">
        <div>
          <h4>Телефоны</h4>
          <p><a href="tel:83452388366">8 (3452) 388-366</a> - городской<br />
          <a href="tel:89199508366">8 (919)-950-8366</a><br />
          <a href="tel:89199508366">8 (919)-950-8366</a></p>

          <h4>E-mail</h4>
          <p><a href="mailto:alba72-22@yandex.ru">alba72-22@yandex.ru</a></p>

          <h4>Группа VK</h4>
          <p><a href="https://vk.com/alba_higo" target="_blank">https://vk.com/alba_higo</a></p>
        </div>
        <div className={styles.mapbox}>
          <h4>Карта</h4>
          <MapFrame />
        </div>
      </div>

    </div>
  )
}
