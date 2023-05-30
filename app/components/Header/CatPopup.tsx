import { url_cats } from "@/options/fetches"
import { CatType } from "@/options/types"
import { useEffect, useState } from "react"
import CatPopupItem from "./CatPopupItem"

const CatPopup = () => {
  const [cats, setCats] = useState<CatType[]>([])
  const [show, setShow] = useState<boolean>(false)
  
  useEffect(() => {
    fetch(`${url_cats}`)
      .then(response => response.json())
      .then(data => setCats(data.results))
  }, [])

  const btnClass = show ? "btn btn-outline-success catpopup-btn active" : "btn btn-outline-success catpopup-btn"
  const dropdownClass = show ? "catpopup opened" : "catpopup"
  
  
  return (
    <div className={dropdownClass}>
      <button className={btnClass} onClick={() => setShow(!show)}>Каталог</button>
      <div className="catpopup-dropdown">
      <div className="catpopup-header">Каталог</div>
        <div className="row">
          {cats.filter(el => el.parent === null).map(el => {
            const subcats = cats.filter(subcat => subcat.parent === el.id)
            return <CatPopupItem key={el.id} slug={el.slug} name={el.name} img={el.img} subcats={subcats} setShow={setShow} />
          })}
        </div>
      </div>
      <div className="catpopup-overlay" onClick={() => setShow(false)}></div>
    </div>
  )
}

export default CatPopup