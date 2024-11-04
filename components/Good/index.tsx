"use client";

import { usePriceImg } from "@/hooks/usePriceImg";
import { useAppStore } from "@/store/useAppStore";
import { Product } from "@/types";
import Packages from "@/ui/Packages";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import AddCart from "../AddCart";
import PriceBox from "../PriceBox";
import { GoodChip, GoodItem, GoodItemTitle } from "./СardStyles";

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
      direction={isGrid ? "column" : "row"}
      alignItems={isGrid ? "normal" : "center"}
    >
      <Stack direction={isGrid ? "column" : "row"} sx={{ flexGrow: 1 }}>
        <Box>
          <Link href={`/product/${el.slug}`}>
            <img src={img} alt="" />
          </Link>
        </Box>
        <Box>
          <GoodItemTitle>
            <Link href={`/product/${el.slug}`}>{el.title}</Link>
          </GoodItemTitle>

          <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
            {el.hit && <GoodChip color="warning" label="hit" />}
            {isSale && <GoodChip color="error" label="sale" />}
            {el.new && <GoodChip color="primary" label="new" />}
          </Stack>

          <PriceBox price={price} oldprice={oldprice} sx={{ mb: 6 }} />

          <Packages
            currentPackID={currentPackID}
            handler={choosePack}
            packs={el.relatedPacks}
          />
        </Box>
      </Stack>
      <AddCart el={el} img={img} pack={currentPack} price={price} />
    </GoodItem>
  );
};

export default Good;
