import { CatType } from "@/options/types"
import Link from "next/link"

interface ICatPopupItem {
  name: string
  slug: string
  img: string
  subcats: CatType[]
  setShow: any
}

const CatPopupItem: React.FC<ICatPopupItem> = ({ img, name, slug, setShow, subcats }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 catpopup-item">
      <div className="catpopup-title">
        <Link href={`cat/${slug}`} onClick={() => setShow(false)}>
          {img && <span className="catpopup-img"><img src={img} alt="" /></span>}
          <span>{name}</span>
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