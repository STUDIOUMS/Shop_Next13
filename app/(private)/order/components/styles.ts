import { Box, styled } from "@mui/material";

export const OrderSection = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  marginBottom: theme.spacing(6),
  padding: theme.spacing(6),
}));
