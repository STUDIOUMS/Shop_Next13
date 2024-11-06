"use client";

import Filter from "@/components/Filter";
import Good from "@/components/Good";
import Sort from "@/components/Sort/Sort";
import Subcats from "@/components/Subcats";
import { PRODUCTS_LIMIT } from "@/constants";
import useGetData from "@/hooks/useGetData";
import { useAppStore } from "@/store/useAppStore";
import { Cat, Pack, Product, Response } from "@/types";
import { Grid2 } from "@mui/material";
import CatLoading from "./CatLoading";

type CatGridProps = {
  cat: Cat;
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

  const { data: dataPacks, isSuccess: succesPacks } = useGetData<
    Response<Pack>
  >({
    key: ["packs"],
    uri: `/catalog/packs`,
  });

  if (isLoading) return <CatLoading />;

  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 3 }}>
        {succesPacks && <Filter packs={dataPacks.results} />}
      </Grid2>

      <Grid2 size={{ xs: 12, lg: 9 }}>
        <Subcats cat={cat} />

        <Sort />

        <Grid2 container spacing={6} sx={{ mb: 10 }}>
          {isSuccess &&
            data.results.map((product) => (
              <Grid2
                key={product.id}
                size={{
                  xs: 12,
                  sm: view === "grid" ? 4 : 12,
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
