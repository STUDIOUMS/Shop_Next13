"use client";

import { PRODUCTS_LIMIT } from "@/constants";
import useGetData from "@/hooks/useGetData";
import { Cat, Product, Response } from "@/types";
import { Grid2 } from "@mui/material";

type CatGridProps = {
  cat: Cat;
};

const CatGrid = (props: CatGridProps): JSX.Element => {
  const { cat } = props;

  const { data, isLoading, isError, isSuccess } = useGetData<Response<Product>>(
    {
      key: ["products"],
      uri: `/catalog/products?categories=${cat.id}&limit=${PRODUCTS_LIMIT}`,
    }
  );

  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 3 }}>Filter</Grid2>
      <Grid2 size={{ xs: 12, lg: 9 }}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Grid2>
    </Grid2>
  );
};

export default CatGrid;
