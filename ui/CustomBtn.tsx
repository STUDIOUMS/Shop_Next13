"use client";

import { Button, ButtonProps, styled } from "@mui/material";

const Btn = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "6px",
  boxShadow: "none !important",
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  textTransform: "none",
  padding: "10px 22px",
  "&.MuiButton-sizeSmall": {
    padding: "8px 18px",
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
  },
  "&.MuiButton-sizeLarge": {
    padding: "20px 32px",
  },
  "&:disabled": {
    opacity: 0.5,
  },
}));

const CustomBtn = (props: ButtonProps): JSX.Element => {
  return <Btn variant="contained" {...props} />;
};

export default CustomBtn;