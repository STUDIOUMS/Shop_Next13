"use client";

import { RelatedPacks } from "@/types";
import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  styled,
  Typography,
} from "@mui/material";

type PackagesProps = {
  currentPackID: number;
  handler: (id: number, name: string) => void;
  packs: RelatedPacks[];
};

const PackBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  boxShadow: "none !important",
  color: theme.palette.common.black,
  "&.MuiButton-contained": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const Packages = (props: PackagesProps): JSX.Element => {
  const { currentPackID, handler, packs } = props;
  return (
    <Box>
      <Typography variant="h4" component="div">
        Фасовка:
      </Typography>
      <ButtonGroup>
        {packs.map((el) => (
          <PackBtn
            key={el.id}
            variant={currentPackID === el.id ? "contained" : "outlined"}
            onClick={() => handler(el.pack.id, el.pack.name)}
          >
            1
          </PackBtn>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default Packages;
