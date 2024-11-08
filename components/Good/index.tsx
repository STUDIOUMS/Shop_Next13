"use client";

import { usePriceImg } from "@/hooks/usePriceImg";
import { useAppStore } from "@/store/useAppStore";
import { Product } from "@/types";
import Packages from "@/ui/Packages";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import AddCart from "../AddCart";
import PriceBox from "../PriceBox";
import { GoodChip, GoodItem, GoodItemTitle } from "./styles";

type GoodProps = {
  el: Product;
  slide?: boolean;
};

const Good = (props: GoodProps): JSX.Element => {
  const { el, slide } = props;
  const { view } = useAppStore();
  const isGrid = view === "grid";

  const { choosePack, img, price, oldprice, currentPack, currentPackID } =
    usePriceImg(el.relatedPacks);

  const isSale = el.relatedPacks.some((el) => el.oldPrice !== null);

  return (
    <GoodItem
      size={
        slide
          ? "auto"
          : {
              xs: 12,
              sm: view === "grid" ? 4 : 12,
            }
      }
      view={view}
    >
      <Stack direction={isGrid ? "column" : "row"} sx={{ flexGrow: 1, mb: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Link href={`/product/${el.slug}`}>
            <img
              src={img}
              alt=""
              style={{ display: "block", margin: "0 auto", height: 140 }}
            />
          </Link>
        </Box>
        <GoodItemTitle>
          <Link href={`/product/${el.slug}`}>{el.title}</Link>
        </GoodItemTitle>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
        {el.hit && <GoodChip color="warning" label="hit" />}
        {isSale && <GoodChip color="error" label="sale" />}
        {el.new && <GoodChip color="primary" label="new" />}
      </Stack>

      <PriceBox price={price} oldprice={oldprice} sx={{ mb: 3 }} />

      <Packages
        currentPackID={currentPackID}
        handler={choosePack}
        packs={el.relatedPacks}
      />

      <AddCart el={el} img={img} pack={currentPack} price={price} />
    </GoodItem>
  );
};

export default Good;
