import { BreadCrumbsType } from "@/options/types";
import BreadCrumbs from "@/components/BreadCrumbs";

// Metatags
export const metadata = {
  title: "Доставка и оплата",
  description: "Доставка и оплата",
};

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [
  { name: "Доставка и оплата", slug: "delivery" },
];

export default function Page() {
  return (
    <div>
      <BreadCrumbs list={crumbs} />
      <h1>Доставка и оплата</h1>
    </div>
  );
}
