import { BlogItem, BreadCrumbsItem, Response } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { getData } from "@/utils/api";
import { Typography } from "@mui/material";

// Metatags
export const metadata = {
  title: "Блог",
  description: "Блог",
};

// Breadcrumbs
const crumbs: BreadCrumbsItem[] = [{ name: "Блог", slug: "blog" }];

export default async function Blog() {
  const posts = await getData<Response<BlogItem>>("/blog/articles");

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <h1>Блог</h1>
      {posts.results.length === 0 && (
        <Typography variant="body1">Нет записей в базе данных</Typography>
      )}
    </Section>
  );
}
