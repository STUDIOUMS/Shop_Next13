import { CatType } from "@/options/types"
import { useState } from "react"
import CatPopupItem from "./CatPopupItem"
import Btn from "../UI/Btn"
import SCRegistry from "@/options/registry"
import { Overlay, Popup, PopupHeader, Wrap } from "./CatPopupStyles"

interface ICatPopup {
  cats: CatType[]
}


const CatPopup: React.FC<ICatPopup> = ({ cats }) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <Wrap $show={show}>
      <Btn title="Каталог" handler={() => setShow(!show)} />
      <Popup>
        <PopupHeader>Каталог</PopupHeader>
        <div className="grid grid-3 grid-mb-1">
          {cats.filter(el => el.parent === null).map(el => {
            const subcats = cats.filter(cat => cat.parent?.pk === el.id)
            return <CatPopupItem key={el.id} el={el} setShow={setShow} subcats={subcats} />
          })}
        </div>
      </Popup>
      <Overlay onClick={() => setShow(false)} />
    </Wrap>
  )
}

export default CatPopup