import { serverURL } from "@/options/fetches"
import styles from "./Home.module.scss"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className={styles.homebanner}></div>

      <p><a href={serverURL} target="_blank">API</a></p>
      <p><a href={`${serverURL}/admin`} target="_blank">Admin</a></p>
      <p><a href={`${serverURL}/docs`} target="_blank">Swagger</a></p>
    </div>
  )
}
