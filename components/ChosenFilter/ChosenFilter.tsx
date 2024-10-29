"use client";

import { CURRENCY } from "@/options/settings";
import { PackType } from "@/options/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

interface IChosenFilter {
  packs: PackType[];
}

// Styles
const ChosenList = styled.div`
  margin: 0 0 var(--pb);
`;
const ChosenTitle = styled.div`
  margin: 0 0 var(--pb);
`;
const ChosenItem = styled.div`
  background: var(--color-light);
  border-radius: 32px;
  display: inline-block;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  margin: 0 5px 5px 0;
  padding: 6px 12px;
`;

const ChosenFilter: React.FC<IChosenFilter> = ({ packs }) => {
  const [packString, setPackString] = useState<string>("");
  const searchParams = useSearchParams();
  const isHit = searchParams.has("hit");
  const isDiscount = searchParams.has("discount");
  const isNew = searchParams.has("new");
  const isPriceMin = searchParams.has("price_min");
  const priceMin = searchParams.get("price_min");
  const isPriceMax = searchParams.has("price_max");
  const priceMax = searchParams.get("price_max");
  const isPack = searchParams.has("pack");
  const packParams = searchParams.get("pack")?.split(",");

  useEffect(() => {
    let arr = packs.filter((el: PackType) =>
      packParams?.includes(el.id.toString())
    );
    let output: string = arr.map((el: PackType) => el.name).join(", ");
    setPackString(output);
  }, [searchParams, packParams, packs]);

  const output: string[] = [];
  if (isHit) output.push("Хит");
  if (isDiscount) output.push("Скидки");
  if (isNew) output.push("Новинки");
  if (isPriceMin) output.push(`От: ${priceMin} ${CURRENCY}`);
  if (isPriceMax) output.push(`До: ${priceMax} ${CURRENCY}`);
  if (isPack) output.push(`Упаковка: ${packString}`);

  if (!output.length) {
    return null;
  }

  return (
    <ChosenList>
      <ChosenTitle>Выбранные параметры:</ChosenTitle>
      {output.map((el, index) => (
        <ChosenItem key={index}>{el}</ChosenItem>
      ))}
    </ChosenList>
  );
};

export default ChosenFilter;
