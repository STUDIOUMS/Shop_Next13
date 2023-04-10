import { CatType } from "@/options/types"
import Link from "next/link"

interface ICatPopupItem {
  name: string
  slug: string
  subcats: CatType[]
  setShow: any
}

const CatPopupItem: React.FC<ICatPopupItem> = ({ name, slug, setShow, subcats }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 catpopup-item">
      <div className="catpopup-title">
        <Link href={`cat/${slug}`} onClick={() => setShow(false)}>{name}</Link>
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