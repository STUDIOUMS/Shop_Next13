"use client";

import CheckField from "@/components/CheckField";
import CustomInput from "@/ui/CustomInput";
import { Alert, Box, Grid2, Typography } from "@mui/material";
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

          <Grid2 size={{ xs: 12, lg: 6 }}>
            <CustomInput label="ИНН организации" fullWidth sx={{ m: 0 }} />
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 6 }}>
            <CustomInput label="Название организации" fullWidth sx={{ m: 0 }} />
          </Grid2>
        </Grid2>
      </OrderSection>

      <OrderSection>
        <Typography variant="h4">Доставка</Typography>
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, lg: 6 }}>
            {/* <CheckField
              handler={chooseDelivery}
              title="Самовывоз"
              type="radio"
              value="pickup"
              name="delivery"
              checked={true}
            />
            <CheckField
              handler={chooseDelivery}
              title={`Курьером (+${courierPrice} руб.)`}
              type="radio"
              value="courier"
              name="delivery"
            /> */}
            <Alert color="info" severity="info">
              <b>Адрес:</b> г.Тюмень, ул. Коммунистическая, 70, корп. 3, стр. 6
              <br />
              <b>Время доставки:</b> Время...
            </Alert>
          </Grid2>
        </Grid2>
      </OrderSection>
    </Box>
  );
};

export default OrderForm;
