import { useOrderStore } from "@/store/useOrderStore";
import { Order, Product } from "@/types";
import CustomBtn from "@/ui/CustomBtn";

type AddCartProps = {
  el: Product;
  pack: string;
  img: string;
  price: string;
  big?: boolean;
};

const AddCart = (props: AddCartProps): JSX.Element => {
  const { el, img, pack, price, big } = props;
  const { setOrder } = useOrderStore();

  const order: Order = {
    id: String(el.id) + "-" + pack,
    title: el.title,
    slug: el.slug,
    art: el.art,
    price,
    total: price,
    img,
    pack,
  };

  return (
    <CustomBtn
      color="primary"
      variant="outlined"
      onClick={() => setOrder(order)}
    >
      В корзину
    </CustomBtn>
  );
};

export default AddCart;
