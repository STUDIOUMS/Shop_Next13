import { Button, ButtonProps } from "@mui/material";
import React from "react";

const CustomBtn = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={(theme) => ({
        borderRadius: "6px",
        boxShadow: "none !important",
        fontSize: theme.typography.body1.fontSize,
        lineHeight: theme.typography.body1.lineHeight,
        textTransform: "none",
        p: "14px 22px",
        "&.MuiButton-sizeSmall": {
          p: "8px 18px",
          fontSize: theme.typography.body2.fontSize,
          lineHeight: theme.typography.body2.lineHeight,
        },
        "&.MuiButton-sizeLarge": {
          p: "20px 32px",
        },
        "&:disabled": {
          opacity: 0.5,
        },
      })}
      {...props}
    />
  );
};

export default CustomBtn;
