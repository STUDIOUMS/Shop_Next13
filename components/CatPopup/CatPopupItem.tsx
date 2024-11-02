import { Cat } from "@/options/types";
import Link from "next/link";

interface ICatPopupItem {
  el: Cat;
  subcats: Cat[];
  setShow: any;
}

const CatPopupItem: React.FC<ICatPopupItem> = ({ el, subcats, setShow }) => {
  return (
    <div>
      <PopupTitle>
        <Link href={`cat/${el.slug}`} onClick={() => setShow(false)}>
          {el.img && <img src={el.img} alt="" />}
          <span>{el.name}</span>
        </Link>
      </PopupTitle>
      <ul>
        {subcats.map((el) => (
          <li key={el.id}>
            <Link href={`cat/${el.slug}`} onClick={() => setShow(false)}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatPopupItem;
