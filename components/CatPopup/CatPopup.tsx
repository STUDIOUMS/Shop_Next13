import { Cat } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import { Box, BoxProps } from "@mui/material";
import { useState } from "react";

type CatPopupProps = {
  cats: Cat[];
};

const CatPopup = (props: CatPopupProps): JSX.Element => {
  const { cats } = props;
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <CustomBtn
        color="primary"
        variant="outlined"
        onClick={() => setShow(true)}
      >
        Каталог
      </CustomBtn>
    </>
  );
};

export default CatPopup;
