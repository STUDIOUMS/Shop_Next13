import { BreadCrumbsType } from "@/options/types";
import BreadCrumbs from "@/components/BreadCrumbs";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";

// Metatags
export const metadata = {
  title: "Прайс",
  description: "Прайс",
};

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [{ name: "Прайс", slug: "price" }];

export default function Page() {
  return (
    <Section>
      <BreadCrumbs list={crumbs} />
      <Typography variant="h1">Прайс</Typography>
      <Typography variant="body1">Прайс</Typography>
    </Section>
  );
}
