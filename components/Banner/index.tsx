"use client";

import { Box } from "@mui/material";
import Image from "next/image";

type BannerProps = {
  src: string;
  link?: string;
};

const Banner = (props: BannerProps): JSX.Element => {
  const { link, src } = props;
  return (
    <Box
      sx={{
        position: "relative",
        height: 280,
      }}
    >
      <Image
        src={src}
        alt=""
        fill={true}
        style={{ borderRadius: "6px", objectFit: "cover" }}
      />
    </Box>
  );
};

export default Banner;
