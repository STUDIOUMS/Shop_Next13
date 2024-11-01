import BreadCrumbs from "@/components/BreadCrumbs";
import { Typography } from "@mui/material";
import { BreadCrumbsType } from "@/options/types";
import Section from "@/ui/Section";

// Metatags
export const metadata = {
  title: "Вакансии",
  description: "Вакансии",
};

// Breadscrumbs
const crumbs: BreadCrumbsType[] = [{ name: "Вакансии", slug: "vacancies" }];

export default function Page() {
  return (
    <Section>
      <BreadCrumbs list={crumbs} />
      <Typography variant="h1">Вакансии</Typography>
      <Typography variant="body1">Вакансии</Typography>
    </Section>
  );
}
