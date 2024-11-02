import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { View } from "@/types";

interface UseAppStore {
  message: string | undefined;
  view: View;
  setMessage: (data: string | undefined) => void;
  setView: (data: View) => void;
}

export const useAppStore = create<UseAppStore>()(
  devtools((set) => ({
    message: undefined,
    view: "grid",
    setMessage: (message) => set(() => ({ message })),
    setView: (data) => set(() => ({ view: data })),
  }))
);
