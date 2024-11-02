import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";

// Metatags
export const metadata = {
  title: "Прайс",
  description: "Прайс",
};

// Breadscrumbs
const crumbs: BreadCrumbsItem[] = [{ name: "Прайс", slug: "price" }];

export default function Page() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Прайс</Typography>
      <Typography variant="body1">Прайс</Typography>
    </Section>
  );
}
