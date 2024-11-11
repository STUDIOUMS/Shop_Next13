"use client";

import { COURIER_PRICE, ERROR_TEXT } from "@/constants";
import { Delivery, Face, FormOrderValues, Payment } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import CustomInput from "@/ui/CustomInput";
import {
  Alert,
  Box,
  FormControlLabel,
  Grid2,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ChooseFace from "./ChooseFace";
import OrderSection from "./OrderSection";
import visa from "@/assets/visa.svg";
import mastercard from "@/assets/mastercard.svg";
import OrderCart from "@/components/OrderCart";

const OrderForm = (): JSX.Element => {
  const [face, setFace] = useState<Face>("individual");
  const [delivery, setDelivery] = useState<Delivery>("pickup");
  const [payment, setPayment] = useState<Payment>("acquiring");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormOrderValues>();

  const placeOrder = (data: FormOrderValues) => {
    console.log(data);
  };

  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 8 }}>
        <form onSubmit={handleSubmit(placeOrder)}>
          <OrderSection title="Личные данные">
            <ChooseFace face={face} setFace={setFace} setPayment={setPayment} />

            <Grid2 container spacing={6}>
              <Grid2 size={{ xs: 12, lg: 6 }}>
                <CustomInput
                  label="Ваше ФИО *"
                  fullWidth
                  sx={{ m: 0 }}
                  error={errors.name ? true : false}
                  helperText={errors.name && errors.name.message}
                  slotProps={{
                    input: {
                      ...register("name", { required: ERROR_TEXT }),
                    },
                  }}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, lg: 6 }}>
                <CustomInput
                  type="email"
                  label="E-mail"
                  fullWidth
                  sx={{ m: 0 }}
                  slotProps={{
                    input: {
                      ...register("email"),
                    },
                  }}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, lg: 6 }}>
                <CustomInput
                  type="tel"
                  label="Телефон *"
                  fullWidth
                  sx={{ m: 0 }}
                  slotProps={{
                    input: {
                      ...register("phone", { required: ERROR_TEXT }),
                    },
                  }}
                  error={errors.phone ? true : false}
                  helperText={errors.phone && errors.phone.message}
                />
              </Grid2>

              {face === "legal" && (
                <>
                  <Grid2 size={{ xs: 12, lg: 6 }}>
                    <CustomInput
                      label="ИНН организации"
                      fullWidth
                      sx={{ m: 0 }}
                    />
                  </Grid2>

                  <Grid2 size={{ xs: 12, lg: 6 }}>
                    <CustomInput
                      label="Название организации"
                      fullWidth
                      sx={{ m: 0 }}
                    />
                  </Grid2>
                </>
              )}
            </Grid2>
          </OrderSection>

          <OrderSection title="Доставка">
            <RadioGroup row sx={{ mb: 4 }} value={delivery}>
              <FormControlLabel
                value="pickup"
                control={
                  <Radio size="small" onChange={() => setDelivery("pickup")} />
                }
                label="Самовывоз"
              />
              <FormControlLabel
                value="courier"
                control={
                  <Radio size="small" onChange={() => setDelivery("courier")} />
                }
                label={`Курьером (+${COURIER_PRICE} руб.)`}
              />
            </RadioGroup>
            {delivery === "pickup" && (
              <Alert color="info" severity="info">
                <b>Адрес:</b> г.Тюмень, ул. Коммунистическая, 70, корп. 3, стр.
                6
                <br />
                <b>Время доставки:</b> с 10-00 по 18-00 (Пн-Сб)
              </Alert>
            )}
          </OrderSection>

          <OrderSection title="Оплата">
            <RadioGroup row value={payment}>
              {face === "individual" && (
                <FormControlLabel
                  value="acquiring"
                  control={
                    <Radio
                      size="small"
                      onChange={() => setPayment("acquiring")}
                    />
                  }
                  label="Оплатить онлайн"
                />
              )}
              {face === "legal" && (
                <FormControlLabel
                  value="bill"
                  control={
                    <Radio size="small" onChange={() => setPayment("bill")} />
                  }
                  label="Оплата по счету с НДС"
                />
              )}
            </RadioGroup>
            {face === "individual" && (
              <Stack direction="row">
                <img
                  src={visa.src}
                  alt=""
                  style={{ height: 50, marginRight: 12 }}
                />
                <img src={mastercard.src} alt="" style={{ height: 50 }} />
              </Stack>
            )}
          </OrderSection>

          <OrderSection title="Примечание к заказу">
            <CustomInput
              label="Ваш текст"
              rows={4}
              multiline
              fullWidth
              sx={{ m: 0 }}
              slotProps={{
                input: {
                  ...register("addition"),
                },
              }}
            />
          </OrderSection>

          <Stack direction="row" justifyContent="space-between">
            <CustomBtn href="/basket" variant="outlined" color="secondary">
              Вернуться в корзину
            </CustomBtn>
            <CustomBtn type="submit">Оформить заказ</CustomBtn>
          </Stack>
        </form>
      </Grid2>

      <Grid2 size={{ xs: 12, lg: 4 }}>
        <OrderCart delivery={delivery} />
      </Grid2>
    </Grid2>
  );
};

export default OrderForm;
