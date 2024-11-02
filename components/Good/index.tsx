"use client";

import { usePriceImg } from "@/hooks/usePriceImg";
import { useAppStore } from "@/store/useAppStore";
import { Product } from "@/types";
import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddCart from "../AddCart";
import Packages from "../Packages";
import PriceBox from "../PriceBox";
import { GoodItem } from "./СardStyles";

type GoodProps = {
  el: Product;
  slide?: boolean;
};

const Good = (props: GoodProps): JSX.Element => {
  const { el, slide } = props;
  const { view } = useAppStore();

  const { choosePack, img, price, oldprice, currentPack, currentPackID } =
    usePriceImg(el.relatedPacks);

  const isSale = el.relatedPacks.some((el) => el.oldPrice !== null);

  return (
    <GoodItem>
      <Box>
        <Box>
          <Link href={`/product/${el.slug}`}>
            <Image src={img} alt="" height={120} width={140} />
          </Link>
        </Box>
        <Box>
          <Typography variant="body1" fontWeight={700} component="div">
            <Link href={`/product/${el.slug}`}>{el.title}</Link>
          </Typography>
          <PriceBox price={price} oldprice={oldprice} />
          <Box>
            {el.hit && <Chip label="hit" />}
            {isSale && <Chip label="sale" />}
            {el.new && <Chip label="new" />}
          </Box>

          <Packages
            currentPackID={currentPackID}
            handler={choosePack}
            packs={el.relatedPacks}
          />
        </Box>
      </Box>
      <AddCart el={el} img={img} pack={currentPack} price={price} />
    </GoodItem>
  );
};

export default Good;
