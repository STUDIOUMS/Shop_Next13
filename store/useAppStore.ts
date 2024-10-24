import { Order, View } from "@/options/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface appState {
  orders: Order[];
  toast: string | undefined;
  view: View;
  setOrder: (data: Order) => void;
  setToast: (data: string | undefined) => void;
  setView: (data: View) => void;
}

const useAppStore = create<appState>()(
  devtools(
    persist(
      (set) => ({
        orders: [],
        toast: undefined,
        view: "grid",
        setToast: (data) => set(() => ({ toast: data })),
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
