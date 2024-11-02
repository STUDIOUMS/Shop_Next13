export type SortItem = {
  value: string;
  name: string;
};

export const SORT_ITEMS: SortItem[] = [
  { name: "От дешевых", value: "price" },
  { name: "От дорогих", value: "-price" },
  { name: "По алфавиту [А-Я]", value: "title" },
  { name: "По алфавиту [Я-А]", value: "-title" },
];
