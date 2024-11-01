import { BreadCrumbsType } from "@/options/types";
import BreadCrumbs from "@/components/BreadCrumbs";
import { getData } from "@/utils/api";

// Metatags
export const metadata = {
  title: "Блог",
  description: "Блог",
};

// Breadcrumbs
const crumbs: BreadCrumbsType[] = [{ name: "Блог", slug: "blog" }];

export default async function Blog() {
  const posts = await getData("/blog/articles");

  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Блог</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
