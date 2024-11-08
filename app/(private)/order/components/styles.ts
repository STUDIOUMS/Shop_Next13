import { Box, styled } from "@mui/material";

export const OrderSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: 6,
  marginBottom: theme.spacing(6),
  padding: theme.spacing(6),
}));
