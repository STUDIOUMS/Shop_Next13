import { Price } from "@/components_old/PriceBox";
import { ViewType } from "@/options/types";
import { styled } from "styled-components";

// Styles
export const ItemPacks = styled.div`
  margin: 0 0 var(--gap);
`;
export const Item = styled.div<{ $view: ViewType }>`
  ${(props) => props.$view === "list" && "align-items: center;"}
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  padding: 10px;
  display: flex;
  flex-direction: ${({ $view }) => ($view === "list" ? "row" : "column")};
  position: relative;
  ${({ $view }) =>
    $view === "list" &&
    `
    ${ItemPacks} { margin: 0; }
    ${Price} { margin: 0 0 8px; }
  `}
`;
export const ItemDetails = styled.div<{ $view: ViewType }>`
  display: flex;
  flex: 1;
  flex-direction: ${({ $view }) => ($view === "list" ? "row" : "column")};
`;
export const ItemImage = styled.div<{ $view: ViewType }>`
  display: ${({ $view }) => ($view === "list" ? "block" : "flex")};
  height: ${({ $view }) => ($view === "list" ? "auto" : "140px")};
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
  }
  ${({ $view }) =>
    $view === "list" &&
    `
    min-width: 120px; max-width: 120px; margin: 0 var(--gap) 0 0;
    img {max-height: none;}
  `};
`;
export const ItemIcons = styled.div<{ $view: ViewType }>`
  ${({ $view }) =>
    $view === "list"
      ? `
    display: flex;
    * { margin: 0 4px 0 0; }
  `
      : `position: absolute; right: 10px; top: 10px;`}
`;
export const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 12px;
  flex: 1;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  a {
    color: inherit;
    display: block;
    transition: all 200ms ease-in-out;
    &:hover {
      color: var(--color-success-hover);
    }
  }
`;
