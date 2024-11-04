"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { SORT_ITEMS } from "./constants";
import { Stack } from "@mui/material";
import View from "@/ui/View";
import CustomSelect from "@/ui/CustomSelect";

const Sort = (): JSX.Element => {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ mb: 6 }}>
      <CustomSelect list={SORT_ITEMS} size="small" sx={{ m: 0 }} />
      <View />
    </Stack>
  );
};

export default Sort;
