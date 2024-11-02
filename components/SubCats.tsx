"use client";

import { Cat } from "@/types";
import { Button, Grid2, styled } from "@mui/material";
import Image from "next/image";

type SubCatsProps = {
  list: Cat[];
};
const Item = styled(Button)(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: "6px",
  color: theme.palette.common.black,
  display: "block",
  padding: "10px 16px",
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  textAlign: "center",
  textDecoration: "none",
  minHeight: "100%",
  "&:hover": {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  },
}));

const SubCats = (props: SubCatsProps): JSX.Element => {
  const { list } = props;
  return (
    <Grid2 container spacing={4}>
      {list.map((el) => (
        <Grid2 key={el.id} size={{ xs: 12, lg: 4 }}>
          <Item href={`/cat/${el.slug}`}>
            <Image src={el.img} alt="" width={50} height={50} />
            <span>{el.name}</span>
          </Item>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SubCats;
