"use client";

import { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { setLoadPager } from "@/store/appSlice";
import Btn from "../ui_old/Btn";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Spinner from "../ui_old/Spinner";
import { styled } from "styled-components";

interface ILoadmore {
  pages: number;
  all: number;
}

// Styles
const Wrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  & > *:nth-child(2) {
    margin-left: var(--pb);
  }
`;

const Loadmore: React.FC<ILoadmore> = ({ all, pages }) => {
  const load = useAppSelector((state) => state.app.loadPager);
  const dispatch = useAppDispatch();

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
    dispatch(setLoadPager(true));
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
