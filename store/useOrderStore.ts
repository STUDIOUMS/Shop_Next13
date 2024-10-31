import { Order, View } from "@/options/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface OrderStore {
  orders: Order[];
  view: View;
  setOrder: (data: Order) => void;
  setView: (data: View) => void;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    persist(
      (set) => ({
        orders: [],

        view: "grid",

        setView: (data) => set(() => ({ view: data })),

        setOrder: (data) =>
          set((state) => {
            const newOrder = { ...data, count: 1 };
            const existOrder = state.orders.find((el) => {
              if (el.id === data.id) return el;
            });

            if (existOrder) {
              state.orders.map((el) => {
                if (el.id === data.id) {
                  el.count! += 1;
                  el.total = String(Number(el.count) * Number(el.price));
                }
                return el;
              });
            } else {
              state.orders = [...state.orders, newOrder];
            }
            return { orders: state.orders };
          }),
      }),
      { name: "orders" }
    )
  )
);
