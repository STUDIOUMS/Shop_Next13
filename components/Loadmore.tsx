"use client";

import { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { styled } from "styled-components";

type LoadmoreProps = {
  pages: number;
  all: number;
};

const Loadmore = (props: LoadmoreProps): JSX.Element => {
  const { all, pages } = props;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // setLoadmore
  const setLoadmore = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    const limitExists = params.get("limit");
    const limit = limitExists ? Number(limitExists) + pages : pages * 2;
    params.set("limit", limit.toString());
    return params.toString();
  }, [searchParams, pages]);

  // loadmoreHandler
  const loadmoreHandler = () => {
    const uri = setLoadmore();
    router.push(pathname + "?" + uri);
  };

  // hide if there's no need
  const urlLimit = searchParams.get("limit")
    ? Number(searchParams.get("limit"))
    : pages;

  if (urlLimit! >= Number(all)) {
    return null;
  }

  return (
    <Wrap>
      <Btn title="Показать еще" handler={loadmoreHandler} />
      {load && <Spinner size="small" />}
    </Wrap>
  );
};

export default Loadmore;
