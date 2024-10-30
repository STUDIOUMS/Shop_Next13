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
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomModal;
