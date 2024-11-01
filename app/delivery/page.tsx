import { BreadCrumbsType } from "@/options/types";
import BreadCrumbs from "@/components/BreadCrumbs";
import { Typography } from "@mui/material";
import Section from "@/ui/Section";

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
    <Section>
      <BreadCrumbs list={crumbs} />
      <Typography variant="h1">Доставка и оплата</Typography>
    </Section>
  );
}
