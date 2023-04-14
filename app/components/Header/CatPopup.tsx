import { url_cats } from "@/options/helpers"
import { CatType } from "@/options/types"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import CatPopupItem from "./CatPopupItem"

const CatPopup = () => {
  const [cats, setCats] = useState<CatType[]>([])
  const [show, setShow] = useState<boolean>(false)
  
  useEffect(() => {
    fetch(`${url_cats}`)
      .then(response => response.json())
      .then(data => setCats(data))
  }, [])

  const dropdownClass = show ? "catpopup opened" : "catpopup"
  
  
  return (
    <div className={dropdownClass}>
      <button className="btn btn-outline-success catpopup-btn" onClick={() => setShow(!show)}>Каталог</button>
      <div className="catpopup-dropdown">
      <div className="catpopup-header">Каталог</div>
        <div className="row">
          {cats.filter(el => el.parentID === 0).map(el => {
            const subcats = cats.filter(subcat => subcat.parentID === el.id)
            return <CatPopupItem key={el.id} slug={el.slug} name={el.name} img={el.img} subcats={subcats} setShow={setShow} />
          })}
        </div>
      </div>
      <div className="catpopup-overlay" onClick={() => setShow(false)}></div>
    </div>
  )
}

export default CatPopup