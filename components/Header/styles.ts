import { styled, Box, Container } from "@mui/material";

export const Wrap = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const MiddleHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
  position: "sticky",
  top: 0,
  zIndex: 500,
}));

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
