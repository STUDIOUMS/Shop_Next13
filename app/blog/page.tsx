import { BlogItem, BreadCrumbsType } from "@/options/types";
import BreadCrumbs from "@/components_old/BreadCrumbs";
import { useQuery } from "react-query";

type BlogProps = {
  searchParams: any;
  blogs: BlogItem[];
};

// Metatags
export const metadata = {
  title: "Блог",
  description: "Блог",
};

const getFetch = async (uri: string) => {
  const response = await fetch(uri);
  const data = await response.json();
  return data;
};

// Breadcrumbs
const crumbs: BreadCrumbsType[] = [{ name: "Блог", slug: "blog" }];

export default async function Blog(props: BlogProps) {
  // const uri = Object.entries(searchParams);
  // let newUri = uri.map((el) => el.join("=")).join("");

  const { data } = useQuery({
    queryFn: () => getFetch("https://jsonplaceholder.typicode.com/posts"),
    queryKey: ["blog"],
  });

  console.log(props);

  return (
    <div className="section">
      <BreadCrumbs list={crumbs} />
      <h1>Блог</h1>
      {/* {isSuccess && <BlogList limit={limitPosts} list={data.results!} all={data.count!} />}
      {isError && <Alert color="danger">Server error</Alert>} */}
    </div>
  );
}
