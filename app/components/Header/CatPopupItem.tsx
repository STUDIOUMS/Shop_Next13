import { CatType } from "@/options/types"
import Link from "next/link"

interface ICatPopupItem {
  el: CatType
  subcats: CatType[]
  setShow: any
}

const CatPopupItem: React.FC<ICatPopupItem> = ({ el, subcats, setShow }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 catpopup-item">
      <div className="catpopup-title">
        <Link href={`cat/${el.slug}`} onClick={() => setShow(false)}>
          {el.img && <span className="catpopup-img"><img src={el.img} alt="" /></span>}
          <span>{el.name}</span>
        </Link>
      </div>
      <ul>
        {subcats.map(el => <li key={el.id}>
          <Link href={`cat/${el.slug}`} onClick={() => setShow(false)}>{el.name}</Link>
        </li>)}
      </ul>
    </div>
  )
}

export default CatPopupItem