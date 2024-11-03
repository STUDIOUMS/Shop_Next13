import { BlogItem, BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { getData } from "@/utils/api";
import { createDate } from "@/utils/helpers";
import { Typography } from "@mui/material";

type Params = {
  slug: string;
};

// Metatags
export async function generateMetadata(params: Params) {
  const { slug } = await params;
  const post = await getData<BlogItem>(`/blog/articles/${slug}`);
  return {
    title: post.title,
    description: post.short,
  };
}

export default async function BlogPage(params: Params) {
  const { slug } = await params;
  const post = await getData<BlogItem>(`/blog/articles/${slug}`);
  const date: string = createDate(post.createdAt);

  // Breadcrumbs
  let crumbs: BreadCrumbsItem[] = [
    { name: "Блог", slug: "/blog" },
    { name: post.title, slug: post.slug },
  ];

  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">{post.title}</Typography>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.description! }}></div>
    </Section>
  );
}
