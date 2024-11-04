"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Pack } from "@/types";
import CheckField from "../CheckField";
import FilterItem from "./FilterItem";
import { useCallback, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import { CURRENCY } from "@/constants";
import CustomBtn from "@/ui/CustomBtn";

type FilterProps = {
  packs: Pack[];
};

const Filter = (props: FilterProps): JSX.Element => {
  const { packs } = props;

  // url params
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // getting of existing params
  const isHit = searchParams.has("hit") ? true : false;
  const isDiscount = searchParams.has("discount") ? true : false;
  const isNewf = searchParams.has("new") ? true : false;
  const isPriceFrom = searchParams.get("price_min") || "";
  const isPriceTo = searchParams.get("price_max") || "";
  const isPack = searchParams.get("pack")?.split(",") || [];

  // State
  const [hit, setHit] = useState<boolean>(isHit);
  const [discount, setDiscount] = useState<boolean>(isDiscount);
  const [newf, setNewf] = useState<boolean>(isNewf);
  const [priceFrom, setPriceFrom] = useState<string>(isPriceFrom);
  const [priceTo, setPriceTo] = useState<string>(isPriceTo);
  const [chosenPacks, setChosenPacks] = useState<string[]>(isPack);
  const [reset, setReset] = useState<boolean>(false);

  // isReset
  const isReset: boolean =
    hit ||
    discount ||
    newf ||
    priceFrom.length ||
    priceTo.length ||
    chosenPacks.length
      ? false
      : true;

  // setFilter
  const setFilter = useCallback(
    (arr: any[]) => {
      const params = new URLSearchParams(searchParams);

      // removing sort and limit parameters
      params.delete("ordering");
      params.delete("limit");

      // setting parameters
      arr[0] ? params.set("hit", "true") : params.delete("hit");
      arr[1] ? params.set("discount", "true") : params.delete("discount");
      arr[2] ? params.set("new", "true") : params.delete("new");
      arr[3] ? params.set("price_min", arr[3]) : params.delete("price_min");
      arr[4] ? params.set("price_max", arr[4]) : params.delete("price_max");
      arr[5] ? params.set("pack", arr[5]) : params.delete("pack");

      return params.toString();
    },
    [searchParams]
  );

  // applyFilter
  const applyFilter = () => {
    const uri: string = setFilter([
      hit,
      discount,
      newf,
      priceFrom,
      priceTo,
      chosenPacks.join(","),
    ]);
    router.push(pathname + "?" + uri);
    setReset(false);
  };

  // resetFilter
  const resetFilter = () => {
    const uri: string = searchParams.toString();

    setHit(false);
    setDiscount(false);
    setNewf(false);
    setPriceFrom("");
    setPriceTo("");
    setChosenPacks([]);
    setReset(true);

    if (uri.length) {
      router.push(pathname);
    }
  };

  // chooseFilterParam
  const chooseFilterParam = (val: string) => {
    setReset(false);
    if (val === "hit") setHit(!hit);
    if (val === "discount") setDiscount(!discount);
    if (val === "new") setNewf(!newf);
  };

  // choosePackFunc
  const choosePackFunc = (check: boolean, id: string) => {
    const packExist = chosenPacks.some((el) => el === id);
    setReset(false);
    if (!packExist) {
      setChosenPacks((prev) => [...prev, id].sort());
    } else {
      setChosenPacks((prev) => prev.filter((el) => el !== id));
    }
  };

  return (
    <Box>
      <Typography variant="h5">Фильтр</Typography>
      <Box>
        <FilterItem>
          <FormGroup>
            <CheckField handler={chooseFilterParam} label="Хит" value="hit" />
            <CheckField
              handler={chooseFilterParam}
              label="Скидка"
              value="sale"
            />
            <CheckField
              handler={chooseFilterParam}
              label="Новинки"
              value="new"
            />
          </FormGroup>
          {/* <CheckField
            handler={chooseFilterParam}
            title="Хит"
            type="checkbox"
            value="hit"
            name="hit"
            checked={hit}
            reset={reset}
          />
          <CheckField
            handler={chooseFilterParam}
            title="Скидка"
            type="checkbox"
            value="discount"
            name="discount"
            checked={discount}
            reset={reset}
          />
          <CheckField
            handler={chooseFilterParam}
            title="Новинки"
            type="checkbox"
            value="new"
            name="new"
            checked={newf}
            reset={reset}
          /> */}
        </FilterItem>

        {/* <FilterItem title={`Цена (${CURRENCY})`}>
          <Range
            handlerFrom={setPriceFrom}
            handlerTo={setPriceTo}
            from={priceFrom}
            to={priceTo}
          />
        </FilterItem>

        <FilterItem title="Упаковка">
          {packs.map((el) => {
            const checkedPack = searchParams
              .get("pack")
              ?.split(",")
              .some((i) => Number(i) === el.id);
            return (
              <CheckField
                key={el.id}
                handler={choosePackFunc}
                title={el.name}
                type="checkbox"
                value={String(el.id)}
                name="pack"
                checked={checkedPack}
                reset={reset}
              />
            );
          })}
        </FilterItem> */}
      </Box>

      <Stack direction="row">
        <CustomBtn
          variant="outlined"
          color="primary"
          fullWidth
          onClick={applyFilter}
          sx={{ mr: 2 }}
        >
          Применить
        </CustomBtn>
        <CustomBtn
          variant="outlined"
          color="secondary"
          fullWidth
          disabled
          onClick={resetFilter}
        >
          Сбросить
        </CustomBtn>
      </Stack>
    </Box>
  );
};

export default Filter;
