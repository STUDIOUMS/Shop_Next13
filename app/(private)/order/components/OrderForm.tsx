"use client";

import CustomInput from "@/ui/CustomInput";
import { Box, Grid2, Typography } from "@mui/material";
import { OrderSection } from "./styles";

const OrderForm = (): JSX.Element => {
  return (
    <Box>
      <OrderSection>
        <Typography variant="h4">Личные данные</Typography>
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, lg: 6 }}>
            <CustomInput label="Ваше ФИО" fullWidth sx={{ m: 0 }} />
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 6 }}>
            <CustomInput type="email" label="E-mail" fullWidth sx={{ m: 0 }} />
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 6 }}>
            <CustomInput type="tel" label="Телефон" fullWidth sx={{ m: 0 }} />
          </Grid2>
        </Grid2>
      </OrderSection>
    </Box>
  );
};

export default OrderForm;
