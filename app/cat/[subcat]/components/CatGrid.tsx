"use client";

import Good from "@/components/Good";
import Sort from "@/components/Sort/Sort";
import Subcats from "@/components/Subcats";
import { PRODUCTS_LIMIT } from "@/constants";
import useGetData from "@/hooks/useGetData";
import { useAppStore } from "@/store/useAppStore";
import { Cat, Product, Response } from "@/types";
import { Grid2 } from "@mui/material";

type CatGridProps = {
  cat: Cat;
  cats: Cat[];
};

const CatGrid = (props: CatGridProps): JSX.Element => {
  const { cat } = props;
  const { view } = useAppStore();

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
        <Subcats cat={cat} />

        <Sort />

        <Grid2 container spacing={6}>
          {isSuccess &&
            data.results.map((product) => (
              <Grid2
                key={product.id}
                size={{
                  xs: 12,
                  sm: view === "grid" ? 4 : 12,
                  md: view === "grid" ? 3 : 12,
                }}
              >
                <Good el={product} />
              </Grid2>
            ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default CatGrid;
