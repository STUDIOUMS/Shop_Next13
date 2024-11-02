import { Box, Stack, styled } from "@mui/material";
import { BoxProps } from "@mui/system";

export const GoodItem = styled(Stack)<BoxProps>(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: "6px",
  padding: theme.spacing(3),
  position: "relative",
}));
