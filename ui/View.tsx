"use client";

import { Button, ButtonGroup } from "@mui/material";
import gridIcon from "@/assets/grid.svg";
import listIcon from "@/assets/list.svg";
import Image from "next/image";

const View = (): JSX.Element => {
  return (
    <ButtonGroup variant="outlined" color="inherit">
      <Button>
        <Image src={gridIcon.src} alt="" width={18} height={18} />
      </Button>
      <Button>
        <Image src={listIcon.src} alt="" width={24} height={24} />
      </Button>
    </ButtonGroup>
  );
};

export default View;
