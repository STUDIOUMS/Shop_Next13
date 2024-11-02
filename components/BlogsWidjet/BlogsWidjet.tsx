"use client";

import { blogType } from "@/options/types";
import Link from "next/link";
import Alert from "../../OLD_ui/Alert";
import BlogsWidjetItem from "./BlogsWidjetItem";

interface IBlogsWidjet {
  list: blogType[];
  title?: string;
  error?: boolean;
}

const BlogsWidjet: React.FC<IBlogsWidjet> = ({
  error,
  list,
  title = "Блог",
}) => {
  return (
    <div className="section">
      <div className="pagetitle">
        <Link href="/blog">{title}</Link>
      </div>
      <div className="grid grid-3 grid-mb-1">
        {list.map((el) => (
          <BlogsWidjetItem key={el.id} el={el} />
        ))}
      </div>
      {error && <Alert color="danger">Ошибка сервера</Alert>}
    </div>
  );
};

export default BlogsWidjet;
