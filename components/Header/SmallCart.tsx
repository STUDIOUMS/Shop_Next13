import cart from "@/assets/cart.svg";
import { useAppStore } from "@/store/useAppStore";
import CustomBtn from "@/ui/CustomBtn";
import { Badge } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SmallCart = (): JSX.Element => {
  const { push } = useRouter();
  const { orders } = useAppStore();

  return (
    <Badge
      badgeContent={0}
      color="primary"
      sx={{
        "& .MuiBadge-badge": { fontSize: "11px" },
      }}
    >
      <CustomBtn
        color="secondary"
        disabled={!orders.length}
        style={{ padding: 0, minWidth: 0, width: "40px", height: "40px" }}
      >
        <Image src={cart.src} alt="Cart" width={20} height={20} />
      </CustomBtn>
    </Badge>
  );
};

export default SmallCart;
