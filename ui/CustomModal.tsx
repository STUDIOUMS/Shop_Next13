import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import closeIcon from "@/assets/close.svg";
import Image from "next/image";

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
      <DialogTitle
        sx={{ p: "30px" }}
        display="flex"
        justifyContent="space-between"
      >
        {title}
        <IconButton onClick={close}>
          <Image src={closeIcon} alt="" width={20} height={20} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: "8px 30px 30px !important" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
