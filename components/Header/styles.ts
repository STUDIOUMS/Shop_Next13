import { styled, Box } from "@mui/material";

export const Navbox = styled(Box)(({ theme }) => ({
  ul: {
    display: "flex",
    margin: 0,
    padding: 0,
  },
  li: {
    listStyle: "none",
    position: "relative",
    "& > a": {
      color: theme.palette.common.black,
      display: "block",
      padding: theme.spacing(2),
      textDecoration: "none",
    },
    ul: {
      position: "absolute",
      left: 0,
    },
  },
}));
