"use client";

import ErrorAlert from "@/components/ErrorAlert";
import useGetData from "@/hooks/useGetData";
import { BlogItem, Response } from "@/types";
import { Alert, AlertTitle, Box } from "@mui/material";
import BlogCard from "./BlogCard";
import BlogLoading from "./BlogLoading";

const BlogList = (): JSX.Element => {
  const { data, isLoading, isError, isSuccess } = useGetData<
    Response<BlogItem>
  >({
    key: ["blog"],
    uri: "/blog/articles",
  });

  if (isLoading) return <BlogLoading />;

  if (isError) return <ErrorAlert />;

  return (
    <Box>
      {isSuccess &&
        data.results.map((el) => <BlogCard key={el.id} item={el} />)}

      {isSuccess && !data.results.length && (
        <Alert variant="outlined" severity="info">
          <AlertTitle>Нет статей</AlertTitle> В блоге пока что нет ни одной
          статьи.
        </Alert>
      )}
    </Box>
  );
};

export default BlogList;
