import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type FilterReturn = {
  isHit: string;
  isDiscount: string;
  isNew: string;
  isPack: string;
  applyFilter: () => void;
  chooseFilterParam: (val: string) => void;
  choosePackHandler: (val: string) => void;
};

const useFilter = (): FilterReturn => {
  // url params
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // getting of existing params
  const isHit = searchParams.has("hit") ? "true" : "false";
  const isDiscount = searchParams.has("discount") ? "true" : "false";
  const isNew = searchParams.has("new") ? "true" : "false";
  // const isPriceFrom = searchParams.get("price_min") || "";
  // const isPriceTo = searchParams.get("price_max") || "";
  const isPack = searchParams.get("pack") || "";

  const [hit, setHit] = useState<string>(isHit);
  const [discount, setDiscount] = useState<string>(isDiscount);
  const [newf, setNewf] = useState<string>(isNew);
  const [chosenPacks, setChosenPacks] = useState<string>(isPack);
  const [reset, setReset] = useState<boolean>(false);

  const chooseFilterParam = (val: string) => {
    setReset(false);
    if (val === "hit") setHit("hit");
    if (val === "discount") setDiscount("discount");
    if (val === "new") setNewf("new");
  };

  const choosePackHandler = (id: string) => {
    const exists = chosenPacks.split(",").some((packId) => packId === id);
    if (!exists) {
      if (!chosenPacks.length) {
        setChosenPacks(id);
      } else {
        setChosenPacks((prev) => [...prev.split(","), id].sort().join(","));
      }
    } else {
      setChosenPacks((prev) =>
        prev
          .split(",")
          .filter((packId) => packId !== id)
          .join(",")
      );
    }
  };

  const setFilter = useCallback(
    (arr: string[]) => {
      const params = new URLSearchParams(searchParams);

      // removing sort and limit parameters
      params.delete("ordering");
      params.delete("limit");

      // setting parameters
      arr[0] ? params.set("hit", "true") : params.delete("hit");
      arr[1] ? params.set("discount", "true") : params.delete("discount");
      arr[2] ? params.set("new", "true") : params.delete("new");
      arr[3] ? params.set("pack", arr[3]) : params.delete("pack");

      return params.toString();
    },
    [searchParams]
  );

  // applyFilter
  const applyFilter = () => {
    const uri: string = setFilter([hit, discount, newf, chosenPacks]);

    router.push(pathname + "?" + uri);
    setReset(false);
  };

  return {
    applyFilter,
    chooseFilterParam,
    choosePackHandler,
    isDiscount,
    isHit,
    isNew,
    isPack,
  };
};

export default useFilter;
