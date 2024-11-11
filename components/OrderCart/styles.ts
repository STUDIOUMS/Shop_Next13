import theme from "@/theme";
import { Box, styled } from "@mui/material";

export const OrderCartWrap = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  padding: theme.spacing(5),
  position: "sticky",
  top: "85px",
}));
