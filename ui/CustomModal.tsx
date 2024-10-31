import { Dialog, DialogContent, DialogProps, DialogTitle } from "@mui/material";
import React from "react";

type CustomModalProps = {
  children: React.ReactNode;
  close: () => void;
  open: boolean;
  title: string;
};

const CustomModal = (props: CustomModalProps): JSX.Element => {
  const { children, close, open, title } = props;
  return (
    <Dialog
      open={open}
      onClose={close}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "8px",
          maxWidth: "520px",
        },
      }}
    >
      <DialogTitle sx={{ p: "30px" }}>{title}</DialogTitle>
      <DialogContent sx={{ p: "8px 30px 30px !important" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
