import { Box, Chip, ChipProps, Stack, styled } from "@mui/material";
import { BoxProps } from "@mui/system";

export const GoodItem = styled(Stack)<BoxProps>(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: "6px",
  padding: theme.spacing(3),
  position: "relative",
}));

export const GoodChip = styled(Chip)<ChipProps>(({ theme }) => ({
  borderRadius: "6px",
  fontSize: theme.typography.body2.fontSize,
  letterSpacing: 1,
  marginRight: 3,
  textTransform: "uppercase",
}));

export const GoodItemTitle = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: 700,
  marginBottom: theme.spacing(6),
  a: {
    color: theme.palette.common.black,
    textDecoration: "none",
  },
}));
