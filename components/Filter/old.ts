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
