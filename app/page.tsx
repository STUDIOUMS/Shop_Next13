import { serverURL } from "@/options/fetches"
import styles from "./Home.module.scss"

// Metatags
export const metadata = {
  title: 'Интернет-магазин моющих средств',
  description: 'Главная',
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className={styles.homebanner}></div>

      <div style={{marginTop: '20px'}}>
        <a href={serverURL} className="btn btn-outline-secondary" style={{marginRight: '5px'}} target="_blank">API</a>
        <a href={`${serverURL}/admin`} className="btn btn-outline-secondary" style={{marginRight: '5px'}} target="_blank">Admin</a>
        <a href={`${serverURL}/docs`} className="btn btn-outline-secondary" target="_blank">Swagger</a>
      </div>

    </div>
  )
}
