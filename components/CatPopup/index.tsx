import { Cat } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import { Box, Grid2, Menu, Typography } from "@mui/material";
import { useState } from "react";
import CatPopupItem from "./CatPopupItem";

type CatPopupProps = {
  cats: Cat[];
};

const CatPopup = (props: CatPopupProps): JSX.Element => {
  const { cats } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomBtn color="primary" variant="outlined" onClick={handleClick}>
        Каталог
      </CustomBtn>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: 2 }}
        slotProps={{
          paper: {
            sx: {
              width: 600,
            },
          },
        }}
      >
        <Box sx={{ pt: 6, pb: 6, pl: 8, pr: 8 }}>
          <Typography variant="h2">Каталог</Typography>
          <Grid2 container spacing={8}>
            {cats
              .filter((el) => el.parent === null)
              .map((cat) => {
                const subcats = cats.filter(
                  (el) => el.parent && el.parent.pk === cat.id
                );
                console.log(subcats);

                return (
                  <CatPopupItem key={cat.id} cat={cat} subcats={subcats} />
                );
              })}
          </Grid2>
        </Box>
      </Menu>
    </>
  );
};

export default CatPopup;
