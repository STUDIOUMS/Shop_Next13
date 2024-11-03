import { Skeleton } from "@mui/material";
import React from "react";

const BlogLoading = () => {
  return (
    <div>
      <Skeleton variant="rounded" height={100} sx={{ mb: 5 }} />
      <Skeleton variant="rounded" height={100} sx={{ mb: 5 }} />
      <Skeleton variant="rounded" height={100} sx={{ mb: 5 }} />
    </div>
  );
};

export default BlogLoading;
