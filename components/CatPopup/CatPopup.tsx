import { CatType } from "@/options/types"
import { useState } from "react"
import CatPopupItem from "./CatPopupItem"
import Btn from "../../ui/Btn"
import { Overlay, Popup, PopupHeader, Wrap } from "./CatPopupStyles"
import Alert from "../../ui/Alert"

interface ICatPopup {
  cats: CatType[]
  isError: boolean
}

const CatPopup: React.FC<ICatPopup> = ({ cats, isError }) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <Wrap $show={show}>
      <Btn title="Каталог" handler={() => setShow(!show)} icon="cat" />
      <Popup>
        <PopupHeader>Каталог</PopupHeader>
        <div className="grid grid-3 grid-mb-1">
          {!isError && cats.filter(el => el.parent === null).map(el => {
            const subcats: CatType[] = cats.filter(cat => cat.parent?.pk === el.id)
            return <CatPopupItem key={el.id} el={el} setShow={setShow} subcats={subcats} />
          })}
        </div>
        {isError && <Alert color="danger">Server error</Alert>}
      </Popup>
      <Overlay onClick={() => setShow(false)} />
    </Wrap>
  )
}

export default CatPopup