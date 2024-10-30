import BreadCrumbs from "@/components_old/BreadCrumbs";
import { BreadCrumbsType } from "@/options/types";
import BasketList from "./components/BasketList";

// Metatags
export const metadata = {
  title: "Корзина",
  description: "Корзина",
};

/* BreadCrumbs */
const crumbs: BreadCrumbsType[] = [{ name: "Корзина", slug: `/basket` }];

export default function Page() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <BasketList />
    </div>
  );
}
