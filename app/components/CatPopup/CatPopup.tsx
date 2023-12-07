import { CatType } from "@/options/types"
import { useState } from "react"
import CatPopupItem from "./CatPopupItem"
import Btn from "../UI/Btn"

interface ICatPopup {
  cats: CatType[]
}

// Styles


const CatPopup: React.FC<ICatPopup> = ({ cats }) => {
  const [show, setShow] = useState<boolean>(false)

  const dropdownClass = show ? "catpopup opened" : "catpopup"
  
  return (
    <div className={dropdownClass}>
      <Btn title="Каталог" handler={() => setShow(!show)} />
      <div className="catpopup-dropdown">
      <div className="catpopup-header">Каталог</div>
        <div className="grid grid-3">
          {cats.filter(el => el.parent === null).map(el => {
            const subcats = cats.filter(cat => cat.parent?.pk === el.id)
            return <CatPopupItem key={el.id} el={el} setShow={setShow} subcats={subcats} />
          })}
        </div>
      </div>
      <div className="catpopup-overlay" onClick={() => setShow(false)}></div>
    </div>
  )
}

export default CatPopup