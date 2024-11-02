import { BreadCrumbsItem } from "@/types";
import { Typography } from "@mui/material";
import Section from "@/ui/Section";
import BreadCrumbs from "@/ui/BreadCrumbs";
import View from "@/ui/View";

// Metatags
export const metadata = {
  title: "Доставка и оплата",
  description: "Доставка и оплата",
};

// Breadscrumbs
const crumbs: BreadCrumbsItem[] = [
  { name: "Доставка и оплата", slug: "delivery" },
];

export default function Page() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Доставка и оплата</Typography>
      <View />
    </Section>
  );
}
