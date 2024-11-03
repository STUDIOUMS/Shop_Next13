"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { SortItem } from "./constants";
import { Box, Stack } from "@mui/material";
import View from "@/ui/View";

type SortProps = {
  list: SortItem[];
};

const Sort = (props: SortProps): JSX.Element => {
  const { list } = props;
  const ref = useRef<HTMLSelectElement>(null);

  // url params
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Handle
  const sortQuery = searchParams.get("ordering") || "";
  const isOrder = searchParams.has("ordering");
  const valueQuery = isOrder ? sortQuery : "default-value";

  useEffect(() => {
    if (!isOrder) {
      ref.current!.value = "default-value";
    }
  }, [isOrder]);

  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, val: string) => {
      const params = new URLSearchParams(searchParams);
      let defaultSort = val.includes("default-value");
      params.set(name, val);

      if (defaultSort) {
        params.delete("ordering");
      }

      return params.toString();
    },
    [searchParams]
  );

  // sortHandler
  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let uri = createQueryString("ordering", e.target.value);
    router.push(pathname + `?` + uri);
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Box>
        {/* <SelectBox onChange={sortHandler} defaultValue={valueQuery} ref={ref}>
          <option value="default-value">Сортировать</option>
          {list.map((el) => (
            <option key={el.value} value={el.value}>
              {el.name}
            </option>
          ))}
        </SelectBox> */}
      </Box>
      <View />
    </Stack>
  );
};

export default Sort;
